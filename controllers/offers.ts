import { offersRepository } from "@/repositories/offers";
import { Request, Response } from "express";

export const offersController = {
  getAll: async (_: Request, res: Response) => {
    try {
      const offers = await offersRepository.getAll();
      res.status(200).json(offers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching items", error });
    }
  },
};
