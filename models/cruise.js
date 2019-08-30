module.exports = function(sequelize, DataTypes) {
    const Cruise = sequelize.define("Cruises", {
      id: DataTypes.INTEGER,
      depart_date: DataTypes.DATE,
      arrival_date: DataTypes.DATE
    });

    Cruise.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Cruise.belongsTo(models.ship, {
        foreignKey: {
          allowNull: false
        }
      });

      Cruise.hasMany(destination, {as: 'depart_id'})
      Cruise.hasMany(destination, {as: 'dest_id'})
    };

    return Cruise;
  };
  