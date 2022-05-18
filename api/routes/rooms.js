import express from "express";

const router = express.Router();

router.get("/rooms", (req, res) => {
  res.send("Hello this is rooms endpoint");
});

export default router;
