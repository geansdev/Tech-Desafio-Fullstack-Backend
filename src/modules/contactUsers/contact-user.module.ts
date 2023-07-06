import { Module } from '@nestjs/common';
import { ContactUsersController } from './contact-user.controller';
import { ContactUserService } from './contact-user.service';
import { ContactUserRepository } from './repositories/contact-user.repository';
import { ContactUserPrismaRepository } from './repositories/prisma/contact-user.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ContactUsersController],
  providers: [
    ContactUserService,
    PrismaService,
    { provide: ContactUserRepository, useClass: ContactUserPrismaRepository },
  ],
})
export class UsersModule {}
