const user = require("./userController");
const restaurant = require("./restaurantController");
const review = require("./reviewController");
const auth = require("./authController");
module.exports = {
  restaurant,
  user,
  review,
  auth
};
