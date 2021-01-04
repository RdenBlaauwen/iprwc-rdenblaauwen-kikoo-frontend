import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../models/product';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {}

  /**
   * get
   */
  public get(): void {
    this.http.get(this.API_URL).subscribe((data) => {
      console.log(data);
    });
  }

  /**
   * post
   */
  // public post(product: Product): Observable<Product> {
  //   this.http.post(this.API_URL, product);
  // }
}
