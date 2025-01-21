const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('You can now use mongoDB Datbase in your application');
}).catch((error) => {
    console.log('Error:', error);
});