import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer, FrontendCustomer } from 'src/app/kku-shared/models/customer';

@Component({
  selector: 'kku-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer = new FrontendCustomer();
  @Output('kku-change')
  kkuChange: EventEmitter<Customer> = new EventEmitter<Customer>();

  ngOnInit() {
    console.log(this.customer);
  }

  onChange(): void {
    this.kkuChange.emit(this.customer);
  }
}
