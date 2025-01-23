const Election = require('./../../../models/Election');

const updateElection = async (req ,res ) => {
    const { id } = req.params;

    try {
        const election = await Election.findOneAndUpdate({
            _id : id
        }, req.body, { new: true });

        res.status(200).json({
            election
        })
    }catch(error){
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = updateElection;