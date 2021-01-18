import { Customer } from './customer';
import { Product } from './product';

export class OrderProduct {
  constructor(public product: Product, public amount: number) {}
}

export class Order {
  constructor(
    public orderProducts: OrderProduct[] = [],
    public id?: string,
    public orderer?: string | Customer,
    public status?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
