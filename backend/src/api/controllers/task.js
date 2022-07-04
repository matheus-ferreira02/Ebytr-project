const taskService = require('../services/task');

const getTasksByUserId = async (req, res) => {
  const { id } = req.params;
  const response = await taskService.getTasksByUserId(id);

  return res.status(200).json(response);
};

module.exports = {
  getTasksByUserId
};