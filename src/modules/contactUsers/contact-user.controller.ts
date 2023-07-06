import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ContactUserService } from './contact-user.service';
import { UpdateContactUserDto } from './dto/update-contact-user.dto';
import { CreateContactUserDto } from './dto/create-contact-user.dto';

@Controller('contactUsers')
export class ContactUsersController {
  constructor(private readonly contactUserService: ContactUserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  create(@Body() createContactUserDto: CreateContactUserDto) {
    return this.contactUserService.create(createContactUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  findAll() {
    return this.contactUserService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactUserService.findOne(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateContactUserDto) {
    return this.contactUserService.update(id, updateUserDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactUserService.remove(id);
  }
}
