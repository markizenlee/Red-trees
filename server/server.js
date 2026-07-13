const express = require('express');
const path = require('path');
// const { fileURLToPath } = require('url');

const stores = require("./data/stores.json");

const app = express();
const PORT = 80;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.json());

app.get("/api/stores", (req, res) => {
  res.json(stores);
});

app.post("/api/contact", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
    message: "Received contact form"
  });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
