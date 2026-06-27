import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Injectable()
export class AppService {
  constructor(private readonly repository: AppRepository) {}

  createTodo(data: CreateTodoDto) {
    return this.repository.createTodo(data);
  }

  findAllTodos() {
    return this.repository.findAllTodos();
  }

  findTodoById(id: string) {
    return this.repository.findTodoById(id);
  }

  updateTodo(id: string, data: UpdateTodoDto) {
    return this.repository.updateTodo(id, data);
  }

  deleteTodo(id: string) {
    return this.repository.deleteTodo(id);
  }
}
