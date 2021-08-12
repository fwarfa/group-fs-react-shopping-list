-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shopping-list"(
	"id" serial PRIMARY KEY,
	"name" varchar(80),
	"quantity" integer,
	"bought" BOOLEAN DEFAULT FALSE, 
	"unit" varchar (20)
	);
DROP TABLE "shopping-list";
	
INSERT INTO "shopping-list"(name, quantity, unit)
VALUES ('Example', 10, '5 cups');

Select * from "shopping-list";