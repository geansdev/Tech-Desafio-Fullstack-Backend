import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import { ContactUser } from '../../entities/contact-user.entity';
import { ContactUserRepository } from '../contact-user.repository';
import { CreateContactUserDto } from '../../dto/create-contact-user.dto';

@Injectable()
export class ContactUserPrismaRepository implements ContactUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactUserDto): Promise<ContactUser> {
    const contactUser = new ContactUser();
    Object.assign(contactUser, {
      ...data,
    });
    const newContactUser = await this.prisma.contactUser.create({
      data: {
        id: contactUser.id,
        name: contactUser.name,
        date_register: contactUser.date_register,
        phone: contactUser.phone,
        userId: contactUser.userId,
      },
    });
    return plainToInstance(ContactUser, newContactUser);
  }
  async findAll(): Promise<ContactUser[]> {
    const contactUser = await this.prisma.contactUser.findMany();
    return plainToInstance(ContactUser, contactUser);
  }
  async findOne(id: string): Promise<ContactUser> {
    const contactUser = await this.prisma.contactUser.findUnique({
      where: { id: id },
    });
    return plainToInstance(ContactUser, contactUser);
  }
  async update(id: string, data: UpdateUserDto): Promise<ContactUser> {
    const contactUser = await this.prisma.contactUser.update({
      where: { id: id },
      data: { ...data },
    });
    return plainToInstance(ContactUser, contactUser);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.contactUser.delete({
      where: { id: id },
    });
  }
}
