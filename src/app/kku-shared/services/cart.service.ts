import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { FrontendOrder, OrderProduct } from '../models/order';
import { BackendProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<OrderProduct[]> = new BehaviorSubject<
    OrderProduct[]
  >([]);

  public order: BehaviorSubject<FrontendOrder> = new BehaviorSubject<FrontendOrder>(
    new FrontendOrder()
  );

  constructor() {
    this.cart.subscribe((cart) => {
      const order = this.order.value;
      order.orderProducts = cart;
      this.order.next(order);
    });
  }

  public addProduct(product: BackendProduct): void {
    const cart = this.cart.value;

    const foundOrderProduct = cart.find((orderProduct) => {
      return orderProduct.product.id === product.id;
    });

    if (foundOrderProduct) {
      foundOrderProduct.amount++;
    } else {
      cart.push(new OrderProduct(product, 1));
    }

    this.cart.next(cart);
  }

  public removeProduct(product: BackendProduct): void {
    let cart = this.cart.value;

    const foundOrderProduct = cart.find((orderProduct) => {
      return orderProduct.product.id === product.id;
    });

    if (!foundOrderProduct) {
      return;
    }

    if (foundOrderProduct.amount > 1) {
      foundOrderProduct.amount--;
    } else {
      cart = R.without([foundOrderProduct], cart);
    }

    this.cart.next(cart);
  }

  public setProductAmount(product: BackendProduct, amount: number): void {
    const cart = this.cart.value;

    const foundOrderProduct = cart.find((orderProduct) => {
      return orderProduct.product.id === product.id;
    });

    if (foundOrderProduct) {
      foundOrderProduct.amount = amount;
    } else {
      cart.push(new OrderProduct(product, 1));
    }

    this.cart.next(cart);
  }
  //TODO: add amount validation OR an amount object

  public removeOrderProduct(orderProduct: OrderProduct): void {
    let cart = this.cart.value;
    cart = R.without([orderProduct], this.cart.value);

    this.cart.next(cart);
  }
}
