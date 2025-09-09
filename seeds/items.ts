import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("items").del();

  // Inserts seed entries
  await knex("items").insert([
    {
      id: uuidv4(),
      name: "Item 1",
      description: "Description for Item 1",
      price: 100,
    },
    {
      id: uuidv4(),
      name: "Item 2",
      description: "Description for Item 2",
      price: 200,
    },
    {
      id: uuidv4(),
      name: "Item 3",
      description: "Description for Item 3",
      price: 300,
    },
  ]);
}
