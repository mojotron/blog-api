import { StatusCodes } from "http-status-codes";

class CustomApiError extends Error {
  statusCode: number;

  constructor(
    message: string,
    statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default CustomApiError;
