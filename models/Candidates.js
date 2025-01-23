const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },

    email : {
        type : String,
        unique:true,
    },

    party : {
        type : String,
    },

    dob : {
        type: Date
    },

    NIC : {
        type : String,
        unique:true
    },
},{timestamps : true});

module.exports = mongoose.model('Candidate',candidateSchema);