import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';
import { BackendOrder, Status } from 'src/app/kku-shared/models/order';
import { OrderService } from 'src/app/kku-shared/services/order.service';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kku-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  public faPencilAlt = faPencilAlt;
  public faTrash = faTrash;

  public get orders(): BehaviorSubject<BackendOrder[]> {
    return this.orderService.agent.entities;
  }

  private orderBeingEdited?: BackendOrder;

  public get statusOptions(): Array<string> {
    const entries = Object.entries(Status).filter((key) => isNaN(Number(key)));
    return entries.map((entry) => entry[1]);
  }

  constructor(private orderService: OrderService) {
    this.orderService.agent.retrieve();
  }

  public swapIfEdited(order: BackendOrder): BackendOrder {
    if (this.beingEdited(order) && this.orderBeingEdited) {
      return this.orderBeingEdited;
    }
    return order;
  }

  public beingEdited(order: BackendOrder): boolean {
    if (this.orderBeingEdited && this.orderBeingEdited.id === order.id) {
      return true;
    }
    return false;
  }

  public onEdit(order: BackendOrder): void {
    if (this.orderBeingEdited && this.orderBeingEdited.id === order.id) {
      this.orderService.update(this.orderBeingEdited).subscribe(() => {
        this.orderBeingEdited = undefined;
      });
      return;
    }
    this.orderBeingEdited = R.clone(order);
  }

  public onDelete(order: BackendOrder): void {
    this.orderService.delete(order);
  }
}
