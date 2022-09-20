module.exports = {
  HOST: "localhost",
  USER: "eel0",
  PASSWORD: process.env.SQL_PW,
  DB: "recipes_dev_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// pool is optional Sequelize connection pool configurations
