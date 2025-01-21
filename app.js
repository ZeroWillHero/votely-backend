const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();
require('events').EventEmitter.defaultMaxListeners = 20;

const registerUser = require('./routes/user/user.routes');

const PORT = process.env.PORT || 3000;

require('./Database/connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/reset-password/:token', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'resetPassword.html'));
});

// app Routes 
app.use("/api/users",registerUser);

app.listen(PORT,() => {
    console.info(`Backend Runing on the Port ${PORT}`);
});