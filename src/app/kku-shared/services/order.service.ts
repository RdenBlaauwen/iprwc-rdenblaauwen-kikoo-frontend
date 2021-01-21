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
        //TODO: implement mapping
        return rawOrder;
      })
    );
    subject.subscribe((order) => {
      const orders = this.orders.value;
      orders.push(order);
      this.orders.next(orders);
    });

    return subject;
  }
}
