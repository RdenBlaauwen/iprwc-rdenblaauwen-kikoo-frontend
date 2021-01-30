import { Component, OnInit } from '@angular/core';
import { onErrorResumeNext } from 'rxjs';
import { Order, OrderProduct } from 'src/app/kku-shared/models/order';
import { OrderService } from 'src/app/kku-shared/services/order.service';

@Component({
  selector: 'kku-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  public orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.agent.retrieve();
    this.orderService.agent.entities.subscribe((orders) => {
      this.orders = orders;
      console.log(orders);
      // orders.forEach((order) => {
      //   order.orderProducts.forEach((orderProduct) => {
      //     console.log(orderProduct.totalPriceFormatted);
      //   });
      // });
    });
  }
}
