import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Credentials, User } from '../models/user';
import { ApiInterfaceService } from './api-interface.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'user/authenticate';

  private resourceOwner: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

  public get isAuthenticated(): boolean {
    return !!this.resourceOwner.value;
  }

  public get authToken(): string | null {
    return localStorage.getItem('kku-token');
  }

  private set _authToken(token: string) {
    localStorage.setItem('kku-token', token);
  }

  constructor(private apiInterface: ApiInterfaceService) {}

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
      this.resourceOwner.next(user);
      console.log('token in localStorage:', this.authToken);
    });

    return subject;
  }
}
