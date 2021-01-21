import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FrontendUser } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_URL = 'user';

  public users: BehaviorSubject<FrontendUser[]> = new BehaviorSubject<
    FrontendUser[]
  >([]);

  constructor(private apiInterface: ApiInterfaceService) {}

  public post(user: FrontendUser): Subject<FrontendUser> {
    const subject = this.apiInterface.post<FrontendUser>(this.API_URL, user);

    subject.subscribe((data) => {
      const users = this.users.value;
      users.push(data);
      this.users.next(users);
    });
    return subject;
  }
}
