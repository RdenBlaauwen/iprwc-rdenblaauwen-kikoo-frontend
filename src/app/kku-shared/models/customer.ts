import { User } from './user';

export class Customer {
  constructor(
    public id: string,
    public email: string,
    public phoneNumber: string,
    public houseNumber: number,
    public postalCode: string,
    public street: string,
    public firstName?: string,
    public lastName?: string,
    public country?: string,
    public user?: string | User
  ) {}
}
