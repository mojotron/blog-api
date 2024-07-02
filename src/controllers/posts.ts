import { Request, Response, NextFunction } from "express";
import { CustomApiError } from "../errors";
import { matchedData } from "express-validator";
import Post from "../models/post";
import type RequestWithUser from "../types/RequestWithUser";

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
    // inputs are validated look at user routes middleware
    const { title, content, description, readingTime } = matchedData(req);
    const request = req as RequestWithUser;
    const { userId } = request.user;

    return res.status(200).json({
      status: "success",
      msg: "create post",
      data: { title, content, description, readingTime },
      userId,
    });
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
