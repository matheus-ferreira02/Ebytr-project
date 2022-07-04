const routes = require('express').Router();
const rescue = require('express-rescue');
const taskController = require('../../controllers/task');

routes.get('/:id', rescue(taskController.getTasksByUserId));

module.exports = routes;
