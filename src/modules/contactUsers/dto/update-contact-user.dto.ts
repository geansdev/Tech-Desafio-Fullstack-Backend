import { PartialType } from '@nestjs/mapped-types';
import { CreateContactUserDto } from './create-contact-user.dto';

export class UpdateContactUserDto extends PartialType(CreateContactUserDto) {}
