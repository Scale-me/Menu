/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
const fs = require('fs');

const writeRestaurants = fs.createWriteStream('restaurants.csv');
writeRestaurants.write('id\n', 'utf8');

function write10MillionRestaurants(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  let progressCount = 0;
  let percentCount = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      progressCount += 1;
      if (progressCount === 1000000) {
        percentCount += 1;
        console.log(percentCount);
        progressCount = 0;
      }
      const data = `${id}\n`;
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
write10MillionRestaurants(writeRestaurants, 'utf-8', () => {
  writeRestaurants.end();
});
