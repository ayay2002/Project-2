// connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'wb39lt71kvkgdmw0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  username: 'ghcd5sgxjopl8y0c',
  password: 'vj0xvtgde0o03bu8',
  port: 3306,
  database: 'nq2uopn4homyqjoe',
  dialect: 'mysql',
});

module.exports = sequelize;
