import { Injectable } from '@angular/core';
import { FrontendUser } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'user';

  constructor(private apiInterface: ApiInterfaceService) {}

  public post(user: FrontendUser): void {
    this.apiInterface
      .post<FrontendUser>(this.API_URL, user)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
