const User = require('./../../../models/User');

const deleteUser = async (req,res) => { 
    const { id } = req.params;

    try {

        const deletedUser = await User.findByIdAndDelete({_id : id});

        if(!deletedUser){
            return res.status(400).json({
                message : "User not found"
            });
            return
        }

        res.status(200).json({
            message : "User deleted successfully",
            deletedUser
        });

    }catch(error){
        res.status(500).json({
            message : "Internal Server Error",
            error
        });
    }
}

module.exports = deleteUser;