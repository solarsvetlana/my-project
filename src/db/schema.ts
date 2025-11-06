import {
  serial,
  pgTable,
  integer,
  varchar,
  boolean,
  timestamp,
  decimal,
  text,
} from "drizzle-orm/pg-core";

export const gameTable = pgTable("games", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }).notNull(),
});

// При любых изменениях снача меняем/добавляем схему
// генерируем npx drizzle-kit generate  - сгенерирует скрипты в папку drizzle
// мигрируем npx drizzle-kit migrate  -внесет изменения в базу данных

export const events = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});

export const workshops = pgTable("workshops", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  price: decimal().notNull(),
  isPublished: boolean().default(true),
  datetime: timestamp().notNull(),
});

export const users = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  image: text(),
  role: varchar({ length: 100 }).default("customer"),
});

export const todos = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  status: boolean().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
