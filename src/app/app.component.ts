import { Component, OnInit } from '@angular/core';
import {
  BackendCustomer,
  Customer,
  FrontendCustomer,
} from './kku-shared/models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private customer: Customer = new FrontendCustomer();
  log(event: any): void {
    console.log(event);
  }
  ngOnInit(): void {
    console.log('customerObject: ', this.customer);
  }
}
