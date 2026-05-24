const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: "courier-secret",
  resave: false,
  saveUninitialized: true
}));

// Fake signup route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  // Normally save to DB
  req.session.user = { name, email };
  res.redirect("/dashboard");
});

// Fake login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Normally check DB
  if (email === "test@courier.com" && password === "1234") {
    req.session.user = { email };
    res.redirect("/dashboard");
  } else {
    res.send("Invalid login");
  }
});

// Dashboard route (protected)
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login.html");
  }
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
