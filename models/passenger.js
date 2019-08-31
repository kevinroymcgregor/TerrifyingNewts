module.exports = function(sequelize, DataTypes) {
    const Passenger = sequelize.define("Passengers", {
      last_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      email_address: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      age: DataTypes.INTEGER,
      street_address: DataTypes.STRING,
      city: DataTypes.STRING,
      state_province: DataTypes.STRING,
      country: DataTypes.STRING,
      planet: DataTypes.STRING
    });

    return Passenger;
  };
  