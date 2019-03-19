const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const sequelize = new Sequelize("task25", "root", "root", {
  host: "localhost",
  port: "3306",
  dialect: "mysql"
});
