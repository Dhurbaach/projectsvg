const mongooes = require('mongoose');

const contactSchema = new mongooes.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    message: {
        type: String,
    }
});

// Check if the model is already compiled
const Contact = mongooes.model('Contact', contactSchema);

module.exports = Contact;