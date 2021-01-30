import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendProduct, FrontendProduct } from '../models/product';
import { EntityAgent } from './entity-agent';
import { Duration, NotificationService, Status } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public agent: EntityAgent<FrontendProduct, BackendProduct>;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.agent = new EntityAgent<FrontendProduct, BackendProduct>(
      http,
      'product',
      true
    );
  }

  public update(product: BackendProduct): Subject<BackendProduct> {
    const notification = this.notificationService.create(
      'Product aan het updaten...',
      Status.PROCESSING
    );

    const subject = this.agent.update(product);

    subject.subscribe({
      next: () => {
        notification.update(
          `Product geupdatet!`,
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

  public delete(product: BackendProduct): Subject<BackendProduct> {
    const notification = this.notificationService.create(
      'Product aan het updaten...',
      Status.PROCESSING
    );

    const subject = this.agent.delete(product);

    subject.subscribe({
      next: () => {
        notification.update(
          `Product geupdatet!`,
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
