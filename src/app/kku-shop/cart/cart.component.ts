import { Component } from '@angular/core';
import { Order, OrderProduct } from 'src/app/kku-shared/models/order';
import { Product } from 'src/app/kku-shared/models/product';
import { CartService } from 'src/app/kku-shared/services/cart.service';

@Component({
  selector: 'kku-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  public cart: Order = new Order();

  constructor(private cartService: CartService) {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart;
    });
  }

  public get cartJson(): string {
    return JSON.stringify(this.cart);
  }

  public onAmountChange(product: Product, event: number): void {
    this.cartService.setProductAmount(product, event);
  }

  public onRemoveOrderProduct(orderProduct: OrderProduct): void {
    this.cartService.removeOrderProduct(orderProduct);
  }
}
