import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kku-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  onSubmit(): void {
    console.log('submitted');
  }
}
