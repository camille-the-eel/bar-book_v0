// // INITIALIZING SEQUELIZE

"use strict";

const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
// Setting empty db object to be filled and exported out
const db = {};

let sequelize;

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
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
