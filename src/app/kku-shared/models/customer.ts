import { BackendUser, User } from './user';

export abstract class Customer {
  constructor(
    public email: string,
    public phoneNumber: string,
    public houseNumber: number,
    public postalCode: string,
    public firstName?: string,
    public lastName?: string,
    public country?: string,
    public user?: string | User
  ) {}
}

export class BackendCustomer extends Customer {
  public get _id(): string {
    return this.id;
  }
  constructor(
    private id: string,
    email: string,
    phoneNumber: string,
    houseNumber: number,
    postalCode: string,
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
      firstName,
      lastName,
      country,
      user
    );
  }
}
