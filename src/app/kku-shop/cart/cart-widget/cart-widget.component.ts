import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/kku-shared/services/cart.service';

@Component({
  selector: 'kku-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss'],
})
export class CartWidgetComponent {
  public faShoppingCart = faShoppingCart;

  public productCount = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.cart.subscribe((orderProducts) => {
      let count = 0;
      orderProducts.forEach((orderProduct) => {
        count += orderProduct.amount;
      });
      this.productCount = count;
    });
  }

  onNavigate(): void {
    this.router.navigate(['cart']);
  }
}
