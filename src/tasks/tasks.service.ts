import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksProps } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: TasksProps[] = [];

  getTasks(query: any): TasksProps[] {
    console.log(query);
    return this.tasks;
  }

  getTask(id: number) {
    const foundTask = this.tasks.find((task) => task.id === id);

    if (!foundTask) {
      return new NotFoundException('Task not found');
    }

    return foundTask;
  }

  createTasks(task: TasksProps) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTasks(task: UpdateTaskDto) {
    return 'Update tasks';
  }

  deleteTasks() {
    return 'Delete tasks';
  }

  updateTaskStatus() {
    return 'Update tasks status';
  }
}
