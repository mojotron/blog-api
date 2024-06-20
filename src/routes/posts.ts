import { Router } from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  editPost,
} from "../controllers/posts";

const router = Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:postID", getPost);
router.delete("/:postID", deletePost);
router.patch("/:postID", editPost);

export default router;
