// DEFINING SEQUELIZE MODEL

module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipe", {
    drinkName: {
      type: Sequelize.STRING,
    },
    instructions: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Recipe;
};
