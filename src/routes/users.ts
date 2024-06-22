import { Router } from "express";
import { signup, login, logout } from "../controllers/users";
import { checkSchema } from "express-validator";
import { signupUserValidator } from "../validators/signupUserValidator";

const router = Router();

router.post("/signup", checkSchema(signupUserValidator), signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
