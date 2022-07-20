module.exports = (app) => {
  const recipeIngredient = require("../controllers/recipeIngredient.controller.js");
  var router = require("express").Router();

  router.get("/test", recipeIngredient.createRecipeIngredient);

  app.use("/api/recipe-ingredients", router);
};
