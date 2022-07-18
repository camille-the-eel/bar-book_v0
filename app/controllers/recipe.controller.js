// UTILIZING SEQUELIZER METHODS

const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and save new recipe
exports.create = (req, res) => {
  // Validate request
  if (!req.body.drinkName) {
    res.status(400).send({
      message: "Must include drink name.",
    });
    return;
  }
  // Create a Recipe
  const recipe = {
    drinkName: req.body.drinkName,
    instructioons: req.body.instructions,
    published: req.body.published ? req.body.published : false,
  };
  // Save Recipe to database
  Recipe.create(recipe)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "recipe.controller.js | some error occurred while creating the Recipe",
      });
    });
};

// Retrieve all recipes from the database

exports.findAll = (req, res) => {
  /*
  // Or retrieve by title -> runs as such when arg passed in
  const drinkName = req.query.drinkName;
  let condition = drinkName
    ? { drinkName: { [Op.like]: `%${drinkName}%` } }
    : null;
  Recipe.findAll({ where: condition })
  */
  Recipe.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "recipe.controller.js | some error occurred while creating the Recipe",
      });
    });
};

// Find a single recipe with an id
exports.findOne = (req, res) => {};

// Update a recipe by id (in the req)
exports.update = (req, res) => {};

// Delete a tutorial by id (in the req)
exports.delete = (req, res) => {};

// Delete all recipes from the database
exports.deleteAll = (req, res) => {};

// Find all published recipes
exports.findAllPublished = (req, res) => {};
