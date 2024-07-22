const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/BikeRental';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('MongoDB connection error', err);
    });

const db = mongoose.connection;

db.on('error', (err) => {
    console.log('MongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

module.exports = db;
