const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
    try {
        const {
            type,
            amount,
            category,
            description,
            date
        } = req.body;

        const transaction = new Transaction({
            user: req.user.id,
            type,
            amount,
            category,
            description,
            date
        });

        await transaction.save();

        return res.status(201).json({
            success: true,
            message: "Transaction added successfully",
            data: transaction
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    addTransaction
};