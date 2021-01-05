import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _user = new User(
    'baba',
    undefined,
    undefined,
    undefined,
    'r@r.nl',
    undefined
  );

  public get user(): User {
    return this._user;
  }

  log(event: any): void {
    console.log(event);
  }

  onUserChanged(event: FormGroup): void {
    const { email, username, password } = event.controls;
    this._user.email = email.value;
    this._user.username = username.value;
    this._user.password = password.value;
    this._user = new User(
      username.value,
      undefined,
      undefined,
      password.value,
      email.value,
      undefined
    );
    this.log(event);
  }
}
