import { db } from "@/database/connection";
import { Item } from "@/models/item";

export const itemsRepository = {
  getAll: async () => {
    return db<Item>("items").select("*");
  },
};
