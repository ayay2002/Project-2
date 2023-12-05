const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Friend extends Model { }

Friend.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },home_city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'friend',
    }
);

module.exports = Friend;