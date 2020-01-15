const express = require('express');
const mongoose = require('mongoose');

// cria aplicação
const app = express();

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-eiras.mongodb.net/<base>?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// permite que o express entenda requisições em JSON
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: 'alou tete' });
});

app.listen(3333);