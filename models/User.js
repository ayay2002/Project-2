const {Model,  DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}
User.init(
  {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  homeCity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
