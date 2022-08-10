// DEFINING SEQUELIZE MODEL
// Recipe
module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipe", {
    drinkName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    instructions: {
      type: Sequelize.STRING,
    },
    draft: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    yearCreated: {
      type: Sequelize.STRING,
    },
    creatorAttribution: {
      type: Sequelize.STRING,
    },
    otherInfo: {
      type: Sequelize.STRING,
    },
    // uploadedBy: {},
    // publishedBy: {},
    // servedBy: {},
    // TODO: remove following modeling, set up recipeIngredientItems table and connect with foreign key
    // temporary measure to further front-end
    // /*
    ingredientItem0_Qty: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem0_Unit: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem0_Ingredient: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem1_Qty: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem1_Unit: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem1_Ingredient: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
    ingredientItem2_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem2_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem2_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem3_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem3_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem3_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem4_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem4_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem4_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem5_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem5_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem5_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem6_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem6_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem6_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem7_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem7_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem7_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem8_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem8_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem8_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem9_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem9_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem9_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem10_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem10_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem10_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem11_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem11_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem11_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem12_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem12_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem12_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem13_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem13_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem13_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem14_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem14_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem14_Ingredient: {
      type: Sequelize.STRING,
    },
    ingredientItem15_Qty: {
      type: Sequelize.STRING,
    },
    ingredientItem15_Unit: {
      type: Sequelize.STRING,
    },
    ingredientItem15_Ingredient: {
      type: Sequelize.STRING,
    },
    // */
  });
  return Recipe;
};
