import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [UserFormComponent, SignupComponent],
  exports: [UserFormComponent, SignupComponent],
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
})
export class KkuCustomerModule {}
