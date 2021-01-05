import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'kku-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input('user') userModel?: User;

  reactiveForm?: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl('kekkie', Validators.required),
      password: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  public onSubmit(): void {
    console.log(this.reactiveForm);
  }
}
