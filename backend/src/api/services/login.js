const jwt = require('../../utils/jwt');
const { User } = require('../../database/models');
const createObjError = require('../../utils/createObjError');

const signIn = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  if (!user) throw createObjError(404, 'User not found');

  const token = jwt.generateToken(user);

  return token;
};

module.exports = {
  signIn
};