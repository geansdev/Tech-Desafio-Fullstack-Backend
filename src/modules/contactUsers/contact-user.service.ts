import { Injectable } from '@nestjs/common';
import { UpdateContactUserDto } from './dto/update-contact-user.dto';
import { ContactUserRepository } from './repositories/contact-user.repository';
import { CreateContactUserDto } from './dto/create-contact-user.dto';

@Injectable()
export class ContactUserService {
  constructor(private userRepository: ContactUserRepository) {}
  create(createUserDto: CreateContactUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id);
  }

  update(id: string, updateUserDto: UpdateContactUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
