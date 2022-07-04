const { Task } = require('../../database/models');
const taskService = require('../../api/services/task');
const tasksMock = require('../mocks/tasks')

describe('Testes da camada "services" de Tasks: ', () => { 
  describe('Em casos de sucesso, testa se', () => {
    beforeEach(() => {
      Task.findAll = jest.fn().mockResolvedValue(tasksMock);
    });

    afterEach(() => {
      Task.findAll.mockReset();
    })

    it('a função "getTasksByUserId" existe', () => {
      expect(typeof taskService.getTasksByUserId).toBe('function');
    });

    it('a função "getTasksByUserId" é chamada com o parâmetro correto', async () => {
      await taskService.getTasksByUserId(1);
      const parameterQuery = { where: { userId: 1 } }
      expect(Task.findAll).toBeCalledWith(parameterQuery);
    });

    it('retorna as tasks', async () => {
      const response = await taskService.getTasksByUserId(1);
      
      expect(response).toStrictEqual(tasksMock);
    });
  });
});
