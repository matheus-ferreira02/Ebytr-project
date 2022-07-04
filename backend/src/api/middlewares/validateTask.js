const schemsTask = require('../joi/schemsTask');
const createObjError = require('../../utils/createObjError');

module.exports = (req, res, next) => {
  const { title, content } = req.body;

  const { error } = schemsTask.validate({ title, content });

  if (error) return next(createObjError(400, error.message));

  next();
};