import type { Knex } from "knex";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

const NUM_PRODUCTS = 10;

export async function seed(knex: Knex): Promise<void> {
  await knex("items").del();

  const products = Array.from({ length: NUM_PRODUCTS }).map(() => ({
    id: uuidv4(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
  }));

  await knex("items").insert(products);
}
