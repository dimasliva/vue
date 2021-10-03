const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.end("<h2>Hello world</h2>");
});

app.get("/about", (req, res) => {
  res.end("<h1>About</h1>");
});

app.listen(PORT, () => console.log(`Server starting on ${PORT}`));
