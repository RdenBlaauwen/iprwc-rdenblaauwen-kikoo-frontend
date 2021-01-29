import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BackendOrder, FrontendOrder } from '../models/order';
import { EntityAgent } from './entity-agent';
import { Status, NotificationService, Duration } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public agent: EntityAgent<FrontendOrder, BackendOrder>;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.agent = new EntityAgent<FrontendOrder, BackendOrder>(http, 'order');
  }

  public post(order: FrontendOrder): Subject<BackendOrder> {
    const notification = this.notificationService.create(
      'Bestelling aan het verwerken...',
      Status.PROCESSING
    );

    const subject = this.agent.add(order);

    subject.subscribe({
      next: () => {
        notification.update(
          `Bestelling geplaatst`,
          Status.SUCCESS,
          Duration.LONG
        );
      },
    });

    return subject;
  }
}
