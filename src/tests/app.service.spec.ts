import { describe, beforeEach, it } from 'node:test';
import { AppRepository } from 'src/app.repository';
import { AppService } from 'src/app.service';
import * as sinon from 'sinon';

describe('AppService', () => {
  let service: AppService;
  let repository: sinon.SinonStubbedInstance<AppRepository>;

  beforeEach(() => {
    repository = sinon.createStubInstance(AppRepository);
    service = new AppService(repository);
  });

  describe('createTodo()', () => {
    it('should create a todo', async () => {
      const data = { title: 'test', description: 'desc' } as any;
      const expected = { id: '1', ...data };

      repository.createTodo.withArgs(data).resolves(expected);

      const response = await service.createTodo(data);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.createTodo, data);
    });
  });

  describe('findAllTodos()', () => {
    it('should return all todos', async () => {
      const expected = [{ id: '1' }, { id: '2' }] as any;

      repository.findAllTodos.resolves(expected);

      const response = await service.findAllTodos();

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.findAllTodos);
    });
  });

  describe('findTodoById()', () => {
    it('should return a todo by id', async () => {
      const id = '1';
      const expected = { id } as any;

      repository.findTodoById.withArgs(id).resolves(expected);

      const response = await service.findTodoById(id);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.findTodoById, id);
    });
  });

  describe('updateTodo()', () => {
    it('should update a todo', async () => {
      const id = '1';
      const data = { title: 'updated' } as any;
      const expected = { id, ...data };

      repository.updateTodo.withArgs(id, data).resolves(expected);

      const response = await service.updateTodo(id, data);

      expect(response).toStrictEqual(expected);
      sinon.assert.calledOnceWithExactly(repository.updateTodo, id, data);
    });
  });

  describe('deleteTodo()', () => {
    it('should delete a todo', async () => {
      const id = '1';

      repository.deleteTodo.withArgs(id).resolves();

      const response = await service.deleteTodo(id);

      expect(response).toBeUndefined();
      sinon.assert.calledOnceWithExactly(repository.deleteTodo, id);
    });
  });
});
