import { db } from "@/database/connection";
import { Item } from "@/models/item";

export const itemsRepository = {
  getAll: async () => {
    return await db<Item>("items").select("*");
  },
};
