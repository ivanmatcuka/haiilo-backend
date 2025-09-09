import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("offers", (table) => {
    table.uuid("id").primary();
    table
      .uuid("itemId")
      .notNullable()
      .references("id")
      .inTable("items")
      .onDelete("CASCADE");
    table.integer("numberOfItems").notNullable();
    table.float("price").notNullable();
    table.dateTime("validFrom").notNullable();
    table.dateTime("validTo").notNullable();
    table.timestamp("createdAt").defaultTo(knex.fn.now());
    table.timestamp("updatedAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("offers");
}
