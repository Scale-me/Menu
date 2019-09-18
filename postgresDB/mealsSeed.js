/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
const faker = require('faker');
const Chance = require('chance');
const fs = require('fs');

const chance = Chance();

const writeMeals = fs.createWriteStream('meals.csv');
writeMeals.write('id,name,description,price,restaurantsId,mealTimesId,mealCategoriesId\n', 'utf8');

function write100MillionMeals(writer, encoding, callback) {
  let i = 100000000;
  let rc = 1;
  let id = 0;
  let mealc = 0;
  let progressCount = 0;
  let percentCount = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      mealc += 1;
      progressCount += 1;
      if (progressCount === 1000000) {
        percentCount += 1;
        console.log(percentCount);
        progressCount = 0;
      }
      const name = faker.lorem.word();
      const description = faker.lorem.sentence();
      const price = chance.floating({ min: 5, max: 200, fixed: 2 });
      if (mealc === 11) {
        mealc = 0;
        rc += 1;
      }
      const restaurantsId = rc;
      const mealTimesId = Math.floor(Math.random() * ((Math.floor(7)) - (Math.ceil(1)) + 1)) + Math.ceil(1);
      const mealCategoriesId = Math.floor(Math.random() * ((Math.floor(19)) - (Math.ceil(1)) + 1)) + Math.ceil(1);
      const data = `${id},${name},${description},${price},${restaurantsId},${mealTimesId},${mealCategoriesId}\n`;
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
write100MillionMeals(writeMeals, 'utf-8', () => {
  writeMeals.end();
});
