'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tireshop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  TireShop.init({

    tire_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    brand_name: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    size: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    tread_pattern: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'TireShop',
    tableName: 'tire_shop',
    timestamps: false,
})
return TireShop;
};