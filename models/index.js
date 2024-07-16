'use strict';
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tire_shop', 'postgres', 'Papasseit@2762', {
  host: 'localhost',
  dialect: 'postgres',
});

const TireShop = require('./tireshop')(sequelize, DataTypes);
const TireSize = require('./tiresize')(sequelize, DataTypes);
const TreadPattern = require('./treadpattern')(sequelize, DataTypes);
const Brand = require('./brand')(sequelize, DataTypes);

// Set up associations
TireShop.associate({ TireSize, TreadPattern, Brand });
TireSize.associate({ TireShop });
TreadPattern.associate({ TireShop });
Brand.associate({ TireShop });

module.exports = {
  sequelize,
  TireShop,
  TireSize,
  TreadPattern,
  Brand,
};


