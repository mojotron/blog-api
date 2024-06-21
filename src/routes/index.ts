import { Router } from "express";
import postRoutes from "./posts";

const router = Router();
router.use("/api/v1/posts", postRoutes);

export default router;
