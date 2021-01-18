import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { Product } from 'src/app/kku-shared/models/product';

@Component({
  selector: 'kku-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input('product') product: Product = new Product(
    'Book',
    undefined,
    'Lorem ipsum',
    new URL(
      'https://cdn.pixabay.com/photo/2014/04/02/14/12/book-306468_1280.png'
    )
  );

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
