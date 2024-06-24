import { genSalt, hash, compare } from "bcrypt";

const createPassword = async (inputPassword: string): Promise<string> => {
  try {
    const salt = await genSalt(12);
    const hashedPassword = await hash(inputPassword, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

const comparePasswords = async (
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  try {
    const isMatch = await compare(inputPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

export { createPassword, comparePasswords };
