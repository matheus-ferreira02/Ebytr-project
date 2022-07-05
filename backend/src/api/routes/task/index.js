const routes = require('express').Router();
const rescue = require('express-rescue');
const taskController = require('../../controllers/task');
const authMiddleware = require('../../middlewares/authMiddleware');
const validateTask = require('../../middlewares/validateTask');

routes.get('/', rescue(authMiddleware), rescue(taskController.getTasksByUserId));
routes.post('/', rescue(authMiddleware), rescue(validateTask),rescue(taskController.create));
routes.delete('/:id', rescue(authMiddleware),rescue(taskController.deleteTask));

module.exports = routes;
