import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("This page is of no use.");
});

export default router;
