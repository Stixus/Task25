let jwt = require("jsonwebtoken");
var config = require("../config/config.js");
const User = require("../models").User;

module.exports = {
  login(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB

    User.findOne({
      where: {
        username: username
      }
    }).then(user => {
      if (username && password) {
        if (username === user.username && password === user.password) {
          let token = jwt.sign({ username: username }, config.secret, {
            expiresIn: "24h" // expires in 24 hours
          });
          // return the JWT token for the future API calls
          res.json({
            success: true,
            message: "Authentication successful!",
            token: token,
            username: user.username,
            role: user.role
          });
        } else {
          res.send(403).json({
            success: false,
            message: "Incorrect username or password"
          });
        }
      } else {
        res.send(400).json({
          success: false,
          message: "Authentication failed! Please check the request"
        });
      }
    });
  },
  index(req, res) {
    res.json({
      success: true,
      message: "Index page"
    });
  }
};
