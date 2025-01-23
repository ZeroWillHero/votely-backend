const Candidate = require('./../../../models/Candidates');

const createCandidate = async (req ,res) => {
    try {
    const {name, email, party, dob, NIC} = req.body;

        const candidate = new Candidate(
            {
                name,
                email,
                party,
                dob,
                NIC
            } 
        );
        await candidate.save();

        res.status(201).json(candidate);

    }catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = createCandidate;