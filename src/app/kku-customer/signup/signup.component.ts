import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/kku-shared/models/user';
import { UserService } from 'src/app/kku-shared/services/user.service';

@Component({
  selector: 'kku-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  private user = new User(
    'KEK',
    undefined,
    undefined,
    undefined,
    'KEK@KEK.KEK',
    undefined
  );

  public form = new FormGroup({
    username: new FormControl(
      this.user && this.user.username,
      Validators.required
    ),
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.required,
    ]),
    email: new FormControl(this.user && this.user.email, [
      Validators.email,
      Validators.required,
    ]),
  });

  get valid() {
    return this.form.valid;
  }

  constructor(private userService: UserService) {
    this.form.valueChanges.subscribe((userData) => {
      this.user.username = userData.username;
      this.user.email = userData.email;
      this.user.password = userData.password;
    });
  }

  onSubmit(): void {
    if (this.valid) {
      this.userService.post(this.user);
    }
  }
}
