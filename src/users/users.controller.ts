import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('users')
  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @ApiTags('users')
  @Post()
  createUsers(@Body() user: CreateUserDto) {
    return this.usersService.createUsers(user);
  }
}
