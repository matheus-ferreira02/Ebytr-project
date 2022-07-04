const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(5).required()
});