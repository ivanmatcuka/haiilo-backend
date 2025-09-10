import api from "@/lib/api";
import type { Offer } from "@/types/offer";

export const offersService = {
  getAll: async () => {
    return (await api.get<Offer[]>("offers")).data ?? [];
  },
};
