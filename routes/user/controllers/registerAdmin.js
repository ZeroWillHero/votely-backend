const User = require('./../../../models/User');

const registerAdmin = async (req,res) => {
    const { firstname,middlename,lastname,email,password,dob,NIC,city,phone } = req.body;

    try {
        const user = new User(
            {
                firstname,
                middlename,
                lastname,
                email,
                password,
                dob,
                NIC,
                city,
                phone,
                role : "Admin"
            }
        )

        await user.save();

        res.status(201).json(user);
    }catch(error){
        res.status(500).json({message:error.message});
    }

}

module.exports = registerAdmin;