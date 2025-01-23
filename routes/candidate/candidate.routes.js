const router = require('express').Router();
const adminAuth = require('./../../middlewares/adminAuth');

const createCandidate = require('./controllers/create');
const updateCandidate = require('./controllers/update');
const getCandidate = require('./controllers/get').getCandidate;
const getCandidates = require('./controllers/get').getCandidates;
const deleteCandidate = require('./controllers/delete');

router.post('/create',adminAuth,createCandidate);
router.patch('/update/:id',updateCandidate);
router.get('/get',getCandidates);
router.get('/get/:id',getCandidate);
router.delete('/delete/:id',deleteCandidate);

module.exports = router;
