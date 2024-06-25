import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import { createPassword } from "../utils/passwordHelpers";
import User from "../models/user";
import { ValidationError } from "../errors/index";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = matchedData(req);
    // check if user with email exists
    const emailExists = await User.findOne({ email });
    if (emailExists)
      throw new ValidationError("User exists", {
        email: ["email address already in use"],
      });
    // check if username exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists)
      throw new ValidationError("User exists", {
        username: ["username already in use"],
      });
    // create new user
    const hashPassword = await createPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });

    return res.status(StatusCodes.CREATED).json({
      status: "success",
      mag: "created new user account",
      data: newUser, //TODO return auth token
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = matchedData(req);
    return res
      .status(StatusCodes.OK)
      .json({ status: "success", mag: "login", data: { email, password } });
  } catch (error) {
    return next(error);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json({ status: "success", mag: "logout" });
  } catch (error) {
    return next(error);
  }
};

export { signup, login, logout };
