const mongoose = require('mongoose');

const schemaImage = new mongoose.Schema({
    image: {
        type: String
    },
    userName: {
        type: String
    },
    description: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Images', schemaImage);