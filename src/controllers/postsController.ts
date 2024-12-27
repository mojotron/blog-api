import { Request, Response, NextFunction } from "express";

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: "success", msg: "all posts", data: {} });
    return;
  } catch (error) {
    return next(error);
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    res
      .status(200)
      .json({ status: "success", msg: `post id:${postId}`, data: {} });
    return;
  } catch (error) {
    return next(error);
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ status: "success", msg: `create post`, data: {} });
    return;
  } catch (error) {
    return next(error);
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    res
      .status(200)
      .json({ status: "success", msg: `update post id:${postId}`, data: {} });
    return;
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    res
      .status(200)
      .json({ status: "success", msg: `delete post id:${postId}`, data: {} });
    return;
  } catch (error) {
    return next(error);
  }
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
