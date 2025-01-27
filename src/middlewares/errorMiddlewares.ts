import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http.js";

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`PATH: ${req.path}`, err);

  res.status(INTERNAL_SERVER_ERROR).json({ message: "internal server error" });
  return;
};

export { notFoundMiddleware, errorHandlerMiddleware };
