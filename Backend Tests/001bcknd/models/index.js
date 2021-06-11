const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://user-test:1234@backend.65lwy.mongodb.net/001bcknd?retryWrites=true&w=majority';

const Article = require('./Article');

mongoose.connect(
    MONGO_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        error ? console.log(error) : console.log('Database Connected');
    },
);

module.exports = {
    Article,
};