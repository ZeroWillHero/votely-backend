const Vote = require('./../../../models/Votes');
const Election = require('./../../../models/Election');

const createVote = async (req, res) => {
    const { election: electionId, candidate, userId } = req.body;

    try {
        const election = await Election.findOne({
            _id: electionId,
        });
        
        if (election) {
            if (!election.votedUsers.includes(userId)) {
                election.votedUsers.push(userId);
                await election.save();
            } else {
                return res.status(401).json({
                    message: "You already voted for this election"
                });
            }
        } else {
            return res.status(404).json({
                message: "Election not found"
            });
        }

        const existVote = await Vote.findOne({
            election: electionId,
            candidate
        });

        if (existVote) {
            existVote.votes += 1;
            await existVote.save();
            return res.status(200).json({
                message: "Voted successfully!"
            });
        }

        const vote = new Vote({
            election: electionId,
            candidate,
            votes: 1
        });

        await vote.save();

        res.status(201).json({
            message: "You have voted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = createVote;