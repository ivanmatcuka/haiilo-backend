import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

const NUM_OFFERS = 10;
const MAX_ITEMS_PER_OFFER = 5;
const TABLE_NAME = "offers";

export async function seed(knex: Knex): Promise<void> {
  await knex(TABLE_NAME).del();

  const items = await knex("items");

  if (items.length === 0) {
    throw new Error("No items found. Seed the items table first.");
  }

  const offers = Array.from({ length: NUM_OFFERS }).map(() => {
    const item = items[Math.floor(Math.random() * items.length)];
    const numberOfItems = Math.floor(Math.random() * MAX_ITEMS_PER_OFFER) + 1;

    return {
      id: uuidv4(),
      itemId: item.id,
      numberOfItems,
      price: item.price * numberOfItems * 0.9, // Just guessing here, 10% discount for offers
      validFrom: faker.date.past(),
      validTo: faker.date.future(),
      createdAt: knex.fn.now(),
      updatedAt: knex.fn.now(),
    };
  });

  await knex(TABLE_NAME).insert(offers);
}
