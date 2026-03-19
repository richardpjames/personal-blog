// We need express to create the router
const express = require("express");
// Routers for each entity
const postsRouter = require("./postsRouter");
// Create a router
const router = express.Router({ mergeParams: true });
// Create our routes
router.use("/api/posts", postsRouter);
// Export the router so that it can be used in the main server file
module.exports = router;
