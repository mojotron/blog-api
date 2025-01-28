import bcrypt from "bcryptjs";

export const hashPassword = async (
  password: string,
  saltRounds: number = 10
) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(password, hashedPassword).catch(() => false);
};
