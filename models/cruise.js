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
      models.Cruises.belongsTo(models.Ships, {foreignKey: 'Ship_id'});
      models.Cruises.belongsTo(models.Destinations, 
        {as: 'depart_id_fk', foreignKey: 'depart_id'}), 
      models.Cruises.belongsTo(models.Destinations, 
        {as: 'dest_id_fk', foreignKey: 'dest_id'});
    };

    return Cruise;
  };
  