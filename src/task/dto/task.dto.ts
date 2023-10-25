import { TaskStatus } from "../task.entity"
import { IsString, IsNotEmpty, IsOptional, IsEnum } from "class-validator"

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string
}

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus
}
