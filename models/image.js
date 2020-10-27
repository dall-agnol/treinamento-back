const mongoose = require('mongoose');

const schemaImage = new mongoose.Schema({
    image: {
        type: String
    },
    id: {
        type: String
    },
    username: {
        type: String
    },
    userimage: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Images', schemaImage);