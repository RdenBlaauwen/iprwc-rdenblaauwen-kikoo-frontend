import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/kku-shared/models/user';
import { AuthService } from 'src/app/kku-shared/services/auth.service';

@Component({
  selector: 'kku-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  private credentials: Credentials = { username: '', password: '' };

  public form = new FormGroup({
    username: new FormControl(
      this.credentials && this.credentials.username,
      Validators.required
    ),
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.required,
    ]),
  });

  get valid() {
    return this.form.valid;
  }

  constructor(private authService: AuthService) {
    this.form.valueChanges.subscribe((userData) => {
      this.credentials.username = userData.username;
      this.credentials.password = userData.password;
    });
  }

  send(): void {
    if (!this.form.valid) {
      return;
    }
    this.authService.authorize(this.credentials).subscribe((data) => {
      console.log(data);
    });
    // this.authService.authorize(this.credentials);
  }
}
