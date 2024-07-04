import { Response } from "express";
import { sign } from "jsonwebtoken";

const generateToken = (res: Response, userId: string) => {
  const token = sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFESPAN,
  });
  // set http only cookie
  res.cookie(process.env.COOKIE_NAME as string, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
};

export default generateToken;
