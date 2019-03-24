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

  app.get("/user/list", cors(), userController.getList);
  app.get("/user/:user_id", cors(), userController.get);
  app.post("/user/create", cors(), userController.create);
  app.post("/user/update", cors(), userController.update);

  app.get("/restaurant/list", cors(), restaurantController.getList);
  app.get("/restaurant/:restaurant_id", cors(), restaurantController.get);
  app.post("/restaurant/create", cors(), restaurantController.create);
  app.post("/restaurant/update", cors(), restaurantController.update);
  app.get(
    "/restaurant/name/:name",
    cors(),
    restaurantController.getRestaurantByName
  );
  app.get(
    "/restaurant/category/:category",
    cors(),
    restaurantController.getRestaurantByCategory
  );
  app.get(
    "/restaurant/user/:userId",
    cors(),
    restaurantController.getRestaurantByUserId
  );

  app.get("/review/list", cors(), reviewController.getList);
  app.post("/review/create", cors(), reviewController.create);
  app.post("/review/update", cors(), reviewController.update);
  app.get("/review/latest", cors(), reviewController.get);
  app.get(
    "/review/restaurant/:restaurant_id",
    cors(),
    reviewController.getReviewByRestaurantId
  );
  app.get("/review/user/:userId", cors(), reviewController.getReviewByUserId);

  app.post("/login", cors(), authController.login);
  app.get("/checkToken", cors(), middleware.checkToken, authController.index);
};
