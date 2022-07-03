const loginService = require('../../api/services/login');
const { userMock } = require('../mocks/users');
const { User } = require('../../database/models');
const jwt = require('../../utils/jwt');

describe('Testes da camada "services" de Login: ', () => {
  describe('Em casos de sucesso, testa se', () => {
    beforeEach(() => {
      User.findOne = jest.fn().mockResolvedValue(userMock);
    });

    afterEach(() => {
      User.findOne.mockReset();
    });

    it('existe a service com o nome de signIn', () => {
      expect(typeof loginService.signIn).toBe('function');
    });

    it('retorna um token válido', async () => {
      const response = await loginService.signIn({ email: userMock.email, password: userMock.password });
      expect(response).toBeDefined();
  
      const decodedToken = jwt.decodeToken(response);
  
      expect(decodedToken).toEqual({ id: userMock.id, email: userMock.email });
    });
  });

  describe('Em casos de erro, testa se', () => {
    beforeEach(() => {
      User.findOne = jest.fn().mockResolvedValue(null);
    });

    afterEach(() => {
      User.findOne.mockReset();
    });

    it('retorna um erro válido com status "404" e messagem "User not found"', async () => {
      try {
        await loginService.signIn({ email: userMock.email, password: userMock.password })
      } catch (error) {
        expect(error.status).toBe(404);
        expect(error.message).toBe('User not found');
      }
    });
  });
});