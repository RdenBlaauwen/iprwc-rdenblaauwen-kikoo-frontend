import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from '../kku-customer/settings/settings.component';
import { SigninSignupComponent } from '../kku-customer/signin-signup/signin-signup.component';
import { CustomersComponent } from '../kku-dashboard/customers/customers.component';
import { DashboardComponent } from '../kku-dashboard/dashboard/dashboard.component';
import { OrdersComponent } from '../kku-dashboard/orders/orders.component';
import { ProductsComponent } from '../kku-dashboard/products/products.component';
import { CartComponent } from '../kku-shop/cart/cart.component';
import { CheckoutComponent } from '../kku-shop/checkout/checkout.component';
import { ShopDisplayComponent } from '../kku-shop/shop-display/shop-display.component';

const routes: Routes = [
  { path: 'login', component: SigninSignupComponent },
  { path: 'catalog', component: ShopDisplayComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'orders', component: OrdersComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
    ],
  },
  { path: 'user/settings', component: SettingsComponent },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  // { path: 'signup', component: '', outlit: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KkuRoutingModule {}
