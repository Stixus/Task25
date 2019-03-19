"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      rating: DataTypes.INTEGER,
      review: DataTypes.TEXT
    },
    {}
  );
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
    Review.belongsTo(models.Restaurant, {
      foreignKey: "restaurantId",
      onDelete: "CASCADE"
    });
  };
  return Review;
};
