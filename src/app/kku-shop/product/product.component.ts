import { Component, Input } from '@angular/core';
import { FrontendProduct } from 'src/app/kku-shared/models/product';

@Component({
  selector: 'kku-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input('product') product: FrontendProduct = new FrontendProduct();

  @Input() compact = false;

  get formattedPrice(): string {
    if (!this.product.price) {
      return '';
    }
    return new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(this.product.price);
  }
}
