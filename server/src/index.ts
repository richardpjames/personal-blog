import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT ?? "3000";

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
  console.log("Response sent");
});

app.use(express.static(path.join(__dirname, "../../../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
