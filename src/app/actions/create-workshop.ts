"use server";

import { db } from "@/db";
import { workshops } from "@/db/schema";
import z from "zod";

const wokshopInserSchema = z.object({
  name: z.string().min(3, "Too short"),
  description: z.string().min(3, "Too short"),
  price: z
    .string()
    .refine(
      (v) => !isNaN(Number(v)) && Number(v) >= 0,
      "Must be positive number"
    ),
  // .transform((v) => Number(v)),
  datetime: z
    .string()
    .refine((s) => !isNaN(Date.parse(s)), "Must be a valid date")
    .transform((s) => new Date(s)),
  isPublished: z.preprocess((val) => val === "true", z.boolean()),
});

export default async function crateWorkshop(formData: FormData) {
  console.log(formData);
  const raw = Object.fromEntries(formData.entries());
  const data = wokshopInserSchema.parse(raw);
  await db.insert(workshops).values(data);
}
