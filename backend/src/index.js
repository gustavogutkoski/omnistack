const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// cria aplicação
const app = express();

mongoose.connect('mongodb+srv://gustavogutkoski:7580656za@cluster0-eiras.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// permite que o express entenda requisições em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);