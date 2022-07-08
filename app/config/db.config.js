module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.ROOT_PW,
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// pool are optional Sequelize connection pool configurations
