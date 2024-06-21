import { StatusCodes } from "http-status-codes";

class CustomApiError extends Error {
  statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;

  constructor(message: string) {
    super(message);
  }
}

export default CustomApiError;
