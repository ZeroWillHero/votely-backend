const Candidate = require('./../../../models/Candidates');

const getCandidates = async (req ,res ) => {
    const candidates = await Candidate.find();

    res.status(200).json({
        candidates
    }).populate(['candidates']);
}


const getCandidate = async ( req , res) => {
    const { id } = req.params;
    try{
        const candidate = await Candidate.findOne({
            _id: id
        }).populate('candidates');
        res.status(200).json({
            candidate
        })
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }

    
}

module.exports = {getCandidates,getCandidate}; 