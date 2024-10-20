const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const AutomacaoData = sequelize.define('AutomacaoData', {
  temperatura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pressao: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  tempo: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = AutomacaoData;
