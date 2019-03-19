const Restaurant = require("../models").Restaurant;
module.exports = {
  get(req, res) {
    return Restaurant.findOne({
      where: {
        id: req.body.restaurant_id
      }
    });
  },

  create(req, res) {
    return Restaurant.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      category: req.body.category
    })
      .then(restaurant => res.status(201).send(restaurant))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Restaurant.update(
      {
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        category: req.body.category
      },
      {
        where: {
          id: req.body.restaurant_id
        }
      }
    )
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  }
};
