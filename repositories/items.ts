import { db } from "@/database/connection";
import { Item } from "@/models/item";
import { offersRepository } from "./offers";
import { Offer } from "@/models/offer";

export const itemsRepository = {
  getAll: async () => {
    const offers: Offer[] = await offersRepository.getAll();
    const items = await db<Item>("items").select("*");

    return items.map((item) => ({
      ...item,
      offers: offers.filter((o) => o.itemId === item.id),
    }));
  },
};
