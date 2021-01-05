import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  log(event: any): void {
    console.log(event);
  }
}
