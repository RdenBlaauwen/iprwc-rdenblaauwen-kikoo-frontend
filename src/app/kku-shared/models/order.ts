import { Customer } from './customer';
import { Product } from './product';

export class OrderProduct {
  constructor(public product: Product, public amount: number) {}

  public get totalPrice(): number {
    if (!this.product.price) {
      return 0;
    }
    return this.product.price * this.amount;
  }

  public get totalPriceFormatted(): string {
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(this.totalPrice);
  }
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
