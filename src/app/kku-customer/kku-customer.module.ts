import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { SettingsComponent } from './settings/settings.component';
import { UserWidgetComponent } from './user-widget/user-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserFormComponent,
    SignupComponent,
    SigninComponent,
    SigninSignupComponent,
    CustomerFormComponent,
    SettingsComponent,
    UserWidgetComponent,
  ],
  exports: [
    SigninComponent,
    SigninSignupComponent,
    CustomerFormComponent,
    UserWidgetComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class KkuCustomerModule {}
