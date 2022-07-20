// DEFINING SEQUELIZE MODEL
// Recipe Ingredients

module.exports = (sequelize, Sequelize) => {
  const RecipeIngredient = sequelize.define("recipeIngredient", {
    placeholder: {
      type: Sequelize.STRING,
    },
  });
  return RecipeIngredient;
};
