import assert from "node:assert";
import { HttpStatusCode } from "../constants/http.js";
import AppErrorCode from "../constants/appErrorCode.js";
import AppError from "./AppError.js";

type AppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string,
  errorCode?: AppErrorCode
) => asserts condition;

const appAssert: AppAssert = (condition, httpStatusCode, message, errorCode) =>
  assert(condition, new AppError(httpStatusCode, message, errorCode));

export default appAssert;
