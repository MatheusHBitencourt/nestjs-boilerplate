import { OmitType, PartialType } from '@nestjs/mapped-types';
import { BaseTodoDto } from './base-todo.dto';

export class UpdateTodoDto extends PartialType(
  OmitType(BaseTodoDto, ['id'] as const),
) {}
