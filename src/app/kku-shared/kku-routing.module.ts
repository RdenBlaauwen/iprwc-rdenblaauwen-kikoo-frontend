import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { SigninSignupComponent } from '../kku-customer/signin-signup/signin-signup.component';
import { ShopDisplayComponent } from '../kku-shop/shop-display/shop-display.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: 'login', component: SigninSignupComponent },
  { path: 'catalog', component: ShopDisplayComponent },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  // { path: 'signup', component: '', outlit: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KkuRoutingModule {}
