const express = require('express');
const path = require('path');
// const { fileURLToPath } = require('url');

const app = express();
const PORT = 80;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});