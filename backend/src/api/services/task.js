const { Task } = require('../../database/models');

const getTasksByUserId = async (userId) => {
  const response = await Task.findAll({ where: { userId } });

  return response;
};

module.exports = {
  getTasksByUserId
};