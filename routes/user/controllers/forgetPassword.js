const User = require('./../../../models/User');
const jwt = require('jsonwebtoken');
const sendMail = require('./../../../modules/sendEmail');

const forgetPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message : "User not found"});
        }

        const subject = "Reset Password";
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "20m"});
        const message = `
            <h1 style="color: #333; font-family: Arial, sans-serif;">Reset Password</h1>
            <p style="font-family: Arial, sans-serif; color: #555;">
            Click the link below to reset your password:
            </p>
            <a href="http://localhost:3000/reset-password/${token}" style="display: inline-block; padding: 10px 20px; font-family: Arial, sans-serif; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            Reset Password
            </a>
        `;

        await sendMail(email, subject, message);

        res.status(200).json({message : "Email sent"});
    }catch(error){
        res.status(500).json({message : error.message});
    }
 }

 module.exports =  forgetPassword;