const routes = require('express').Router();
const loginRoutes = require('./login');
const taskRoutes = require('./task');

routes.use('/login', loginRoutes);
routes.use('/tasks', taskRoutes);

module.exports = routes;
