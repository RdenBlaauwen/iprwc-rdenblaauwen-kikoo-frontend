import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kku-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.scss'],
})
export class CartWidgetComponent {
  constructor(private router: Router) {}
  onNavigate(): void {
    this.router.navigate(['cart']);
  }
}
