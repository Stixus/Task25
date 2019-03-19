"use strict";
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      category: DataTypes.STRING
    },
    {}
  );
  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Restaurant;
};
