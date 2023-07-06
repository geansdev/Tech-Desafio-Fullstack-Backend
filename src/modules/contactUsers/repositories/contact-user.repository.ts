import { ContactUser } from '../entities/contact-user.entity';
import { UpdateContactUserDto } from '../dto/update-contact-user.dto';
import { CreateContactUserDto } from '../dto/create-contact-user.dto';

export abstract class ContactUserRepository {
  abstract create(
    data: CreateContactUserDto,
  ): Promise<ContactUser> | ContactUser;
  abstract findAll(): Promise<ContactUser[]> | ContactUser[];
  abstract findOne(
    id: string,
  ): Promise<ContactUser | undefined> | ContactUser | undefined;
  abstract update(
    id: string,
    data: UpdateContactUserDto,
  ): Promise<ContactUser> | ContactUser;
  abstract delete(id: string): Promise<void> | void;
}
