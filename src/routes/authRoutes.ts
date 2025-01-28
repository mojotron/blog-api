import { Router } from "express";
import { registerHandler } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", registerHandler);

export default authRouter;
