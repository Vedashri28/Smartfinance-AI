const registerUser = async (req, res) => {

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    res.status(200).json({
        success: true,
        message: "Validation Successful",
        data: {
            fullName,
            email,
            password,
        },
    });

};

module.exports = {
    registerUser,
};