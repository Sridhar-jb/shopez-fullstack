const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load variables from .env

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) => console.log("❌ MongoDB Error:", err));

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB Cloud!");
});

app.listen(3001, () => {
  console.log("✅ App server is running on port 3001");
});
