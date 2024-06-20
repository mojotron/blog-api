import { Router } from "express";
import postRoutes from "./posts";

const router = Router();
router.use("/api/posts", postRoutes);

export default router;
