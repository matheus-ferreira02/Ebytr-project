const routes = require('express').Router();
const rescue = require('express-rescue');
const taskController = require('../../controllers/task');
const authMiddleware = require('../../middlewares/authMiddleware');

routes.get('/', rescue(authMiddleware), rescue(taskController.getTasksByUserId));

module.exports = routes;
