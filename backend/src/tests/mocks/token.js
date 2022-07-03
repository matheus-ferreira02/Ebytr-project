const { generateToken } = require("../../utils/jwt")
const { userMock } = require("./users")

module.exports = () => generateToken(userMock);

 