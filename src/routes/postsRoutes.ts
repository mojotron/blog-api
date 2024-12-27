import { Router } from "express";
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

const router = Router();
router.get("/", getAllPosts);
router.get("/:postId", getPost);
router.post("/", createPost);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);

export default router;
