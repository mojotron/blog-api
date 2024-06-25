import { Schema } from "express-validator";
import { USER_LENGTHS } from "../constants/user";

const loginUserValidation: Schema = {
  email: {
    in: ["body"],
    notEmpty: {
      errorMessage: `email field must not be empty`,
    },
    isString: {
      errorMessage: `email field must be string`,
    },
    isEmail: {
      errorMessage: `email form is invalid`,
    },
    normalizeEmail: true,
    trim: true,
    escape: true,
  },

  password: {
    in: ["body"],
    isString: {
      errorMessage: `password must be a string`,
    },
    notEmpty: {
      errorMessage: `password field must not be empty`,
    },
    isLength: {
      options: { min: USER_LENGTHS.password.min },
      errorMessage: `password must have at least ${USER_LENGTHS.password.min} characters`,
    },
    matches: {
      options: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
      errorMessage: `password must include uppercase, lowercase, digit and special character (-_$#)`,
    },
    trim: true,
    escape: true,
  },
};

export default loginUserValidation;
