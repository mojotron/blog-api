import { Schema } from "express-validator";
import { USER_LENGTHS } from "../constants/user";

export const signupUserValidator: Schema = {
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
  username: {
    in: ["body"],
    notEmpty: {
      errorMessage: `username field must not be empty`,
    },
    isString: {
      errorMessage: `username field must be string`,
    },
    isLength: {
      options: {
        min: USER_LENGTHS.username.min,
        max: USER_LENGTHS.username.max,
      },
      errorMessage: `username must be between ${USER_LENGTHS.username.min}-${USER_LENGTHS.username.max} characters long`,
    },
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
  confirmPassword: {
    in: ["body"],
    custom: {
      options: (confirmPassword, { req }) => {
        const password = req.body.password;
        if (password !== confirmPassword)
          throw new Error("password and confirm password must be same");
        else return true;
      },
    },
    isString: {
      errorMessage: `password must be a string`,
    },
    notEmpty: {
      errorMessage: `password field must not be empty`,
    },
    trim: true,
    escape: true,
  },
};
