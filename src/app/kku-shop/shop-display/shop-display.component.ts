import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/kku-shared/models/product';
import { CartService } from 'src/app/kku-shared/services/cart.service';
import { ProductService } from 'src/app/kku-shared/services/product.service';

@Component({
  selector: 'kku-shop-display',
  templateUrl: './shop-display.component.html',
  styleUrls: ['./shop-display.component.scss'],
})
export class ShopDisplayComponent implements OnDestroy {
  public products: Product[] | null = [];
  private subscriptions: Subscription[] = [];

  //TODO: Is this IQ 4000 move really opaque logic?
  public set addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.addSubscription = productService.products.subscribe((products) => {
      this.products = products;
    });
  }

  onAddToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe;
    });
  }
}
