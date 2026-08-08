const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 SmartFinance AI Backend Running Successfully!"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

module.exports = app;
