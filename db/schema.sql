DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(500) NOT NULL,
    ate boolean default false,
	PRIMARY KEY (id)
);

-- throw in some shake shack 
INSERT INTO burgers (name) VALUES ('ShackBurger');
INSERT INTO burgers (name) VALUES ('Hamburger');
INSERT INTO burgers (name) VALUES ('Shack Stack');
INSERT INTO burgers (name) VALUES ('SmokeShack');
INSERT INTO burgers (name) VALUES ('Shroom Burger');

-- Checking to see which burgers were ordered, and eaten 
-- The ones that should have been are ShackBurger & Hamburger
UPDATE burgers SET ate = true WHERE id= 1;
UPDATE burgers SET ate = true WHERE id= 2;

SELECT * FROM burgers;
