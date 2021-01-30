import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kku-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss'],
})
export class CartWidgetComponent {
  public faShoppingCart = faShoppingCart;

  constructor(private router: Router) {}

  onNavigate(): void {
    this.router.navigate(['cart']);
  }
}
