const generateToken = require('../../utils/generateToken');
const { User } = require('../../database/models');
const teste = require('./teste')

const signIn = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  const token = generateToken(user);

  return token;
}

module.exports = {
  signIn,
  teste
}