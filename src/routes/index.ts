import { Router } from "express";
import postRoutes from "./posts";
import userRoutes from "./users";
import authenticate from "../middleware/authenticate";

const router = Router();
router.use("/api/v1/posts", authenticate, postRoutes);
router.use("/api/v1/users", userRoutes);

export default router;
