import config from "@/knexfile";
import knex from "knex";

const checkConnection = async () => {
  try {
    await db.table("items").select("*").limit(1);
    console.log("Database connection established");
  } catch (error) {
    console.error("Error establishing database connection:", error);
    process.exit(1);
  }
};

const db = knex({
  ...config.development,
});

checkConnection();

export { db };
