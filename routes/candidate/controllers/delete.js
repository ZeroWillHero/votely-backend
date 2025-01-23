const Candidate = require('./../../../models/Candidates');

const deleteCandidate = async (req, res) => {
    const { id } = req.params;
    try {
        const candidate = await Candidate.findOneAndDelete({ _id : id});

        if (!candidate) {
            return res.status(404).json({message: "Candidate not found"});
        }

        res.status(200).json({message: "Candidate deleted successfully" , deleteCandidate});
    }catch(error){
        res.status(500).json({
            message : error.message
        });
    }
}

module.exports = deleteCandidate;