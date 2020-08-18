const mongoose = require('mongoose');
const Photo = require('./image');

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
    },
    photos: {
        type: Array,
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
    }
});

module.exports = mongoose.model('Users', schemaUsers);