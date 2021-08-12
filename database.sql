-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
CREATE TABLE "shopping-list"(
	"id" serial PRIMARY KEY,
	"name" varchar(80),
	"quantity" integer, 
	"unit" varchar (20),
	"bought" boolean default false
	);
DROP TABLE "shopping-list";
	
INSERT INTO "shopping-list"(name, quantity, unit)
VALUES ('Example', 10, '5 cups');

Select * from "shopping-list";