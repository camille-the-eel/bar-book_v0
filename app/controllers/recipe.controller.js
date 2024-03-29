// UTILIZING SEQUELIZER METHODS

const db = require("../models");
const Recipe = db.recipes;
// const RecipeIngredient = db.recipeIngredients;
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
  let recipe = {
    drinkName: req.body.drinkName,
    description: req.body.description || null,
    garnish: req.body.garnish || null,
    glass: req.body.glass || null,
    instructions: req.body.instructions || null,
    draft: req.body.draft || false,
    published: req.body.published || false,
    creatorAttribution: req.body.creatorAttribution || null,
    yearCreated: req.body.yearCreated || null,
    otherInfo: req.body.otherInfo || null,
  };

  // TODO: set up proper data modeling handling/normalization
  req.body.ingredientItems.forEach((el, i) => {
    recipe[`ingredientItem${i}_Qty`] = el.measurement_qty;
    recipe[`ingredientItem${i}_Unit`] = el.measurement_unit;
    recipe[`ingredientItem${i}_Ingredient`] = el.ingredient;
  });

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

  /*
  // Secondary table to join
  req.body.ingredientItems.forEach((el) => {
    RecipeIngredient.create({
      measurementQty: el.measurement_qty,
      measurementUnit: el.measurement_unit,
      ingredient: el.ingredient,
      recipeId: req.body.recipeId,
    })
      .then((data) => {
        console.log("DATA after create", data);
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "recipeIngredient.controller.js | some error occured while creating the RecipeIngredient",
        });
      });
  });
  */
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
        message: `Error retrieving Recipe with id of ${id}. ${err}`,
      });
    });
};

// Update a recipe by id (in the req)
exports.update = (req, res) => {
  const id = req.params.id;
  console.log("BODY", req.body);

  Recipe.update(
    {
      ...req.body,
    },
    {
      where: { id: id },
    }
  )
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: `An issue occured with updating Recipe with id of ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not update Recipe with id of ${id}. ${err}`,
      });
    });
};

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
        message: `Could not delete Recipe with id of ${id}. ${err}`,
      });
    });
};

// Delete all recipes from the database
exports.deleteAll = (req, res) => {};

// Find all published recipes
exports.findAllPublished = (req, res) => {};
