/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
const fs = require('fs');

const writeMealTimes = fs.createWriteStream('mealTimes.csv');
writeMealTimes.write('id,name\n', 'utf8');

function write7MealTimes(writer, encoding, callback) {
  let i = 8;
  let id = 0;
  const mealOptions = ['Breakfast', 'Cocktails', 'Bar', 'Dinner', 'Brunch', 'Cheese', 'Lunch', 'Dessert'];
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = mealOptions[id - 1];
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
write7MealTimes(writeMealTimes, 'utf-8', () => {
  writeMealTimes.end();
});
