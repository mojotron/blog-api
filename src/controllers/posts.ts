import { Request, Response, NextFunction } from "express";
import { CustomApiError } from "../errors";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ status: "success", msg: "all posts" });
  } catch (error) {
    return next(new CustomApiError("could not load posts"));
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "get single post" });
  } catch (error) {
    return next(new CustomApiError("could not load post"));
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ status: "success", msg: "create post" });
  } catch (error) {
    return next(new CustomApiError("could not load post"));
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "delete post" });
  } catch (error) {
    return next(new CustomApiError("could not load post"));
  }
};

const editPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postID } = req.params;
    return res.status(200).json({ status: "success", msg: "edit post" });
  } catch (error) {
    return next(new CustomApiError("could not load post"));
  }
};

export { getPosts, getPost, createPost, deletePost, editPost };
