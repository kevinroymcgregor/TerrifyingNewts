module.exports = function(sequelize, DataTypes) {
    const Ship = sequelize.define("Ships", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      sName: DataTypes.STRING,
      sClass: DataTypes.STRING,
      length: DataTypes.INTEGER,
      width: DataTypes.INTEGER,
      dateCommisioned: DataTypes.DATEONLY,
      propulsionType: DataTypes.STRING,
      fuel: DataTypes.STRING,
      maxPassenger: DataTypes.INTEGER,
      crew: DataTypes.INTEGER
    });

    // Ship.associate = function(models) {
    //   // models.Cruise.belongsTo(models.Ship, {
    //   //   foreignKey: {
    //   //     allowNull: false
    //   //   }
    //   // });
    //   models.Ship.hasMany(models.Cruise, {foreignKey: 'Ship_id'});
    //   // Cruise.hasMany(Destination, {foreignKey: 'depart_id'})
    //   // Cruise.hasMany(Destination, {foreignKey: 'dest_id'})
    // };
    return Ship;
  };
  