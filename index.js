const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser')
const app = express();
const database = require('./database');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/* mongoose.connect('mongodb://localhost:27017/tj-treinamento', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}); */
app.use(cors());
app.use(express.json());
app.use(routes);
database.connect();
app.listen(process.env.PORT || 3001, () => {
    console.log('rodando server na porta 3000')
});