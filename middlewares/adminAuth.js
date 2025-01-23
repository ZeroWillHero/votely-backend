const jwt = require('jsonwebtoken');

const adminAuth = async (req ,res , next) => {
    try {
        const token  = req.headers.authorization.split(' ')[1];

        if (!token){
            return res.status(401).json({message : "Authorization Token had not founded !"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

    
        if (decoded.role !== "Admin"){
            return res.status(401).json({message : "You are Unauthorized"});
        }
        next();
    }catch (error){
        res.status(500).json({message : error.message});
    }
}

module.exports = adminAuth;