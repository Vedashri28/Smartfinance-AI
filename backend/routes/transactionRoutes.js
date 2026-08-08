const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { addTransaction } = require("../controllers/transactionController");

// Add Transaction
router.post("/", authMiddleware, addTransaction);

module.exports = router;