import { randomUUID } from 'node:crypto';

export class ContactUser {
  readonly id: string;
  name: string;
  phone: string;
  date_register: Date;
  userId?: string;

  constructor() {
    this.id = randomUUID();
  }
}

/* constructor(name: string, phone: string, userId: string) {
  this.id = randomUUID();
  this.name = name;
  this.phone = phone;
  this.date_register = new Date();
  this.userId = userId;
} */
