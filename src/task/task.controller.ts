import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask() {
    return this.taskService.getAllTask()
  }

  @Post()
  createTask(@Body() {title, description}: CreateTaskDto) {
    return this.taskService.createTask(title, description)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    const task = this.taskService.getTaskById(id)
    this.taskService.deleteTask(id)
    return task
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    return this.taskService.updateTask(id, updatedFields)
  }
}
