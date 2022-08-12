// // INITIALIZING SEQUELIZE

// const dbConfig = require("../config/db.config.js");
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: "0",
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
// Setting empty db object to be filled and exported out
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.recipes = require("./recipe.model.js")(sequelize, Sequelize);
db.recipeIngredients = require("./recipeIngredient.model.js")(
  sequelize,
  Sequelize
);

db.recipes.hasMany(db.recipeIngredients, { as: "recipeIngredients " });
db.recipeIngredients.belongsTo(db.recipes, {
  foreignKey: "recipeId",
  as: "recipe",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
