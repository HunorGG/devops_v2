const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! Sose gondoltam volna, hogy DEVOPS-ozok, és láss csodát! :)");
});

app.listen(8080, () => {
  console.log("App running on http://localhost:8080");
});
