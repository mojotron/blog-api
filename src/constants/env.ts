const getEnv = (key: string) => {
  const value = process.env[key];
  if (value === undefined)
    throw new Error(`unknown environment variable with key ${key}`);
  return value;
};

export const PORT = getEnv("PORT");
export const NODE_ENV = getEnv("NODE_ENV");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const ACCESS_TOKEN_SECRET = getEnv("ACCESS_TOKEN_SECRET");
export const REFRESH_TOKEN_SECRET = getEnv("REFRESH_TOKEN_SECRET");
export const RESEND_API_KEY = getEnv("RESEND_API_KEY");
