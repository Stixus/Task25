const User = require("../models").User;
module.exports = {
  getList(req, res) {
    return User.findAll({})
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },

  get(req, res) {
    return User.findOne({
      where: {
        id: req.param("user_id")
      }
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
  getUserByUsername(req, res) {
    return User.findOne({
      where: {
        username: req.param("username")
      }
    })
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return User.update(
      {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role
      },
      {
        where: {
          id: req.body.user_id
        }
      }
    )
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  }
};
