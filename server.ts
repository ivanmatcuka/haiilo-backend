import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import indexRouter from "./routes/index";
import { itemsRouter } from "./routes/items";
import { offersRouter } from "./routes/offers";
const PORT: number = Number(process.env.PORT) || 3000;

const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(indexRouter.routes());
app.use(indexRouter.allowedMethods());
app.use(itemsRouter.routes());
app.use(itemsRouter.allowedMethods());
app.use(offersRouter.routes());
app.use(offersRouter.allowedMethods());

app.use(async (ctx, next) => {
  await next();

  if (ctx.status === 404) {
    ctx.throw(404, "Not Found");
  }
});

app.on("error", console.error);
app.listen(PORT);

export default app;
