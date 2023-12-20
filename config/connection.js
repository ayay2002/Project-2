const { Sequelize } = require('sequelize');
/* const Friend = require('../models/friend'); */
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use Heroku database
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use local database configuration
  sequelize = new Sequelize({
    host: 'localhost',  // Update with your local host
    username: 'root', // Update with your local username
    password: '', // Update with your local password
    port: 3306,
    database: 'friends_db', // Update with your local database
    dialect: 'mysql',
  });
}

module.exports = sequelize;
