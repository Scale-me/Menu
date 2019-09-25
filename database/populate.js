/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ 
  node: 'http://localhost:9200',
  auth: {
    username: 'kibana',
    password: 'pass'
  }
});
// const mongoose = require('mongoose');
const { createMenu } = require('./menuData.js');

// const menuSchema = new mongoose.Schema({ any: {}, id: Number }, { strict: false });

// const conn = mongoose.createConnection('mongodb://database/menu',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('connection success!');
//     }
//   });

// const Menu = conn.model('Menu', menuSchema);
let menuCounter = 1;
const seedElasticSearch = function() {
  for (let i = 1; i < 1001; i++) {
    // console.log(createMenu(1));
    //const menu = createMenu(i);
    const menu = createMenu(i);
    console.log(i);

    client.index({
      'index' : 'menu',
      'refresh' : false,
      'op_type' : 'create',
      'id' : menu.id,
      'body' : {
        'restaurantMenu' : menu
      }
    }, function (err, status) {
      if (err) {
        console.log(err);
      }
    })
  }
}

seedElasticSearch();