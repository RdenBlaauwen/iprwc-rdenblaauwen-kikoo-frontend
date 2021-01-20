import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/order';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  public orders: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(private apiInterface: ApiInterfaceService) {}
}
