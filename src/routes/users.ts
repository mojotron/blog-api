import { Router } from "express";
import { signup, login, logout } from "../controllers/users";
import { checkSchema } from "express-validator";
import { signupUserValidator } from "../validators/signupUserValidator";
import validateInputs from "../middleware/validateInputs";

const router = Router();

router.post(
  "/signup",
  checkSchema(signupUserValidator),
  validateInputs,
  signup
);
router.post("/login", login);
router.post("/logout", logout);

export default router;
