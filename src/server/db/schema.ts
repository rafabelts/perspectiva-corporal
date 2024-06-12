// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { numeric, pgTableCreator, uuid, varchar } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => name);

export const person = createTable("person", {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  gender: varchar("gender").notNull(),
});

export const perspective = createTable("perspective", {
  id: uuid("id").defaultRandom().primaryKey(),
  person_id: uuid("person_id").references(() => person.id),
  height: numeric("height").notNull(),
  weight: numeric("weight").notNull(),
  body: varchar("body").notNull(),
  mental_iss: varchar("mental_iss").notNull(),
  obesity_treatment: varchar("obesity_treatment").notNull(),
});

export const real = createTable("real", {
  id: uuid("id").defaultRandom().primaryKey(),
  person_id: uuid("person_id").references(() => person.id),
  height: numeric("height").notNull(),
  weight: numeric("weight").notNull(),
});
