import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/kku-shared/models/product';
import { ProductService } from 'src/app/kku-shared/services/product.service';

@Component({
  selector: 'kku-shop-display',
  templateUrl: './shop-display.component.html',
  styleUrls: ['./shop-display.component.scss'],
})
export class ShopDisplayComponent {
  public products: Product[] | null = [];
  private productSubscription: Subscription;

  public get productsJson(): string {
    return JSON.stringify(this.products);
  }

  constructor(private productService: ProductService) {
    this.productSubscription = productService.products.subscribe((products) => {
      this.products = products;
    });
  }
}
