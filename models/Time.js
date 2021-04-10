const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Time model
class Time extends Model {

}

// create fields/columns for Time model
Time.init(
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    parkId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  },
  {  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'time'
  }
);

module.exports = Time;