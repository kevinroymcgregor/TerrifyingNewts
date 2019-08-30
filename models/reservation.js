module.exports = function (sequelize, DataTypes) {
    const Reservation = sequelize.define("Reservations", {
    });

    Reservation.associate = function (models) {
        Reservation.belongsTo(models.Cruise, {
            foreignKey: {
                allowNull: false
            }
        });
        Reservation.belongsTo(models.passenger, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Reservation;
};
