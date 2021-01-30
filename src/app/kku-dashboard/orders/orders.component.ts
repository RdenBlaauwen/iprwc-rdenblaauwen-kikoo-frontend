import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, onErrorResumeNext, Subject } from 'rxjs';
import {
  BackendOrder,
  Order,
  OrderProduct,
} from 'src/app/kku-shared/models/order';
import { OrderService } from 'src/app/kku-shared/services/order.service';

@Component({
  selector: 'kku-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  public get orders(): BehaviorSubject<BackendOrder[]> {
    return this.orderService.agent.entities;
  }

  constructor(private orderService: OrderService) {
    this.orderService.agent.retrieve();
  }
}
