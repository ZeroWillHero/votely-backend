const router = require('express').Router();

const registerUser = require('./controllers/registerUser');
const login = require('./controllers/loginuser');
const updateUser = require('./controllers/updateUser');
const deleteUser = require('./controllers/deleteUser');
const forgetPassword = require('./controllers/forgetPassword');
const resetPassword = require('./controllers/resetPassword');

router.post('/user/register',registerUser);
router.post('/login',login);
router.patch('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

router.post('/forget-password',forgetPassword);
router.post('/password-update',resetPassword);


module.exports = router;