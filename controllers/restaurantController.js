const Restaurant = require("../models").Restaurant;
module.exports = {
  create(req, res) {
    return Restaurant.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      category: req.body.category
    })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  }
};
