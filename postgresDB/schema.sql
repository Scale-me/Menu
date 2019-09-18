DROP DATABASE IF EXISTS menu;

CREATE DATABASE menu;

\c menu;

CREATE TABLE restaurants (
  id int PRIMARY KEY
);

CREATE TABLE mealTimes (
  id int PRIMARY KEY,
  name varchar(30) NOT NULL
);

CREATE TABLE mealCategories (
  id int PRIMARY KEY,
  name varchar(30) NOT NULL
);

CREATE TABLE meals (
  id int PRIMARY KEY,
  name varchar(30) NOT NULL,
  description varchar(200),
  price FLOAT(2),
  restaurantsId int REFERENCES restaurants(id),
  mealTimesId int REFERENCES mealTimes(id),
  mealCategoriesId int REFERENCES mealCategories(id)
);
