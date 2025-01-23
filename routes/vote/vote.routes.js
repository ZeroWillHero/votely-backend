const router = require('express').Router();

const createVote = require('./controllers/create');

router.post('/create',createVote);

module.exports = router