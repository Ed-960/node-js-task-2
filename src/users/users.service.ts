import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async resetProblemsFlag(): Promise<number> {
    const usersWithProblems = await this.prisma.user.count({
      where: { hasProblems: true },
    });

    await this.prisma.user.updateMany({
      data: { hasProblems: false },
    });

    return usersWithProblems;
  }
}
