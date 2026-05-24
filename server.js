const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Fake signup route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  // Normally you'd save to a database here
  console.log("New user:", name, email);
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// Fake login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Normally you'd check against a database
  if (email === "test@courier.com" && password === "1234") {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
  } else {
    res.send("Invalid login");
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
