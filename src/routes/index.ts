import { Router } from "express";
import postRoutes from "./posts";
import userRoutes from "./users";

const router = Router();
router.use("/api/v1/posts", postRoutes);
router.use("/api/v1/users", userRoutes);

export default router;
