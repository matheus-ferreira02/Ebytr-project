const routes = require('express').Router();
const loginRoutes = require('./login');
const taskRoutes = require('./task');
const jwt = require('../../utils/jwt');

routes.use('/login', loginRoutes);
routes.use('/tasks', taskRoutes);

routes.use('/auth', (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token is required' });

  try {
    jwt.decodeToken(authorization);
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
});

module.exports = routes;
