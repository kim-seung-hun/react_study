// 설치할것
// sequelize , mysql2
// npm i sequelize mysql2

const Sequelize = require("sequelize");
const config = require("../config");
const User = require("./user");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;
