import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'kku-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input('user') userModel?: User;
  @ViewChild('form') signupForm?: NgForm;

  public default = 'kek';

  // onSubmit(form: NgForm): void {
  //   console.log('submitted', form);
  // }

  onSubmit(): void {
    // console.log('submitted', form);
    console.log('submitted', this.signupForm);
  }
}
