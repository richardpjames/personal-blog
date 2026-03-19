// Packages which are required to run the server
const express = require("express");
const helmet = require("helmet");
const path = require("path");
require("dotenv/config");
// For managing users and sessions
const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);

// Internal requires
const config = require("./config/config");
const postgres = require("./db/postgres");

// Connect to the PostgreSQL database
postgres.connectToServer();
// Then create the web server
const app = express();
// Session storage
app.use(
  session({
    store: new PgSession({
      pool: postgres.pool(),
    }),
    secret: config.sessions.sessionSecret,
    name: "richardpjames_session",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      domain: config.sessions.cookieDomain,
      path: "/",
      secure: config.sessions.cookieSecure === "true",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  }),
);
// Helmet is a collection of middleware functions that set various HTTP headers to help protect the app from some well-known web vulnerabilities to improve security.
app.use(helmet());
// Set the port to the value in the environment variable PORT
const port = config.application.port;
// Get the list of posts
app.get("/api/posts", (req, res) => {
  // Get all of the posts
  postgres
    .pool()
    .query("SELECT * FROM posts ORDER BY date DESC", (err, data) => {
      // Map the database rows to the blogPost type and store them in the posts array
      res.json(data.rows);
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
  console.log(`App listening on port ${port}`);
});
