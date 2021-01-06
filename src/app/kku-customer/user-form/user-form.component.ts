import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/kku-shared/models/user';

enum AbstractControlStatus {
  VALID = 'VALID',
  INVALID = 'INVALID',
  PENDING = 'PENDING',
  DISABLED = 'DISABLED',
}

@Component({
  selector: 'kku-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  private _user?: User;
  @Input('user') set user(model: User) {
    this._user = model;
    this.updateForm(model);
  }

  @Input('autoUpdate') autoUpdate = false;

  @Output() onChange = new EventEmitter<FormGroup>();
  @Output() onChangeWhileValid = new EventEmitter<FormGroup>();

  form: FormGroup = new FormGroup({});
  get formInitialized(): boolean {
    return Object.keys(this.form.controls).length > 0;
  }

  ngOnInit(): void {
    this.form = this.buildForm(this._user);

    this.form.valueChanges.subscribe((userData) => {
      if (this.autoUpdate) {
        this.updateUserModel(userData);
      }
      this.onChange.emit(this.form);
      if (this.form.valid) {
        this.onChangeWhileValid.emit(this.form);
      }
    });
  }

  private buildForm(user: User | undefined): FormGroup {
    return new FormGroup({
      username: new FormControl(user && user.username, Validators.required),
      password: new FormControl(null, Validators.minLength(8)),
      email: new FormControl(user && user.email, Validators.email),
    });
  }

  private updateForm(user: User): void {
    if (!this.formInitialized) {
      return;
    }
    this.form.controls.email.setValue(user.email || null);
    this.form.controls.username.setValue(user.username || null);
    this.form.controls.password.setValue(user.password || null);
  }

  private updateUserModel({
    email,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
  }): void {
    if (!this._user) {
      return;
    }
    this._user.email = email;
    this._user.username = username;
    this._user.password = password;
  }
}
