if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "http://localhost:8081",
};

// Middleware -------------------
// Enables CORS with options
app.use(cors(corsOptions));

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// ----------------------------

// Pulls in all model files so they can be synced within this one line of code (rather than individually in each file)
// Holds all the sequelize mapping to the tables in our mysql database
const db = require("./app/models");
// Syncing the models
// db.sequelize.sync();

// NOTE: Development only syncing of models
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// Simple testing route
app.get("/", (req, res) => {
  res.json({ message: "Bar Book v0 running" });
});

// API routes
require("./app/routes/recipe.routes.js")(app);

// Set port / Listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
