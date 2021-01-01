import { Customer } from './customer';

export class User {
  constructor(
    public id: string,
    public username: string,
    public isAdmin: boolean,
    public customer?: string | Customer
  ) {}
}
