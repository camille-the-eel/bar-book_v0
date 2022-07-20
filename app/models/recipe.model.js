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
    // creator: {},
    // uploadedBy: {},
    // publishedBy: {},
    // servedBy: {},
  });
  return Recipe;
};
