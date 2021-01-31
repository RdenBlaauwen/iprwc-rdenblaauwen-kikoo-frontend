import { Component } from '@angular/core';
import { FrontendCustomer } from 'src/app/kku-shared/models/customer';

@Component({
  selector: 'kku-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  public customer = new FrontendCustomer();

  public onSave(): void {
    console.log(this.customer);
  }
}
