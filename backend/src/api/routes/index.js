const routes = require('express').Router();
const loginRoutes = require('./login');

routes.use('/login', loginRoutes);

module.exports = routes;
