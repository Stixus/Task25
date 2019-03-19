"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.INTEGER
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Restaurant, {
      foreignKey: "userId",
      as: "restaurants"
    });
  };
  return User;
};
