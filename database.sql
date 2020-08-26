
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "avatar" varchar (300),
  	"first_name" varchar (60),
  	"last_name" varchar (80),
  	"email_address" varchar (200)
);

CREATE TABLE "sellers" (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "avatar" varchar,
  "email" varchar,
  "password" varchar
);

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "rating" int
);

CREATE TABLE "sellers_skills" (
  "id" SERIAL PRIMARY KEY,
  "seller_id" INT REFERENCES "sellers",
  "skills_id" INT REFERENCES "skills"
);

CREATE TABLE "sellers_reviews" (
  "id" SERIAL PRIMARY KEY,
  "seller_id" INT REFERENCES "sellers",
  "reviews_id" INT REFERENCES "reviews",
  "user_id" INT REFERENCES "user"
);

CREATE TABLE "listings" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int,
  "seller_id" int,
  "start_time" time,
  "end_time" time,
  "price_per_hour" int,
  "active" boolean
);

CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int REFERENCES "user" ,
  "skill_name" varchar,
  "category" varchar,
  "price" int
);

CREATE TABLE "sellers" (
  "id" SERIAL PRIMARY KEY,
  "user_id" varchar
);


SELECT skills.id, user_id, skill_name, category, price, avatar, first_name, email_address FROM skills
JOIN "user" ON "skills".user_id= "user".id ORDER BY category ASC;


SELECT * FROM skills WHERE "user_id" = 2;

SELECT * FROM skills WHERE "skills".user_id = 2;

SELECT skills.id FROM skills
JOIN "user" ON "skills".user_id= "user".id;

SELECT skills.id, user_id, skill_name, category, price, avatar, first_name, email_address FROM skills
      JOIN "user" ON "skills".user_id= "user".id ORDER BY first_name ASC;



