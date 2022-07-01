const loginService = require('../../api/services/loginService');
const { userMock } = require('../mocks/users');
const { User } = require('../../database/models');
const jwt = require('../../utils/jwt');

describe('Testes da camada "services" de Login: ', () => {
  beforeEach(() => {
    User.findOne = jest.fn().mockResolvedValue(userMock);
    jest.mock('../../utils/generateToken');
  });

  it('Existe a service com o nome de signIn', () => {
    expect(typeof loginService.signIn).toBe('function');
  });

  it('Retorna um token válido', async () => {
    const response = await loginService.signIn({ email: userMock.email, password: userMock.password });
    expect(response).toBeDefined();

    const decodedToken = jwt.decodeToken(response);

    expect(decodedToken).toEqual({ id: userMock.id, email: userMock.email });
  });
});