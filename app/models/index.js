// INITIALIZING SEQUELIZE

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: "0",
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Setting empty db object to be filled and exported out
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

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

// Exporting db object
module.exports = db;
