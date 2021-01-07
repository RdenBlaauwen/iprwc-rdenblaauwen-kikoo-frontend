import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/kku-shared/models/user';
import { UserService } from 'src/app/kku-shared/services/user.service';

@Component({
  selector: 'kku-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public valid = false;

  private _user = new User(
    'KEK',
    undefined,
    undefined,
    undefined,
    'KEK@KEK.KEK',
    undefined
  );

  public get user(): User {
    return this._user;
  }

  constructor(private userService: UserService) {}

  // onUserChanged(event: FormGroup): void {
  //   const { email, username, password } = event.controls;
  //   this._user.email = email.value;
  //   this._user.username = username.value;
  //   this._user.password = password.value;
  //   this._user = new User(
  //     username.value,
  //     undefined,
  //     undefined,
  //     password.value,
  //     email.value,
  //     undefined
  //   );
  // }

  send(): void {
    if (this.valid) {
      this.userService.post(this._user);
    }
  }
}
