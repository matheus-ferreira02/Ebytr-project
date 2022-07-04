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

const create = async ({title, content, userId }) => {
  const response = Task.create({ title, content, userId });

  return response;
};

module.exports = {
  getTasksByUserId,
  create
};