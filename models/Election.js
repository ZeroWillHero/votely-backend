const mongoose = require('mongoose');

const electionSchema = new mongoose.Schema({
    name : {
        type: String,
        required:true
    },

    candidates : {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
        // required: true
    },

    startDate : {
        type: Date,
        required: true
    },

    votedUsers : {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: [],
        required: false
    }

},{timestamps : true});

module.exports = mongoose.model("Election",electionSchema);