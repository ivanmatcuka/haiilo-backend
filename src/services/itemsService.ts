import api from "@/lib/api";
import type { Item } from "@/types/item";

export const itemsService = {
  getAll: async () => {
    return (await api.get<Item[]>("items")).data ?? [];
  },
};
