const router = require('express').Router();

const registerUser = require('./controllers/registerUser');
const login = require('./controllers/loginuser');
const updateUser = require('./controllers/updateUser');
const deleteUser = require('./controllers/deleteUser');
const forgetPassword = require('./controllers/forgetPassword');
const resetPassword = require('./controllers/resetPassword');
const adminAuth = require('../../middlewares/adminAuth');
const getUser = require('./controllers/getUsers').getUser;
const getUsers = require('./controllers/getUsers').getUsers;

router.post('/user/register',registerUser);
router.post('/login',login);
router.patch('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);
router.get('/user',adminAuth,getUsers);
router.get('/user/:id',getUser);

router.post('/forget-password',forgetPassword);
router.post('/password-update',resetPassword);


module.exports = router;