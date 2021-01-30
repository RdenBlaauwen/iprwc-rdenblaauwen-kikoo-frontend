import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendCustomer, FrontendCustomer } from '../models/customer';
import { EntityAgent } from './entity-agent';
import { Duration, NotificationService, Status } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  public agent: EntityAgent<FrontendCustomer, BackendCustomer>;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.agent = new EntityAgent<FrontendCustomer, BackendCustomer>(
      http,
      'customer'
    );
  }

  public update(customer: BackendCustomer): Subject<BackendCustomer> {
    const notification = this.notificationService.create(
      'Klant aan het updaten...',
      Status.PROCESSING
    );

    const subject = this.agent.update(customer);

    subject.subscribe({
      next: () => {
        notification.update(`Klant geupdatet!`, Status.SUCCESS, Duration.SHORT);
      },
      error: () => {
        notification.update(
          `Er is iets mis gegaan`,
          Status.ERROR,
          Duration.LONG
        );
      },
    });

    return subject;
  }

  public delete(customer: BackendCustomer): Subject<BackendCustomer> {
    const notification = this.notificationService.create(
      'Klant aan het verwijderen...',
      Status.PROCESSING
    );

    const subject = this.agent.delete(customer);

    subject.subscribe({
      next: () => {
        notification.update(
          `Klant verwijderd!`,
          Status.SUCCESS,
          Duration.SHORT
        );
      },
      error: () => {
        notification.update(
          `Er is iets mis gegaan`,
          Status.ERROR,
          Duration.LONG
        );
      },
    });

    return subject;
  }
}
