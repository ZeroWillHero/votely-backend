const router = require('express').Router();

const createElection = require('./controllers/create');
const getElection = require('./controllers/get').getElection;
const getElections = require ('./controllers/get').getElections;
const updateElection = require('./controllers/update');

router.post('/create',createElection);
router.get('/get',getElection);
router.get('/get/:id',getElections);
router.patch('/update/:id',updateElection);

module.exports = router;