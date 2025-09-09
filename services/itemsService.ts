import api from "@/lib/api";
import { itemsRepository } from "../repositories/items";

export const itemsService = {
  getAll: async () => {
    return api.get("items");
  },
};
