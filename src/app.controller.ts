import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.appService.createTodo(body);
  }

  @Get()
  findAllTodos() {
    return this.appService.findAllTodos();
  }

  @Get(':id')
  findTodoById(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.findTodoById(id);
  }

  @Put(':id')
  updateTodo(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateTodoDto,
  ) {
    return this.appService.updateTodo(id, body);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteTodo(id);
  }
}
