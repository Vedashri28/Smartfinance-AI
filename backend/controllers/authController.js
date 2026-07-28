const User = require("../models/User");
const bcrypt = require("bcryptjs");

// =========================
// Register User
// =========================
const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        // Save user
        await user.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                currency: user.currency,
            },
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =========================
// Login User
// =========================
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required",
            });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
        return res.status(401).json({
        success: false,
        message: "Invalid email or password",
    });
}

        // We will continue from here in the next step

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

// =========================
// Export Controllers
// =========================
module.exports = {
    registerUser,
    loginUser,
};

