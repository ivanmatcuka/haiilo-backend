import { itemsRepository } from "../repositories/items";
import { Request, Response } from "express";

export const itemsController = {
  getAll: async (_: Request, res: Response) => {
    try {
      const items = await itemsRepository.getAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: "Error fetching items", error });
    }
  },
};
