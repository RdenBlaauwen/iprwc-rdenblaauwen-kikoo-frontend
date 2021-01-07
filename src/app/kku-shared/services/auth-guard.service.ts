import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private API_URL = 'user/authorize';

  public me = new Subject<User>();

  public get authToken(): string {
    return 'kek';
  }

  private set _authToken(token: string) {
    console.log(token);
  }

  constructor(private apiInterface: ApiInterfaceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return !!this.authToken;
  }

  // public authorize(user: User): Observable<{ user: User; token: string }> {
  //   return this.http.post<{ user: User; token: string }>(this.API_URL, user);
  // }

  public authorize(user: User): Observable<User> {
    return new Observable((subscriber) => {
      this.apiInterface
        .post<{ user: User; token: string }>(this.API_URL, user)
        .subscribe((auth) => {
          this._authToken = auth.token;
          this.me.next(auth.user);
          subscriber.next(auth.user);
        });
    });
  }
}
