module.exports = (app) => {
  const recipes = require("../controllers/recipe.controller.js");
  let router = require("express").Router();

  // Create a new Recipe
  router.post("/", recipes.create);

  // Retrieve all Recipes
  router.get("/", recipes.findAll);

  // Retrieve one Recipe by id
  router.get("/:id", recipes.findOne);

  // Delete Recipe by id
  router.delete("/:id", recipes.delete);

  app.use("/api/recipes", router);
};
