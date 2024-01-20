import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "!Q2w3e4r",
    database: "cabin",
  }
} satisfies Config;