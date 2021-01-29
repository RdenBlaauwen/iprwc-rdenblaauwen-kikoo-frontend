import { BackendEntity } from './types';
import { BackendUser, User } from './user';

export abstract class Customer {
  constructor(
    public email: string,
    public phoneNumber: string,
    public postalCode: string,
    public city: string,
    public street: string,
    public houseNumber: number,
    public firstName?: string,
    public lastName?: string,
    public country?: string,
    public user?: string | User
  ) {}
}

export class BackendCustomer extends Customer implements BackendEntity {
  constructor(
    public id: string,
    email: string,
    phoneNumber: string,
    postalCode: string,
    city: string,
    street: string,
    houseNumber: number,
    firstName?: string,
    lastName?: string,
    country?: string,
    user?: string | BackendUser
  ) {
    super(
      email,
      phoneNumber,
      postalCode,
      city,
      street,
      houseNumber,
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
    postalCode = '',
    city = '',
    street = '',
    houseNumber = 0,
    firstName = '',
    lastName = '',
    country = '',
    user?: string | User
  ) {
    super(
      email,
      phoneNumber,
      city,
      postalCode,
      street,
      houseNumber,
      firstName,
      lastName,
      country,
      user
    );
  }
}
