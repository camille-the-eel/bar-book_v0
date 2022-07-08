// UTILIZING SEQUELIZER METHODS

const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and save new recipe
exports.create = (req, res) => {};

// Retrieve all recipes from the database
exports.findAll = (req, res) => {};

// Find a single recipe with an id
exports.findOne = (req, res) => {};

// Update a recipe by id (in the req)
exports.update = (req, res) => {};

// Delete a tutorial by id (in the req)
exports.delete = (req, res) => {};

// Delete all recipes from the database
exports.deleteAll = (req, res) => {};

// Find all published recipes
exports.findAllPublished = (req, res) => {};
