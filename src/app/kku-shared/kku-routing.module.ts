import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../kku-customer/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: SignupComponent },
  // { path: 'signup', component: '', outlit: 'modal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class KkuRoutingModule {}
