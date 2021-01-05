import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  public post(user: User): void {
    this.http.post(this.API_URL, user).subscribe((data) => {
      console.log(data);
    });
  }
}
