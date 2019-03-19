const express = require("express");
const companyController = require("../controllers").restaurant;
var app = express();

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

module.exports = app => {
  app.post("/restaurant/create", companyController.create);
};

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
