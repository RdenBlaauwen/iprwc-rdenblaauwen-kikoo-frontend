import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninSignupComponent } from '../kku-customer/signin-signup/signin-signup.component';

const routes: Routes = [
  { path: 'login', component: SigninSignupComponent },
  // { path: 'signup', component: '', outlit: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KkuRoutingModule {}
