CREATE TABLE "workshops" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "workshops_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"price" numeric NOT NULL,
	"isPublished" boolean DEFAULT true,
	"datetime" timestamp NOT NULL
);
