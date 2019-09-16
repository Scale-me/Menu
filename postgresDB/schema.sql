CREATE DATABASE menu;

USE menu;

CREATE TABLE restaurants (
  id int NOT NULL PRIMARY KEY,
);

CREATE TABLE meals (
  id int NOT NULL PRIMARY KEY,
  name varchar(20) NOT NULL,
  description varchar(50),
  price int NOT NULL,
  restaurants_id int FOREIGN KEY REFERENCE restaurants(restaurants_id),
  mealTimes_id int FOREIGN KEY REFERENCE mealTimes(mealTimes_id),
  mealCategories_id int FOREIGN KEY REFERENCE mealCategories(mealCategories_id),
);

CREATE TABLE mealTimes (
  id int NOT NULL PRIMARY KEY,
  name varchar(20) NOT NULL,
);

CREATE TABLE mealCategories (
  id int NOT NULL PRIMARY KEY,
  name varchar(20) NOT NULL,
);
