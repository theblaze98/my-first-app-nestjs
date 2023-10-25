import { Injectable } from '@nestjs/common'
import { Task, TaskStatus } from './task.entity'
import { v4 as uuid } from 'uuid'
import { UpdateTaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1 description',
      status: TaskStatus.PENDING,
    },
  ]

  getAllTask() {
    return this.tasks
  }
  createTask(title: string, description: string) {
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.PENDING,
    }
    this.tasks.push(task)
    return task
  }
  updateTask(id: string, updateFields: UpdateTaskDto) {
    const task = this.getTaskById(id)
    const newTask = { ...task, ...updateFields }
    this.tasks = this.tasks.map(task => (task.id === id ? newTask : task))
    return newTask
  }
  getTaskById(id: string) {
    return this.tasks.find(task => task.id === id)
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
