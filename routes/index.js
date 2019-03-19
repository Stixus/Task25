const userController = require("../controllers").user;
const restaurantController = require("../controllers").restaurant;
const reviewController = require("../controllers").review;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.get("/user/:user_id", userController.get);
  app.post("/user/create", userController.create);
  app.post("/user/update", userController.update);
  app.get("/restaurant/:restaurant_id", restaurantController.get);
  app.post("/restaurant/create", restaurantController.create);
  app.post("/restaurant/update", restaurantController.update);
  app.post("/review/create", reviewController.create);
  app.post("/review/update", reviewController.update);
  app.get("/review/latest", reviewController.get);
  /*
    Need to have functioning foreign keys for this
  */
  app.get(
    "/review/restaurant/:restaurant_id",
    reviewController.getReviewByRestaurantId
  );
};
