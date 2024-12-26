import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "test", success: true });
});

export default router;
