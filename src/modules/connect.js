const mongoose = require('mongoose');

const URI = 'mongodb+srv://Saljang-Jallow:aminabin1@cluster0.4vaevzj.mongodb.net/Online-Banking=true&w=majority';

const connect = () => {
    return mongoose.connect(URI, {
        useNewUrlparser: true,
        useUnifiedTopology: true,
        autoIndex: false,
    })
};

module.exports = connect;