const express = require("express");

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  res.status(404).send("404 - not found");
});

app.get("/schedule", (req, res) => {
  res.status(200).send("Marcação de aulas");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
