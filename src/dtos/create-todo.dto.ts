import { OmitType } from '@nestjs/mapped-types';
import { BaseTodoDto } from './base-todo.dto';

export class CreateTodoDto extends OmitType(BaseTodoDto, ['id'] as const) {}
