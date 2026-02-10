const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Database connection (example)
mongoose.connect("mongodb://localhost:27017/portfolio");

// Schema
const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String
});

// API
app.post("/contact", (req, res) => {
  Contact.create(req.body);
  res.send("Data saved to database");
});

app.listen(3000, () => {
  console.log("Server running");
});
