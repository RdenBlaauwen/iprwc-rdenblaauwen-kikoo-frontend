import { Customer } from './customer';
import { Product } from './product';

export class Order {
  constructor(
    public id?: string,
    public orderer?: string | Customer,
    public status?: string,
    public createdAt?: Date,
    public updatedAt?: Date,
    public orderProducts?: {
      product: string | Product;
      amount: number;
    }
  ) {}
}
