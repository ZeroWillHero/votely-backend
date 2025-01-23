const Election = require('./../../../models/Election');

const getElection = async (req, res) => {
    try {
        const elections = await Election.find().populate('candidates');
        res.status(200).json({
            elections
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getElections = async (req, res) => {
    const { id } = req.params;

    try {
        const election = await Election.findOne({ _id: id }).populate('candidates');
        if (!election) {
            return res.status(404).json({
                message: 'Election not found'
            });
        }
        res.status(200).json({
            election
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { getElection, getElections }