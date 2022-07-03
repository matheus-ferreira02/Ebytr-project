const { getMockReq, getMockRes } = require('@jest-mock/express');
const loginController = require('../../api/controllers/login');
const loginService = require('../../api/services/login');
const tokenMock = require('../mocks/token');

describe('Testes da camada "controllers" de Login:', () => {
  beforeEach(() => {
    loginService.signIn = jest.fn().mockResolvedValue(tokenMock());
  });

  it('Testa se retorna uma requisição com o status "200"', async () => {
    const { res } = getMockRes();
    const req = getMockReq({ body: { email: "matheus@gmail.com", password: "123456" } });
    
    await loginController.signIn(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: tokenMock() });
  });
});