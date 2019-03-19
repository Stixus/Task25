const express = require("express");
var app = express();
var path = require("path");

var models = require("./models");
models.sequelize
  .sync()
  .then(function() {
    console.log("NICE!");
  })
  .catch(function(err) {
    console.log(err, "something wrong");
  });

require("./routes")(app);
app.get("*", (req, res) =>
  res.status(200).send({
    message: "welcome beginninasasda"
  })
);

app.listen(process.env.PORT || 8080);
/*
app.get("/", (req, res) => {
  res.json("Welcome");
});

app.get("/user/:user_id", (req, res) => {
  res.json(data);
});


app.post("/user/create", userController);


app.put("/user/update", (req, res) => {
  res.json(data);
});

app.get("/restaurant/:restaurant_id", (req, res) => {
  res.json(data);
});

app.get("/restaurant/create", (req, res) => {
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


*/
