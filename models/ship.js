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

    Ship.associate = function(models) {
      models.Ships.hasMany(models.Cruises, {foreignKey: 'Ship_id'});
    };
    return Ship;
  };
  