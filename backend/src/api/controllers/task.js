const taskService = require('../services/task');

const getTasksByUserId = async (req, res) => {
  const { id } = req.user;
  const response = await taskService.getTasksByUserId(id);

  return res.status(200).json(response);
};

const create = async (req, res) => {
  const { id: userId } = req.user;
  const { title, content } = req.body;

  const response = await taskService.create({ title, content, userId });

  return res.status(201).json(response);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await taskService.deleteTask(id);

  return res.status(200).end();
};

module.exports = {
  getTasksByUserId,
  create,
  deleteTask
};