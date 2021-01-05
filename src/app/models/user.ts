import { Customer } from './customer';

export class User {
  constructor(
    public username: string,
    public isAdmin?: boolean,
    public id?: string,
    public password?: string,
    public email?: string,
    public customer?: string | Customer
  ) {}
}
