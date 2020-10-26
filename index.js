const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

/* mongoose.connect('mongodb://localhost:27017/tj-treinamento', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}); */
mongoose.connect(process.env.MONGODB_URI + '/tj-treinamento', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(success => console.log(success))
.catch(err => console.log(err))
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 8080, () => {
    console.log('rodando server na porta 3000')
});