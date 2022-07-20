const db = require("../models");
const RecipeIngredient = db.recipeIngredients;

exports.createRecipeIngredient = (req, res) => {
  console.log("New", req.body);
  return RecipeIngredient.create({
    placeholder: req.body.placeholder,
    recipeId: req.body.recipeId,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "recipeIngredient.controller.js | some error occured while creating the RecipeIngredient",
      });
    });
};
