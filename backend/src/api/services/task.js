const { Task } = require('../../database/models');

const getTasksByUserId = async (userId) => {
  const response = await Task.findAll({ where: { userId },
    order: [
      ['title', 'ASC'],
      ['createdAt', 'ASC'],
      ['status', 'ASC'],
    ]
  });

  return response;
};

module.exports = {
  getTasksByUserId
};