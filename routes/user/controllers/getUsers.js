const User = require('../../../models/User');

const getUsers = async ( req,res) => {
    const users = await User.find();

    res.status(200).json({
        users
    });
}

const getUser = async ( req,res ) => {
    const { id  } = req.params;

    try {
        const user = await User.findOne({ _id : id });
        console.log(user);

        if (!user){
            return res.status(404).json({
                message : 'User not found'
            })
        }

        res.status(200).json({
            user
        })
    }catch(error){
        res.status(500).json({
            error : error.message
        })
    }
}

module.exports = { getUsers,getUser }