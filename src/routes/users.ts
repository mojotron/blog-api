import { Router } from "express";
import { signup, login, logout } from "../controllers/users";
import { checkSchema } from "express-validator";
// input validation
import validateInputs from "../middleware/validateInputs";
import signupUserValidator from "../validators/signupUserValidation";
import loginUserValidation from "../validators/loginUserValidation";

const router = Router();

router.post(
  "/signup",
  checkSchema(signupUserValidator),
  validateInputs,
  signup
);
router.post("/login", checkSchema(loginUserValidation), validateInputs, login);
router.post("/logout", logout);

export default router;
