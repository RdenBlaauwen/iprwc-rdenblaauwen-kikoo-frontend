import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendOrder, FrontendOrder, Order } from '../models/order';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private API_URL = 'order';
  public orders: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(private apiInterface: ApiInterfaceService) {}

  public post(order: FrontendOrder): Subject<Order> {
    const subject = this.apiInterface.post<Order>(this.API_URL, order);
    subject.pipe(
      map((rawOrder) => {
        rawOrder.kek = 'KUK';
        return rawOrder;
      })
    );
    subject.subscribe((backendOrder) => {
      console.log(backendOrder);
    });

    return subject;
  }
}
