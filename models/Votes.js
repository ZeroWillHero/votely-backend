const mongoose = require('mongoose');   

const voteSchema = new mongoose.Schema({
    election : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Election',
        required : true
    },
    candidate : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Candidate',
        required : true
    },

    votes : {
        required: true,
        type : Number,
        default: 0
    }
},{timestamps : true});

module.exports = mongoose.model('Vote',voteSchema);