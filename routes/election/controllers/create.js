const Election = require('./../../../models/Election');

const createElection = async (req, res) => {
    const { name, candidates = [], startDate } = req.body;

    try {
        const election = new Election({
            name,
            candidates,
            startDate,
            votedUsers: []
        });

        await election.save();

        res.status(201).json({
            election
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = createElection;