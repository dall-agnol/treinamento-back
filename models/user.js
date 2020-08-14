const mongoose = require('mongoose');

const schemaUsers = new mongoose.Schema({
    name: {
        type: String
    },
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('Users', schemaUsers);