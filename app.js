let createError = require("http-errors");
let express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let models = require("./models");

let path = require("path");

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine.");
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

app.listen(process.env.PORT || 8080);
