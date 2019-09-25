const { Pool } = require('pg');
const config = require('./config.js')
const pool = new Pool(config);

pool.connect();

const turnDataIntoMenuArrayOfObjects = (data) => {
  const { rows } = data;
  let menuArray = [];
  let menu = {};
  for(let i = 0; i < rows.length; i++){
    let meal = rows[i];
    if(!menu[meal.timename]) {
      menu[meal.timename] = {};
    }
    if(menu[meal.timename] && !menu[meal.timename][meal.categoryname]) {
      menu[meal.timename][meal.categoryname] = {};
    }
    var timeCategory = menu[meal.timename];
    var subCategory = timeCategory[meal.categoryname];
    subCategory[meal.name] = {
      price: meal.price,
      description: meal.description
    }
  }
  menuArray.push(menu);
  console.log(menuArray);
  return menuArray;
}

const getMenuDataByRestaurantsIdFromMeals = (req, res, id) => {
  pool.query(`SELECT meals.name, description, price, mealTimes.timeName, mealCategories.categoryName
    FROM meals
    INNER JOIN mealCategories ON (meals.mealCategoriesId = mealCategories.id)
    INNER JOIN mealTimes ON (meals.mealTimesId = mealTimes.id)
    WHERE restaurantsId=${id}`)
    .then(data => turnDataIntoMenuArrayOfObjects(data))
    // .then(menu => console.log(menu))
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err))
    // .catch(err => res.status(400).json({ err }))
}

const postMenuDataByRestaurantsIdFromMeals = (req, res, id, menuData) => {
  const query = {
    text: 'INSERT INTO meals (id, name, description, price, restaurantsId, mealTimesId, mealCategoriesId) VALUES($1, $2, $3, $4, $5, $6, $7)',
    values: [menuData.id, menuData.name, menuData.description, menuData.price, menuData.restaurantsId, menuData.mealTimesId, menuData.mealCategoriesId]
  }
  console.log(query);
  pool.query(query)
    .then(data => res.status(201).end())
    .catch(err => res.status(400).send(err))
}

const updateMenuDataByRestaurantsIdFromMeals = (req, res, mealId, menuData) => {
  let set = [];
  let counter = 0;
  Object.keys(menuData).forEach(item => {
    set.push(`${item} = ($${counter += 1})`)
  })
  const query = {
    text: `UPDATE meals SET ${set} WHERE id=($${counter += 1})`,
    values: Object.values(menuData).concat(mealId)
  }
  console.log(query);
  pool.query(query)
    .then(data => res.status(201).end())
    .catch(err => res.status(400).send(err))
}

const deleteMeal = (req, res, mealId) => {
  pool.query(`DELETE FROM meals WHERE id = ${mealId}`)
    .then(() => res.status(200).end())
    .catch(err => res.status(404).end())
}

module.exports = {
  getMenuDataByRestaurantsIdFromMeals,
  postMenuDataByRestaurantsIdFromMeals,
  updateMenuDataByRestaurantsIdFromMeals,
  deleteMeal
}