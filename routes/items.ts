import Router from "@koa/router";
import { itemsController } from "../controllers/items";

const router = new Router({ prefix: "/items" });
router.get("/", itemsController.getAll);

export { router as itemsRouter };
