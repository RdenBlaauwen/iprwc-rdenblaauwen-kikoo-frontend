import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { Order, OrderProduct } from '../models/order';
import { BackendProduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<Order> = new BehaviorSubject<Order>(new Order());

  public addProduct(product: BackendProduct): void {
    const cart = this.cart.value;

    const foundOrderProduct = cart.orderProducts.find((orderProduct) => {
      return orderProduct.product._id === product._id;
    });

    if (foundOrderProduct) {
      foundOrderProduct.amount++;
    } else {
      cart.orderProducts.push(new OrderProduct(product, 1));
    }

    this.cart.next(cart);
  }

  public removeProduct(product: BackendProduct): void {
    const cart = this.cart.value;

    const foundOrderProduct = cart.orderProducts.find((orderProduct) => {
      return orderProduct.product._id === product._id;
    });

    if (!foundOrderProduct) {
      return;
    }

    if (foundOrderProduct.amount > 1) {
      foundOrderProduct.amount--;
    } else {
      cart.orderProducts = R.without([foundOrderProduct], cart.orderProducts);
    }

    this.cart.next(cart);
  }

  public setProductAmount(product: BackendProduct, amount: number): void {
    const cart = this.cart.value;

    const foundOrderProduct = cart.orderProducts.find((orderProduct) => {
      return orderProduct.product._id === product._id;
    });

    if (foundOrderProduct) {
      foundOrderProduct.amount = amount;
    } else {
      cart.orderProducts.push(new OrderProduct(product, 1));
    }

    this.cart.next(cart);
  }
  //TODO: add amount validation OR an amount object

  public removeOrderProduct(orderProduct: OrderProduct): void {
    this.cart.value.orderProducts = R.without(
      [orderProduct],
      this.cart.value.orderProducts
    );
  }
}
