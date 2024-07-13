import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../errors";
import {
  validationResult,
  FieldValidationError,
  matchedData,
} from "express-validator";

const validateInputs = (req: Request, res: Response, next: NextFunction) => {
  const results = validationResult(req);
  // check if there is any invalid input
  if (!results.isEmpty()) {
    const inputError: { [key: string]: string[] } = {};
    results.array().forEach((err) => {
      const { path, msg } = err as FieldValidationError;
      if (inputError[path] === undefined) inputError[path] = [msg];
      else inputError[path] = [...inputError[path], msg];
    });
    throw new ValidationError("Invalid Form Values", inputError);
  } else {
    next();
  }
};

export default validateInputs;
