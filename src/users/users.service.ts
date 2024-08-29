import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Luis',
    },
  ];

  getUsers() {
    return this.users;
  }

  createUsers(user: CreateUserDto) {
    this.users.push(user);
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
