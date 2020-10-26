const mongoose = require('mongoose');
const Photo = require('./image');
const shortid = require('shortid');

const schemaUsers = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    description: {
        type: String
    },
    imageUser: {
        type: String
    }
});
module.exports = mongoose.model('Users', schemaUsers);