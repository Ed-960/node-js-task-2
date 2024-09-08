import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('reset-problems')
  async resetProblems() {
    const count = await this.usersService.resetProblemsFlag();
    return { message: `Users with problems: ${count}` };
  }

  @Get()
  async getAllUsers() {
    const users = await this.usersService.getAllUsers();
    return users;
  }
}
