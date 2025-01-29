import { Request, Response } from "express";
import catchErrors from "../utils/catchErrors.js";
import { registerSchema } from "./authSchemas.js";
import { createAccount } from "../services/authService.js";
import { CREATED } from "../constants/http.js";

export const registerHandler = catchErrors(
  async (req: Request, res: Response) => {
    const request = registerSchema.parse({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });

    const { accessToken, refreshToken } = await createAccount(request);

    return res.status(CREATED).json({ message: "user created" });
  }
);
