const User = require('./../../../models/User');
const jwt = require('jsonwebtoken');

const resetPassword = async (req, res) => {
    const { token } = req.body;
    const { password } = req.body;

    try {
        const decodedToke = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToke.id);

        if(!user){
            return res.status(404).json({message : "User not found"});
        }

        await user.updateOne({password});

        res.status(200).json({message : "Password Re-setted Successfully"});
    }catch (error){
        res.status(500).json({message : error.message});
    }

}

module.exports = resetPassword; 