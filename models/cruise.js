// const Ship = require('./ship.js');
// const Destination = require('./destination.js');
// const models = require('../models')
// require('./index')

module.exports = function(sequelize, DataTypes) {
    const Cruise = sequelize.define("Cruises", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      depart_date: DataTypes.DATE,
      arrival_date: DataTypes.DATE
    });

    Cruise.associate = function(models) {
      // models.Cruise.belongsTo(models.Ship, {
      //   foreignKey: {
      //     allowNull: false
      //   }
      // });
      models.Cruises.belongsTo(models.Ships, {foreignKey: 'Ship_id'});
      models.Cruises.belongsTo(models.Destinations, {foreignKey: 'depart_id'})
      models.Cruises.belongsTo(models.Destinations, {foreignKey: 'dest_id'})
    };

    return Cruise;
  };
  