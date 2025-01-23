const User = require('./../../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {
    const {email,password} = req.body;

    try {
        const user = await User.findOne({
            email
        });

        if (!user){
            res.status(401).json({message : "Email or password Invalid"});
            return
        }

        const validPassword = await bcrypt.compare(password,user.password);

        if (!validPassword){
            res.status(400).json({message : "Email or password Invalid"});
            return
        }

        const token = jwt.sign({id: user._id,role: user.role,email: user.email},process.env.JWT_SECRET);

        res.status(200).json({token,uid: user._id,role: user.role,email: user.email});
        
    }catch(error){
        res.status(500).json({message: "Server error",error});
    }
}

module.exports = login;