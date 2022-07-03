const loginService = require('../services/login');

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService.signIn({ email, password });

  return res.status(200).json({ token });
};

module.exports = {
  signIn
};