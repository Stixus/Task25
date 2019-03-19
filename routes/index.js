const userController = require("../controllers").userController;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome"
    })
  );

  app.post("/user/create", userController.create);
};
