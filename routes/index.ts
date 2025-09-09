import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (_: Request, res: Response) => {
  res.render("index", { title: "Express" });
});

export default router;
