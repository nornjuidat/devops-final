const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// 🔑 מאפשר גישה לקבצים שנמצאים ליד first.html (img.jpg, css וכו')
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "first.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
