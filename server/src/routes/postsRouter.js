// We need to import express to create a router
const express = require("express");
// Next import the controllers that we need
const postsController = require("../controllers/postsController");
// Create the router
const postsRouter = express.Router({ mergeParams: true });
// Routes
postsRouter.get("/", postsController.getAll);
// Export the router so that it can be used in the routes.js file
module.exports = postsRouter;
