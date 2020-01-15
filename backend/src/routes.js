const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router(DevController.store);

routes.post('/devs', DevController.store);

module.exports = routes;