const Restaurant = require("../models").Restaurant;
const Sequelize = require("sequelize");

module.exports = {
  create(req, res) {
    return Restaurant.create({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      category: req.body.category,
      userId: req.body.user_id
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
        category: req.body.categor,
        userId: req.body.user_id
      },
      {
        where: {
          id: req.body.restaurant_id
        }
      }
    )
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  getList(req, res) {
    return Restaurant.findAll({})
      .then(restaurant => res.status(200).send(restaurant))
      .catch(error => res.status(400).send(error));
  },

  get(req, res) {
    return Restaurant.findOne({
      where: {
        id: req.param("restaurant_id")
      }
    })
      .then(restaurant => res.status(200).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
  getRestaurantByName(req, res) {
    lookupValue = req.param("name").toLowerCase();
    return Restaurant.findAll({
      limit: 10,
      where: {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("name")),
          "LIKE",
          "%" + lookupValue + "%"
        )
      }
    })
      .then(restaurant => res.status(200).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
  getRestaurantByCategory(req, res) {
    lookupValue = req.param("category").toLowerCase();
    return Restaurant.findAll({
      limit: 10,
      where: {
        name: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("category")),
          "LIKE",
          "%" + lookupValue + "%"
        )
      }
    })
      .then(restaurant => res.status(200).send(restaurant))
      .catch(error => res.status(400).send(error));
  },
  getRestaurantByUserId(req, res) {
    lookupValue = req.param("userId");
    return Restaurant.findAll({
      where: {
        userId: lookupValue
      }
    })
      .then(restaurant => res.status(200).send(restaurant))
      .catch(error => res.status(400).send(error));
  }
};
