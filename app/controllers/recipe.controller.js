// UTILIZING SEQUELIZER METHODS

const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and save new recipe
exports.create = (req, res) => {
  console.log("BODY", req.body);

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
    description: req.body.description,
    instructions: req.body.instructions,
    draft: req.body.draft ? req.body.draft : false,
    published: req.body.published ? req.body.published : false,
    yearCreated: req.body.yearCreated ? req.body.yearCreated : null,
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
  // Or retrieve by title -> runs as such when 2nd arg passed in
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
exports.findOne = (req, res) => {
  const id = req.params.id;
  Recipe.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: `Could not find Recipe with id of ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving Recipe with id of ${id}.`,
      });
    });
};

// Update a recipe by id (in the req)
exports.update = (req, res) => {};

// Delete a tutorial by id (in the req)
exports.delete = (req, res) => {
  const id = req.params.id;
  Recipe.destroy({
    where: { id: id },
  })
    .then((n) => {
      if (n === 1) {
        res.send({ message: "Recipe was deleted successfully." });
      } else {
        res.send({
          message: `Cannot delete Recipe with id of ${id}. Perhaps Recipe was not found.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Coould not delete Recipe with id of ${id}.`,
      });
    });
};

// Delete all recipes from the database
exports.deleteAll = (req, res) => {};

// Find all published recipes
exports.findAllPublished = (req, res) => {};
