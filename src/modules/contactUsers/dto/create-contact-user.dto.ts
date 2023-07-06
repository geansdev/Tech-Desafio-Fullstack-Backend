import { MinLength, IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateContactUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(9)
  phone: string;

  @IsDateString()
  date_register: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
