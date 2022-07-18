module.exports = {
  HOST: "localhost",
  USER: "root",
  // PASSWORD: process.env.ROOT_PW,
  PASSWORD: "root",
  DB: "recipes_test_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// pool is optional Sequelize connection pool configurations
