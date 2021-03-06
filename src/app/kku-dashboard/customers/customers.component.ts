import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BackendCustomer } from 'src/app/kku-shared/models/customer';
import { CustomerService } from 'src/app/kku-shared/services/customer.service';

@Component({
  selector: 'kku-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent {
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;

  public get customers(): BehaviorSubject<BackendCustomer[]> {
    return this.service.agent.entities;
  }

  private customerBeingEdited?: BackendCustomer;

  constructor(private service: CustomerService) {
    this.service.agent.retrieve();
  }

  public swapIfEdited(customer: BackendCustomer): BackendCustomer {
    if (this.beingEdited(customer) && this.customerBeingEdited) {
      return this.customerBeingEdited;
    }
    return customer;
  }

  public beingEdited(customer: BackendCustomer): boolean {
    if (
      this.customerBeingEdited &&
      this.customerBeingEdited.id === customer.id
    ) {
      return true;
    }
    return false;
  }

  public onEdit(customer: BackendCustomer): void {
    if (
      this.customerBeingEdited &&
      this.customerBeingEdited.id === customer.id
    ) {
      this.service.update(this.customerBeingEdited).subscribe(() => {
        this.customerBeingEdited = undefined;
      });
      return;
    }
    this.customerBeingEdited = R.clone(customer);
  }

  public onDelete(customer: BackendCustomer): void {
    this.service.delete(customer);
  }
}
