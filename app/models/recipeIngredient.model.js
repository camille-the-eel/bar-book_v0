// DEFINING SEQUELIZE MODEL
// Recipe Ingredients

module.exports = (sequelize, Sequelize) => {
  const RecipeIngredient = sequelize.define("recipeIngredient", {
    measurementQty: {
      type: Sequelize.STRING,
    },
    measurementUnit: {
      type: Sequelize.STRING,
    },
    ingredient: {
      type: Sequelize.STRING,
    },
  });
  return RecipeIngredient;
};
