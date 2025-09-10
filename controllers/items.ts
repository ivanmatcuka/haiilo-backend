import { offersRepository } from "@/repositories/offers";
import { itemsRepository } from "../repositories/items";
import { Context } from "koa";

export const itemsController = {
  getAll: async (ctx: Context) => {
    try {
      const items = await itemsRepository.getAll();
      const offers = await offersRepository.getAll();

      const result = items.map((item) => ({
        ...item,
        offers: offers.filter((o) => o.itemId === item.id),
      }));

      ctx.status = 200;
      ctx.body = result;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error fetching items", error };
    }
  },
};
