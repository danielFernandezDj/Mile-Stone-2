'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tire_shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  Tire_shop.init({

    tire_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
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
    modelName: 'tires',
    timestamps: false,
})
return Tire_shop
}