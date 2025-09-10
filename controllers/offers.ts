import { offersRepository } from "@/repositories/offers";
import { Context } from "koa";

export const offersController = {
  getAll: async (ctx: Context) => {
    try {
      const offers = await offersRepository.getAll();

      ctx.status = 200;
      ctx.body = offers;
    } catch (error) {
      ctx.status = 500;
      ctx.body = { message: "Error fetching offers", error };
    }
  },
};
