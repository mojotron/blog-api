import { Request, Response, NextFunction } from "express";
import { verify, JsonWebTokenError } from "jsonwebtoken";
import { UnauthenticatedError } from "../errors";
import type RequestWithUser from "../types/RequestWithUser";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (authorization === undefined || !authorization.startsWith("Bearer ")) {
      throw new UnauthenticatedError(`Auth token is not provided`);
    }
    const token = authorization.split(" ")[1];
    const decoded = verify(token, process.env.JWT_SECRET as string);
    const tokenPayload = decoded as { userId: string };
    const customRequest = req as RequestWithUser;
    customRequest.user = { userId: tokenPayload.userId };
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      next(new UnauthenticatedError("Invalid auth token provided"));
    }
    next(error);
  }
};

export default authenticate;
