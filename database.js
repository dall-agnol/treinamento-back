const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI;

const connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    });
    const connection  = mongoose.connection;
    connection.on('error', err => console.log('erro ao conectar ao mongo: ', err))
    connection.on('open', () => console.log('sucesso ao conectar ao mongo'))
    
}

module.exports = {
    connect
}