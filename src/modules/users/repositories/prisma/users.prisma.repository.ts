import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { UsersRepository } from '../users.repository';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });
    const newUser = await this.prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        date_register: user.date_register,
        phone: user.phone,
      },
    });
    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return plainToInstance(User, user);
  }
  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id: id },
      data: { ...data },
    });
    return plainToInstance(User, user);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id: id },
    });
  }
}
