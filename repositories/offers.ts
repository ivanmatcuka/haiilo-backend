import { db } from "@/database/connection";
import { Offer } from "@/models/offer";

export const offersRepository = {
  getAll: async () => {
    return db<Offer>("offers").select("*");
  },
};
