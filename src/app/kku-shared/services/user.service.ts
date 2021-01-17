import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'user';

  constructor(private apiInterface: ApiInterfaceService) {}

  public post(user: User): void {
    this.apiInterface.post<User>(this.API_URL, user).subscribe((data) => {
      console.log(data);
    });
  }
}
