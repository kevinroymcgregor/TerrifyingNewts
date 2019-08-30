module.exports = function(sequelize, DataTypes) {
    const Reservation = sequelize.define("Reservations", {
      cruise_id: DataTypes.INTEGER,
      passenger_id: DataTypes.INTEGER,
    });
    return Reservation;
  };
  