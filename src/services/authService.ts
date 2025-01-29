import prisma from "../config/prisma.js";
import { CONFLICT } from "../constants/http.js";
import appAssert from "../utils/appAssert.js";
import { hashPassword } from "../utils/bcrypt.js";
import { oneWeekFromNow, thirtyDaysFromNow } from "../utils/date.js";
import { signJwtAccessToken, signJwtRefreshToken } from "../utils/jwt.js";

type CreateAccountParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userAgent?: string;
};

export const createAccount = async (data: CreateAccountParams) => {
  // check if user exist with a given email
  const userExists = await prisma.user.findUnique({
    where: { email: data.email },
  });
  appAssert(!userExists, CONFLICT, "email already in use");
  // create user
  const hashedPassword = await hashPassword(data.password);
  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: hashedPassword,
    },
  });
  // create verification code
  const verificationCode = await prisma.verificationCode.create({
    data: {
      userId: user.id,
      type: "EmailVerification",
      expiresAt: oneWeekFromNow(),
    },
  });
  // send mail
  // generate session
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      userAgent: data.userAgent,
      expiresAt: thirtyDaysFromNow(),
    },
  });
  // generate token
  const accessToken = signJwtAccessToken({
    userId: user.id,
    sessionId: session.id,
  });
  const refreshToken = signJwtRefreshToken({ sessionId: session.id });

  return {
    user: { id: user.id, email: user.email },
    accessToken,
    refreshToken,
  };
};
