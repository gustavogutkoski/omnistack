const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// cria aplicação
const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-eiras.mongodb.net/<base>?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// permite que o express entenda requisições em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);