import { CookieOptions, Response } from "express";
import { NODE_ENV } from "../constants/env.js";
import { fifteenMinutesFromNow, thirtyDaysFromNow } from "./date.js";

export const ACCESS_COOKIE_NAME = "mojo-blog-access-token";
export const REFRESH_COOKIE_NAME = "mojo-blog-refresh-token";
export const REFRESH_PATH = "/auth/refresh";

const defaults: CookieOptions = {
  sameSite: "strict",
  httpOnly: true,
  secure: NODE_ENV !== "development",
};

export const getAccessTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: fifteenMinutesFromNow(),
});

export const getRefreshTokenCookieOptions = (): CookieOptions => ({
  ...defaults,
  expires: thirtyDaysFromNow(),
  path: REFRESH_PATH,
});

export const setAuthCookies = (
  res: Response,
  accessToken: string,
  refreshToken: string
) => {
  return res
    .cookie(ACCESS_COOKIE_NAME, accessToken, getAccessTokenCookieOptions())
    .cookie(REFRESH_COOKIE_NAME, refreshToken, getRefreshTokenCookieOptions());
};

export const clearAuthCookies = (res: Response) => {
  return res
    .clearCookie(ACCESS_COOKIE_NAME)
    .clearCookie(REFRESH_COOKIE_NAME, { path: REFRESH_PATH });
};
