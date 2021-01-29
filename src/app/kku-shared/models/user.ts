import { BackendCustomer, Customer } from './customer';
import { BackendEntity } from './types';

export abstract class User {
  constructor(
    public username: string,
    public email: string,
    public customer?: string | Customer,
    public password?: string
  ) {}
}

export class BackendUser extends User implements BackendEntity {
  constructor(
    public id: string,
    public isAdmin: boolean,
    username: string,
    email: string,
    customer?: string | BackendCustomer
  ) {
    super(username, email, customer);
  }
}

export class FrontendUser extends User {
  constructor(
    username = '',
    email = '',
    password = '',
    customer?: string | Customer
  ) {
    super(username, email, customer, password);
  }
}

export class Credentials {
  constructor(
    public username: string,
    public password: string,
    public email?: string
  ) {}
}
