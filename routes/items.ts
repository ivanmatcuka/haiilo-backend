import { itemsController } from "../controllers/items";
import { Router } from "express";

const router = Router();

router.get("/", itemsController.getAll);

export { router as itemsRouter };
