import { Request, Response, NextFunction } from "express";
import { CustomApiError, ValidationError } from "../errors/index";

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

export default errorHandler;
