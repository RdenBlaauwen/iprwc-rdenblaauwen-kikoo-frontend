import { Customer } from './customer';
import { BackendProduct } from './product';

export class OrderProduct {
  constructor(public product: BackendProduct, public amount: number) {}

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

export abstract class Order {
  constructor(
    public orderProducts: OrderProduct[] = [],
    public orderer?: string | Customer
  ) {}
}

export class BackendOrder extends Order {
  constructor(
    public id: string,
    public createdAt: Date,
    public status: string,
    public updatedAt: Date,
    orderProducts: OrderProduct[],
    orderer: string | Customer
  ) {
    super(orderProducts, orderer);
  }
}

export class FrontendOrder extends Order {
  constructor(orderProducts: OrderProduct[] = [], orderer?: string | Customer) {
    super(orderProducts, orderer);
  }
}
