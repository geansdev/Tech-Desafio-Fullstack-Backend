import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  MinLength,
  IsString,
  IsNotEmpty,
  IsEmail,
  IsDateString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  phone: string;

  @IsDateString()
  date_register: string;
}
