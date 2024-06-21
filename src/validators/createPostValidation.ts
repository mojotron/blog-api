import { Schema } from "express-validator";
import { POST_LENGTHS } from "../constants/post";

export const createPostValidator: Schema = {
  title: {
    in: ["body"],
    isString: {
      errorMessage: "title must be string",
    },
    isLength: {
      options: { min: POST_LENGTHS.title.min, max: POST_LENGTHS.title.min },
      errorMessage: `title length must be between ${POST_LENGTHS.title.min} and ${POST_LENGTHS.title.max} characters`,
    },
    trim: true,
    escape: true,
  },

  content: {
    in: ["body"],
    isString: {
      errorMessage: "content must be string",
    },
    isLength: {
      options: { min: POST_LENGTHS.content.min, max: POST_LENGTHS.content.min },
      errorMessage: `content length must be between ${POST_LENGTHS.content.min} and ${POST_LENGTHS.content.max} characters`,
    },
    trim: true,
    escape: true,
  },

  description: {
    in: ["body"],
    isString: {
      errorMessage: "description must be string",
    },
    isLength: {
      options: {
        min: POST_LENGTHS.description.min,
        max: POST_LENGTHS.description.min,
      },
      errorMessage: `description length must be between ${POST_LENGTHS.description.min} and ${POST_LENGTHS.description.max} characters`,
    },
    trim: true,
    escape: true,
  },

  readingTime: {
    in: ["body"],
    isNumeric: {
      errorMessage: "reading time (in minutes) must is required",
    },
  },
};
