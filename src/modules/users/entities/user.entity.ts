import { ContactUser } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;

  @Exclude()
  password: string;
  phone: string;
  date_register: Date;

  contactUsers?: ContactUser[] | null;

  constructor() {
    this.id = randomUUID();
  }
}

/* constructor(name: string, phone: string, password: string) {
  this.id = randomUUID();
  this.name = name;
  this.password = password;
  this.phone = phone;
  this.date_register = new Date();
} */
