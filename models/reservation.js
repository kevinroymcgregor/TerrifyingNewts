module.exports = function (sequelize, DataTypes) {
    const Reservation = sequelize.define("Reservations", {

    });

    Reservation.associate = function (models) {
        models.Reservations.belongsTo(models.Cruises, {
            foreignKey: 'cruise_id'
        });
        models.Reservations.belongsTo(models.Passengers, {
            foreignKey: 'passenger_id'
        });
    };

    return Reservation;
};
