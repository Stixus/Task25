const restaurantController = require("../controllers").restaurant;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Funket som fy"
    })
  );

  app.post("/restaurant/create", restaurantController.create);
};
