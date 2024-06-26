import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../errors/index";
import { StatusCodes } from "http-status-codes";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    status: "error",
    msg: "resource not found",
    statusCode: StatusCodes.NOT_FOUND,
  });
};

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // handle POST errors, includes input field names with array of error messages from validation object
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      status: "error",
      msg: err.message,
      statusCode: err.statusCode,
      inputFieldError: err.inputFieldError,
    });
  }

  return res.status(500).json({ status: "error", msg: err.message });
};

export { notFound, errorHandler };
