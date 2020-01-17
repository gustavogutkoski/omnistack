const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

// cria aplicação
const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-eiras.mongodb.net/<database>?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors({ origin: 'http://localhost:3000' }));

// permite que o express entenda requisições em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);