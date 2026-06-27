import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString, IsUUID, MaxLength } from 'class-validator';
import { TodoStatus } from '@prisma/client';

@Exclude()
export class BaseTodoDto {
  @Expose()
  @IsUUID('4')
  @IsNotEmpty()
  id!: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name!: string;

  @Expose()
  @IsEnum(TodoStatus)
  @IsNotEmpty()
  status!: TodoStatus;

  @Expose()
  @IsString()
  @IsNotEmpty()
  description!: string;
}
