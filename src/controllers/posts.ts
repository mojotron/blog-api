import { Request, Response, NextFunction } from "express";
import { CustomApiError, ValidationError } from "../errors";
import {
  validationResult,
  FieldValidationError,
  matchedData,
} from "express-validator";
import Post from "../models/post";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ status: "success", msg: "all posts" });
  } catch (error) {
    return next(error);
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "get single post" });
  } catch (error) {
    return next(error);
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validation = validationResult(req);
    // INVALID INPUTS
    if (!validation.isEmpty()) {
      const inputError: { [key: string]: string[] } = {};

      validation.array().forEach((err) => {
        const { path, msg } = err as FieldValidationError;
        if (inputError[path] === undefined) inputError[path] = [msg];
        else inputError[path] = [...inputError[path], msg];
      });

      throw new ValidationError("invalid post form values", inputError);
    }
    // VALID INPUTS
    const { title, content, description, readingTime } = matchedData(req);

    return res.status(200).json({ status: "success", msg: "create post" });
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "delete post" });
  } catch (error) {
    return next(error);
  }
};

const editPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "edit post" });
  } catch (error) {
    return next(error);
  }
};

export { getPosts, getPost, createPost, deletePost, editPost };
