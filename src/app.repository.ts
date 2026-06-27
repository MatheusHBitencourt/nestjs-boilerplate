import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Injectable()
export class AppRepository {
  constructor(private readonly prisma: PrismaService) {}

  createTodo(data: CreateTodoDto) {
    return this.prisma.todo.create({ data });
  }

  findAllTodos() {
    return this.prisma.todo.findMany();
  }

  findTodoById(id: string) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  updateTodo(id: string, data: UpdateTodoDto) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  deleteTodo(id: string) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
