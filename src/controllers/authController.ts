import { Request, Response } from "express";
import catchErrors from "../utils/catchErrors.js";
import { registerSchema } from "./authSchemas.js";
import { createAccount } from "../services/authService.js";

export const registerHandler = catchErrors(
  async (req: Request, res: Response) => {
    const request = registerSchema.parse({
      ...req.body,
      userAgent: req.headers["user-agent"],
    });

    await createAccount(request);
  }
);
