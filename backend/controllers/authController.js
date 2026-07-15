const registerUser = async (req, res) => {

    res.status(200).json({

        success:true,

        message:"Register API Working Successfully"

    });

};

module.exports = {

    registerUser

};