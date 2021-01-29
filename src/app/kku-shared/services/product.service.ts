import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendProduct, FrontendProduct } from '../models/product';
import { EntityAgent } from './entity-agent';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public agent: EntityAgent<FrontendProduct, BackendProduct>;

  constructor(private http: HttpClient) {
    this.agent = new EntityAgent<FrontendProduct, BackendProduct>(
      http,
      'product',
      true
    );
  }
}
