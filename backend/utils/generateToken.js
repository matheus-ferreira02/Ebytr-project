const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256'
  }

  const { JWT_SECRET } = process.env;

  const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);

  return token;
}
