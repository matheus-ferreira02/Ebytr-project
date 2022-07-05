const { getMockReq, getMockRes } = require('@jest-mock/express');
const taskService = require('../../api/services/task');
const taskController = require('../../api/controllers/task');
const tasksMock = require('../mocks/tasks');

describe('Testes da camada "controller" de Tasks', () => {
  describe('Em casos de sucesso, testa se', () => {
    beforeEach(() => {
      taskService.getTasksByUserId = jest.fn().mockResolvedValue(tasksMock);
    });

    afterEach(() => {
      taskService.getTasksByUserId.mockReset();
    });

    it('a função "getTasksByUserId" existe', () => {
      expect(typeof taskController.getTasksByUserId).toBe('function');
    });

    it('uma resposta com o status "200"', async () => {
      const { res } = getMockRes();
      const req = getMockReq({ params: 1, user: { id: 1 } });
      
      await taskController.getTasksByUserId(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
    });

    it('uma "json" com as tarefas', async () => {
      const { res } = getMockRes();
      const req = getMockReq({ params: 1, user: { id: 1 } });
      
      await taskController.getTasksByUserId(req, res);
  
      expect(res.json).toHaveBeenCalledWith(tasksMock);
    });
  });
});