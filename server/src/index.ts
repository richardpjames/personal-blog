import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT ?? "8000";

app.get("/api/hello", (req, res) => {
  res.json({
    Heading: "Richard James",
    Content:
      "Welcome to my personal website. This is a blog containing my random notes and musings on subjects including technology, music and cookery!",
  });
  console.log("Response sent");
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
