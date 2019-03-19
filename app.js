let createError = require("http-errors");
let express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let models = require("./models");

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

require("./routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the database."
  })
);

module.exports = app;

var path = require("path");

app.get("/user/:user_id", (req, res) => {
  res.json(data);
});

app.post("/user/create", (req, res) => {
  res.json(data);
});

app.put("/user/update", (req, res) => {
  res.json(data);
});

app.get("/restaurant/:restaurant_id", (req, res) => {
  res.json(data);
});

app.put("/restaurant/update", (req, res) => {
  res.json(data);
});

app.post("/review/create", (req, res) => {
  res.json(data);
});

app.get("/restaurant/:restaurant_id", (req, res) => {
  res.json(data);
});

app.get("/review/latest", (req, res) => {
  res.json(data);
});

app.put("/review/update", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 8080);
