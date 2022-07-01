const jwt = require('../../utils/jwt');
const { User } = require('../../database/models');

const signIn = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  const token = jwt.generateToken(user);

  return token;
}

module.exports = {
  signIn
}