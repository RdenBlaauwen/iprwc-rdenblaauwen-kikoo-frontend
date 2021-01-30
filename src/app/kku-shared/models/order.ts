import { Customer } from './customer';
import { BackendProduct } from './product';
import { BackendEntity } from './types';

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

export enum Status {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  BEING_DELIVERED = 'BEING_DELIVERED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED',
}

export abstract class Order {
  public kek = 'kek';
  constructor(
    public orderProducts: OrderProduct[] = [],
    public customer?: string | Customer
  ) {}
}

export class BackendOrder extends Order implements BackendEntity {
  constructor(
    public id: string,
    public createdAt: Date,
    public status: Status,
    public updatedAt: Date,
    orderProducts: OrderProduct[],
    customer: string | Customer
  ) {
    super(orderProducts, customer);
  }
}

export class FrontendOrder extends Order {
  constructor(
    orderProducts: OrderProduct[] = [],
    customer?: string | Customer
  ) {
    super(orderProducts, customer);
  }
}
