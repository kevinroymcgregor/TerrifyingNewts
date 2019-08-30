module.exports = function(sequelize, DataTypes) {
    const Ship = sequelize.define("Ships", {
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
    return Ship;
  };
  