import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const catalogTable = pgTable("catalog", {
  id: text('id').primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  location: text('location').notNull().unique(),
});




//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     location: string;
//   }[]
//   */

export type selectTemplate = typeof catalogTable.$inferSelect;




//    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//    await client.sql`
//      CREATE TABLE IF NOT EXISTS Catalog (
//        id TEXT PRIMARY KEY,
//        name VARCHAR(255) NOT NULL,
//        location TEXT NOT NULL UNIQUE
//      );
//    `;


