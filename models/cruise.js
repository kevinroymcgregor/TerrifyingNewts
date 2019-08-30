module.exports = function(sequelize, DataTypes) {
    const Cruise = sequelize.define("Cruises", {
      ship_id: DataTypes.INTEGER,
      depart_id: DataTypes.INTEGER,
      dest_id: DataTypes.INTEGER,
      depart_date: DataTypes.DATE,
      arrival_date: DataTypes.DATE
    });
    return Cruise;
  };
  