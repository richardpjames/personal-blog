import express from "express";
import helmet from "helmet";
import path from "path";
import "dotenv/config";

import config from "./config/config";
import postgres from "./db/postgres";
import blogPost from "./types/blogPost";

// Connect to the PostgreSQL database
postgres.connectToServer();

const app = express();
// Helmet is a collection of middleware functions that set various HTTP headers to help protect the app from some well-known web vulnerabilities to improve security.
app.use(helmet());
// Set the port to the value in the environment variable PORT, or default to 8000 if it is not set
const port = config.application.port;

// Get the list of posts
app.get("/api/posts", (req, res) => {
  // Start with an empty array of blog posts
  let posts: blogPost[] = [];
  // Get all of the posts
  postgres
    .pool()
    .query("SELECT * FROM posts ORDER BY date DESC", (err, data) => {
      // Map the database rows to the blogPost type and store them in the posts array
      posts = data.rows as blogPost[];
      res.json(posts);
    });
});

// Use express to serve our built React application, meaning only a single app server is required
app.use(express.static(path.join(__dirname, "../../../client/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

// Start the server and listen on the requested port
app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`App listening on port ${config.application.port}`);
});
