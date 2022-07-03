const routes = require('express').Router();
const loginController = require('../../controllers/login');
const rescue = require('express-rescue');
const validateLogin = require('../../middlewares/validateLogin');

routes.post('/', rescue(validateLogin), rescue(loginController.signIn));

module.exports = routes;