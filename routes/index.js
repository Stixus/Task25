const userController = require("../controllers").user;
const restaurantController = require("../controllers").restaurant;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.post("/user/create", userController.create);
  app.post("/restaurant/create", restaurantController.create);
};
