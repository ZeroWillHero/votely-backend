const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String
    },

    middlename : {
        type : String
    },

    lastname : {
        type : String
    },

    email : {
        type : String,
        required : true,
        unique:true,
    },

    password : {
        type : String,
        required:true
    },

    dob : {
        type: Date
    },

    NIC : {
        type : String,
        unique:true
    },

    Province : {
        type : String
    },

    city: {
        type : String
    },

    ElectronDistric : {
        type : String
    },

    phone : {
        type : String
    },
    role : {
        type : String,
        default : "User",
        enum : ["User","Admin"]
    }
},{timestamps : true});

module.exports = mongoose.model("User",userSchema);