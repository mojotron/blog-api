import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "./index";

class ValidationError extends CustomApiError {
  statusCode: number = StatusCodes.BAD_REQUEST;
  inputFieldError: { [key: string]: string[] } = {};

  constructor(message: string, inputFieldError: { [key: string]: string[] }) {
    super(message);
    this.inputFieldError = inputFieldError;
  }
}

export default ValidationError;
