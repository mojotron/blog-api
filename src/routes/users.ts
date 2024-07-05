import { Router } from "express";
import {
  signup,
  login,
  logout,
  getProfile,
} from "../controllers/usersController";
import { checkSchema } from "express-validator";
// input validation
import validateInputs from "../middleware/validateInputs";
import signupUserValidator from "../validators/signupUserValidation";
import loginUserValidation from "../validators/loginUserValidation";

import protect from "../middleware/authMiddleware";

const router = Router();

router.post(
  "/signup",
  checkSchema(signupUserValidator),
  validateInputs,
  signup
);
router.post("/login", checkSchema(loginUserValidation), validateInputs, login);
router.post("/logout", logout);
// TEST
router.get("/profile", protect, getProfile);

export default router;
