const Sequelize = require('sequelize');
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
    password: 'Beau123!', // Update with your local password
    port: 3306,
    database: 'friends_db', // Update with your local database
    dialect: 'mysql',
  });
}

module.exports = sequelize;
// const Sequelize = require('sequelize');

// require('dotenv').config();
// console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)
// // create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

// module.exports = sequelize;