import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer, FrontendCustomer } from 'src/app/kku-shared/models/customer';
import { FrontendOrder } from 'src/app/kku-shared/models/order';
import { AuthService } from 'src/app/kku-shared/services/auth.service';
import { CartService } from 'src/app/kku-shared/services/cart.service';
import { OrderService } from 'src/app/kku-shared/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  public customer: Customer = new FrontendCustomer();

  constructor(
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private orderService: OrderService
  ) {
    this.authService.resourceOwner.subscribe((backendUser) => {
      if (
        !backendUser ||
        !backendUser.customer ||
        typeof backendUser.customer === 'string'
      ) {
        return;
      }
      this.customer = backendUser.customer;
    });
  }

  public onOrder() {
    const cart = this.cartService.cart.value;
    const order = new FrontendOrder(cart, this.customer);
    this.orderService.post(order);
  }

  public onNavigateToShop(): void {
    this.router.navigate(['catalog']);
  }
}
