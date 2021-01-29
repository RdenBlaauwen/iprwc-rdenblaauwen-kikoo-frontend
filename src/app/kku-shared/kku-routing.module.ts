import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninSignupComponent } from '../kku-customer/signin-signup/signin-signup.component';
import { DashboardComponent } from '../kku-dashboard/dashboard/dashboard.component';
import { CartComponent } from '../kku-shop/cart/cart.component';
import { CheckoutComponent } from '../kku-shop/checkout/checkout.component';
import { ShopDisplayComponent } from '../kku-shop/shop-display/shop-display.component';

const routes: Routes = [
  { path: 'login', component: SigninSignupComponent },
  { path: 'catalog', component: ShopDisplayComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  // { path: 'signup', component: '', outlit: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KkuRoutingModule {}
