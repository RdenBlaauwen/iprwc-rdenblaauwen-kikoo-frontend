import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'product';

  private _products: BehaviorSubject<Product[] | null> = new BehaviorSubject<
    Product[] | null
  >(null);

  // when component accesses (presumably to subscribe to) the products subject,
  // automatically GET products if the service hasn't done so already
  public get products(): BehaviorSubject<Product[] | null> {
    if (!this._products.value) {
      this.get();
    }

    return this._products;
  }

  constructor(private apiInterface: ApiInterfaceService) {}

  public get(): Subject<Product[]> {
    const subject = this.apiInterface.get<Product[]>(this.API_URL);

    subject.subscribe((products) => {
      this._products.next(products);
      subject.complete();
    });

    return subject;
  }
}
