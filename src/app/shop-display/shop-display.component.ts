import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop-display',
  templateUrl: './shop-display.component.html',
  styleUrls: ['./shop-display.component.scss'],
})
export class ShopDisplayComponent implements OnInit {
  constructor(private http: ProductService) {}

  ngOnInit(): void {
    this.http.get();
  }
}
