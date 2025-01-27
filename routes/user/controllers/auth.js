const User = require('../../../models/User');
const jwt = require('jsonwebtoken');

const authenticate = async (req, res) => {
    try {
        const token = req.body;

        if (!token){
            return res.status(400).json({ message: 'Token is required' });
        }

        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({_id:decodedToken._id});

        if (!user){
            return res.status(401).json({message : "User not found"});
        }

        // generate a new token 
        const newToken = await jwt.sign({id: user._id,role: user.role,email: user.email},process.env.JWT_SECRET);

        res.status(200).json({uid: user._id,role: user.role,email: user.email,token: newToken});

    }catch(error){
        res.status(500).json({message: "Server error",error});
    }
}