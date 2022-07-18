module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");
  var router = require("express").Router();

  // Create a new Recipe
  router.post("/", recipes.create);

  // Retrieve all Recipes
  router.get("/", recipes.findAll);

  app.use("/api/recipes", router);
};
