const routes = require('express').Router();
const loginController = require('../../controllers/login');
const rescue = require('express-rescue');

routes.post('/', rescue(loginController.signIn));

module.exports = routes;