const createObjError = require('../../utils/createObjError');
const schemaLogin = require('../joi/schemaLogin');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = schemaLogin.validate({ email, password });

  if (error) return next(createObjError(400, error.message));

  next();
};