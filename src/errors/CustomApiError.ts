import { StatusCodes } from "http-status-codes";

class CustomApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = StatusCodes.BAD_REQUEST) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomApiError;
