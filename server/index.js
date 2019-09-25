const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
// const db = require('../postgresDB');
const {getMenuDataByRestaurantsIdFromMeals, postMenuDataByRestaurantsIdFromMeals, updateMenuDataByRestaurantsIdFromMeals, deleteMeal} = require('../postgresDB/controller.js');

const app = express();
const port = 3004;

app.use(compression());
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/:L/menu', express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/:id/menu', (req, res) => {
  const { id } = req.params;
  getMenuDataByRestaurantsIdFromMeals(req, res, id);
})

app.post('/api/:id/menu', (req, res) => {
  const { id } = req.params;
  const menuData = req.body;
  postMenuDataByRestaurantsIdFromMeals(req, res, id, menuData);
})

app.put('/api/meals/:mealId', (req, res) => {
  const { mealId } = req.params;
  const menuData = req.body;
  updateMenuDataByRestaurantsIdFromMeals(req, res, mealId, menuData);
})

app.delete('/api/meals/:mealId', (req, res) => {
  const { mealId } = req.params;
  deleteMeal(req, res, mealId);
})

app.listen(port, () => { console.log(`server ${port} is listening...`); });

module.exports.app = app;
