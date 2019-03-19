const express = require("express");

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

app.listen(process.env.PORT || 8080);
