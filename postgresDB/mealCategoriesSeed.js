/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
const fs = require('fs');

const writeMealCategories = fs.createWriteStream('mealCategories.csv');
writeMealCategories.write('id,name\n', 'utf8');

function write19MealCategories(writer, encoding, callback) {
  let i = 19;
  let id = 0;
  const foodCategories = ['Raw Bar', 'Snacks', 'Appetizers', 'Cheese', 'Absinthe Classics', 'Entrees', 'Sides', 'Small Plates', 'Soups & Salads', 'Pastries', 'Main', 'Desserts', 'After-dinner Spirits', 'Selection of Brandy', 'Selected Single-malt Scotches', 'Port & Sherry & Madeira', 'Dessert Wines', 'Selection of Tea', 'Cocktails'];
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = foodCategories[id - 1];
      const data = `${id},${name}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
write19MealCategories(writeMealCategories, 'utf-8', () => {
  writeMealCategories.end();
});
