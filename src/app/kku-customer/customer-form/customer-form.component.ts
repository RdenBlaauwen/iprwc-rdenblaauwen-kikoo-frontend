import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer, FrontendCustomer } from 'src/app/kku-shared/models/customer';

@Component({
  selector: 'kku-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent {
  @Input() customer: Customer = new FrontendCustomer();
  @Output('kku-change')
  kkuChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  onChange(): void {
    this.kkuChange.emit(this.customer);
  }
}
