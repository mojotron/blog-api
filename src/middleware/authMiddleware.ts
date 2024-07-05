import { Request, Response, NextFunction } from "express";
import { verify, JsonWebTokenError } from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";
import type RequestWithUser from "../types/RequestWithUser";
import User from "../models/userSchema";

const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined =
      req.cookies[process.env.COOKIE_NAME as string];
    if (token === undefined) {
      throw new UnauthenticatedError("Not authorized, no token provided");
    }

    const decoded = verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    const user = await User.findById(decoded.userId);
    if (user === null) {
      throw new UnauthenticatedError("Invalid auth token provided");
    }

    const customRequest = req as RequestWithUser;
    customRequest.user = { userId: user._id };

    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      next(new UnauthenticatedError("Invalid auth token provided"));
    }
    next(error);
  }
};

export default protect;
