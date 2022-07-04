const jwt = require('../../utils/jwt');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token is required' });

  try {
    const decodedToken = jwt.decodeToken(authorization);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
};