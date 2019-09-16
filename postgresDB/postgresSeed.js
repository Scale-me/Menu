/* eslint-disable max-len */
/* eslint-disable no-plusplus */
const faker = require('faker');
const Chance = require('chance');

const chance = Chance();

let restaurants = [];
let foods = [];
let mealTimes = [];
let mealCategories = [];
const amount = 1;

for (let i = 1; i <= amount; i++) {
  restaurants.push({
    id: i,
  });
  foods.push({
    id: i,
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
    price: chance.floating({ min: 5, max: 200, fixed: 2 }),
    restaurants_id: i,
    mealTimes_id: Math.floor(Math.random() * ((Math.floor(7)) - (Math.ceil(1)) + 1)) + Math.ceil(1),
    mealCategories_id: Math.floor(Math.random() * ((Math.floor(19)) - (Math.ceil(1)) + 1)) + Math.ceil(1),
  });
};

