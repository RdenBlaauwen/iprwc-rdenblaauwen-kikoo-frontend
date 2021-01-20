import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/kku-shared/models/customer';

@Component({
  selector: 'kku-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  @Input() customer?: Customer;
}
