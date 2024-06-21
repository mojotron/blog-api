import { Router } from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  editPost,
} from "../controllers/posts";
import { checkSchema } from "express-validator";
import { createPostValidator } from "../validators/createPostValidation";

const router = Router();

router.get("/", getPosts);
router.post("/", checkSchema(createPostValidator), createPost);
router.get("/:postID", getPost);
router.delete("/:postID", deletePost);
router.patch("/:postID", editPost);

export default router;
