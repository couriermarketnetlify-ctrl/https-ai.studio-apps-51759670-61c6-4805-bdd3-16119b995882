const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Fake login check
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@courier.com" && password === "1234") {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
  } else {
    res.send("Invalid login");
  }
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
