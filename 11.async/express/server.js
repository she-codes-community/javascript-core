import express from "express";

const app = express();
const PORT = 3000;

// Root route: GET /
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Example JSON route: GET /api/info
app.get("/api/info", (req, res) => {
  res.json({ message: "Welcome to my tiny API", time: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
