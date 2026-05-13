const express = require("express");

const app = express();
//health check endpoint
app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/hello", (req, res) => {

  // BLOCK CPU FOR ~5 SECONDS
  const start = Date.now();

  while (Date.now() - start < 5000) {
    Math.random() * Math.random();
  }

  res.json({
    message: "Heavy API response"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});