import Router from "@koa/router";
import { offersController } from "../controllers/offers";

const router = new Router({ prefix: "/offers" });
router.get("/", offersController.getAll);

export { router as offersRouter };
