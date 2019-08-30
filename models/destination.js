module.exports = function(sequelize, DataTypes) {
    const Destination = sequelize.define("Destinations", {
      dName: DataTypes.STRING,
      location: DataTypes.STRING,
      berths: DataTypes.INTEGER,
      dock_stations: DataTypes.INTEGER
    });
    return Destination;
  };
  