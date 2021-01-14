import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Credentials, User } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
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

  // public authorize(credentials: Credentials): Observable<User> {
  //   return new Observable((subscriber) => {
  //     try {
  //       this.apiInterface
  //         .post<{ credentials: User; token: string }>(this.API_URL, credentials)
  //         .subscribe((auth) => {
  //           console.log('auth retreived:', auth);
  //           // this._authToken = auth.token;
  //           // this.me.next(auth.user);
  //           // subscriber.next(auth.user);
  //         });
  //     } catch (error) {
  //       subscriber.error(error);
  //     }
  //   });
  // }

  // public authorize(credentials: Credentials): Observable<User> {
  //   const process = new Observable<User>((subscriber) => {
  //     try {
  //       this.apiInterface
  //         .post<{ user: User; token: string }>(this.API_URL, credentials)
  //         .subscribe((auth) => {
  //           this._authToken = auth.token;
  //           subscriber.next(auth.user);
  //         });
  //     } catch (error) {
  //       subscriber.error(error);
  //     }
  //   });

  //   process.subscribe((user) => {
  //     this.me.next(user);
  //   });

  //   return process;
  // }

  public authorize(credentials: Credentials): Observable<User> {
    const process = new Observable<User>((subscriber) => {
      try {
        this.apiInterface
          .post<{ user: User; token: string }>(this.API_URL, credentials)
          .subscribe((auth) => {
            this._authToken = auth.token;
            subscriber.next(auth.user);
          });
      } catch (error) {
        subscriber.error(error);
      }
    });

    const subject = new Subject<User>();

    process.subscribe(subject);

    subject.subscribe((user) => {
      this.me.next(user);
    });

    return subject;
  }
}
