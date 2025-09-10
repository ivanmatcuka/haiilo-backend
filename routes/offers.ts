import { offersController } from "../controllers/offers";
import { Router } from "express";

const router = Router();

router.get("/", offersController.getAll);

export { router as offersRouter };
