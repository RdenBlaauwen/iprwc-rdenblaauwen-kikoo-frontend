import { BackendUser, User } from './user';

export abstract class Customer {
  constructor(
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

export class BackendCustomer extends Customer {
  constructor(
    public id: string,
    email: string,
    phoneNumber: string,
    houseNumber: number,
    postalCode: string,
    street: string,
    firstName?: string,
    lastName?: string,
    country?: string,
    user?: string | BackendUser
  ) {
    super(
      email,
      phoneNumber,
      houseNumber,
      postalCode,
      street,
      firstName,
      lastName,
      country,
      user
    );
  }
}

export class FrontendCustomer extends Customer {
  constructor(
    email = '',
    phoneNumber = '',
    houseNumber = 0,
    postalCode = '',
    street = '',
    firstName = '',
    lastName = '',
    country = '',
    user?: string | User
  ) {
    super(
      email,
      phoneNumber,
      houseNumber,
      postalCode,
      street,
      firstName,
      lastName,
      country,
      user
    );
  }
}
