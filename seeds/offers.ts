import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";

export async function seed(knex: Knex): Promise<void> {
  await knex("offers").del();

  const items = await knex("items").select("id").limit(3);

  if (items.length === 0) {
    throw new Error("No items found. Seed the items table first.");
  }

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
