import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { Order, OrderProduct } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<OrderProduct[]> = new BehaviorSubject<
    OrderProduct[]
  >([]);

  public order: BehaviorSubject<Order> = new BehaviorSubject<Order>(
    new Order()
  );

  constructor() {
    this.cart.subscribe((cart) => {
      const order = this.order.value;
      order.orderProducts = cart;
      this.order.next(order);
    });
  }

  public addProduct(product: Product): void {
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

  public removeProduct(product: Product): void {
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

  public setProductAmount(product: Product, amount: number): void {
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
