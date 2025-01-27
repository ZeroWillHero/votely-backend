const User = require('./../../../models/User');

const updateUser = async (req,res) => {
    const { id } = req.params;
    const { firstname,lastname,dob,NIC,Province,city,ElectronDistric,phone,email } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            {_id : id},
            {
                firstname,
                lastname,
                dob,
                NIC,
                Province,
                city,
                ElectronDistric,
                phone
            },
            { new : true }
        );

        if(!updatedUser){
            return res.status(400).json({
                message : "User not found"
            });
            return
        }

        res.status(200).json({
            message : "User updated successfully",
            updatedUser
        });
    }catch(error){
        res.status(500).json({
            message : "Internal Server Error",
            error
        });
    }
}

module.exports = updateUser;