module.exports = function (sequelize, DataTypes) {
    const Reservation = sequelize.define("Reservations", {
    });

    Reservation.associate = function (models) {
        models.Reservations.belongsTo(models.Cruises, {
            foreignKey: {
                allowNull: false
            }
        });
        models.Reservations.belongsTo(models.Passengers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Reservation;
};
