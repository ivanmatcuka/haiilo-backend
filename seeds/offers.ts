import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("offers").del();

  // Fetch some existing items to attach offers to
  const items = await knex("items").select("id").limit(3);

  if (items.length === 0) {
    throw new Error("No items found. Seed the items table first.");
  }

  // Insert example   // Inserts seed entries

  await knex("offers").insert(
    items.map((item, index) => ({
      id: uuidv4(),
      itemId: item.id,
      numberOfItems: index + 1,
      price: (index + 1) * 900,
      validFrom: new Date(`2025-0${index + 1}-01T00:00:00Z`),
      validTo: new Date(`2025-0${index + 1 * 6}-30T23:59:59Z`),
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
    }))
  );
}
