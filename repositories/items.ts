import knex from "knex";
import { Item } from "../models/item";

export const itemsRepository = {
  getAll: async () => {
    return knex<Item>("items").select("*");
  },
};
