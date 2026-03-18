import express from "express";
import path from "path";

import type blogPost from "./types/blogPost";

const app = express();
const port = process.env.PORT ?? "8000";

app.get("/api/posts", (req, res) => {
  const posts: blogPost[] = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: new Date(),
      id: 1,
      title: "My first blog post",
    },
    {
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: new Date(),
      id: 2,
      title: "My second blog post",
    },
  ];

  res.json(posts);
});

// Use express to serve our built React application, meaning only a single app server is required
app.use(express.static(path.join(__dirname, "../../../client/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

// Start the server and listen on the requested port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
