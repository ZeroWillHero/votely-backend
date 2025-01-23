const Candidate = require('./../../../models/Candidates');


const updateCandidate = async (req, res) => {
    const { id } = req.params;
    const {name, email, party, dob, NIC} = req.body;
    
    try {
        const updateCandidate = await Candidate.findOneAndUpdate(
            {
                _id: id
            },
            {
                name, email, party, dob, NIC

            },
            {new: true}

        );

        if (!updateCandidate) {
            return res.status(404).json({message: "Candidate not found"});
        }

        res.status(200).json(updateCandidate);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = updateCandidate;