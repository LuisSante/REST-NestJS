import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksProps } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ValidatetasksPipe } from './pipes/validatetasks/validatetasks.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    return this.tasksService.getTasks(query);
  }

  @Get('findTask/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Get('/greet')
  @UseGuards(AuthGuard)
  getGreet(@Query(ValidatetasksPipe) query: { name: string; age: string }) {
    return `hello ${query.name}, you are ${query.age + 7456946} years old`;
  }

  @Get('error')
  @HttpCode(500)
  getError() {
    return 'Error Route!!';
  }

  @Get('/ticket/:id')
  getNumberParam(@Param('id', ParseIntPipe) id: number) {
    return id + 14;
  }

  // @Post()
  // createTask(@Body() task: TasksProps) {
  //   console.log(task);
  //   return this.tasksService.createTasks(task);
  // }

  // @Put()
  // updateTask(@Body() task: UpdateTaskDto) {
  //   return this.tasksService.updateTasks(task);
  // }

  // @Delete()
  // deleteTask() {
  //   return this.tasksService.deleteTasks();
  // }

  // @Patch()
  // updateTaskStatus() {
  //   return this.tasksService.updateTaskStatus();
  // }
}
