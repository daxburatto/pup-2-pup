const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dog_age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dog_breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;