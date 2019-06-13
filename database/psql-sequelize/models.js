const Sequelize = require('sequelize');
const connection = require('./index.js');

const Restaurant = connection.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: Sequelize.STRING,
  name: Sequelize.STRING,
  categories: Sequelize.ARRAY(Sequelize.STRING),
  ratings: Sequelize.DECIMAL,
  counts: Sequelize.INTEGER,
  waitingtime: Sequelize.STRING
}, { timestamps: false })

connection.sync();

module.exports = Restaurant;