const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const generateToken = (payload) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256'
  }

  const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);

  return token;
}

const decodeToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  decodeToken
}
