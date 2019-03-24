const userController = require("../controllers").user;
const restaurantController = require("../controllers").restaurant;
const reviewController = require("../controllers").review;
const authController = require("../controllers").auth;
const middleware = require("../middleware/midlleware.js");
const cors = require("cors");

module.exports = app => {
  app.use(cors());
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.get("/user/list", userController.getList);
  app.get("/user/:user_id", userController.get);
  app.post("/user/create", userController.create);
  app.post("/user/update", userController.update);

  app.get("/restaurant/list", restaurantController.getList);
  app.get("/restaurant/:restaurant_id", restaurantController.get);
  app.post("/restaurant/create", restaurantController.create);
  app.post("/restaurant/update", restaurantController.update);
  app.get("/restaurant/name/:name", restaurantController.getRestaurantByName);
  app.get(
    "/restaurant/category/:category",
    restaurantController.getRestaurantByCategory
  );
  app.get(
    "/restaurant/user/:userId",
    restaurantController.getRestaurantByUserId
  );

  app.get("/review/list", reviewController.getList);
  app.post("/review/create", reviewController.create);
  app.post("/review/update", reviewController.update);
  app.get("/review/latest", reviewController.get);
  app.get(
    "/review/restaurant/:restaurant_id",
    reviewController.getReviewByRestaurantId
  );
  app.get("/review/user/:userId", reviewController.getReviewByUserId);

  app.post("/login", authController.login);
  app.get("/checkToken", middleware.checkToken, authController.index);
};
