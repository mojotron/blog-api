import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { matchedData } from "express-validator";
import User from "../models/userSchema";
import {
  UnauthenticatedError,
  ValidationError,
  CustomApiError,
} from "../errors/index";
import generateToken from "../utils/generateToken";
import type RequestWithUser from "../types/RequestWithUser";

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
    const newUser = await User.create({
      username,
      email,
      password,
    });

    if (newUser) {
      generateToken(res, newUser._id);

      return res.status(StatusCodes.CREATED).json({
        status: "success",
        mag: "created new user account",
      });
    } else {
      throw new CustomApiError(`Invalid user data`, StatusCodes.BAD_REQUEST);
    }
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = matchedData(req);

    const user = await User.findOne({ email });

    if (user && (await user.comparePasswords(password))) {
      generateToken(res, user._id);

      return res.status(StatusCodes.OK).json({
        status: "success",
        mag: "login",
        data: { email, password },
      });
    } else {
      throw new UnauthenticatedError(`Invalid User Credentials`);
    }
  } catch (error) {
    return next(error);
  }
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  res.cookie(process.env.COOKIE_NAME as string, "", {
    httpOnly: true,
    expires: new Date(0),
  });

  return res
    .status(StatusCodes.OK)
    .json({ status: "success", mag: "user logged out" });
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request = req as RequestWithUser;
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: "get user profile",
      user: { userId: request.user.userId },
    });
  } catch (error) {
    return next(error);
  }
};

export { signup, login, logout, getProfile };
