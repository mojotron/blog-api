import { Router } from "express";
import postsRoutes from "./postsRoutes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "test", success: true });
});

router.use("/api/v1/posts", postsRoutes);

export default router;
