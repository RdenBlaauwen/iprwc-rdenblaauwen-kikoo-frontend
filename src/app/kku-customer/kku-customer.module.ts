import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    UserFormComponent,
    SignupComponent,
    SigninComponent,
    SigninSignupComponent,
    CustomerFormComponent,
  ],
  exports: [SigninComponent, SigninSignupComponent, CustomerFormComponent],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class KkuCustomerModule {}
