import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Credentials, BackendUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public resourceOwner: BehaviorSubject<BackendUser | null> = new BehaviorSubject<BackendUser | null>(
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

  private get headers(): HttpHeaders {
    let headers = new HttpHeaders();

    if (this.isAuthenticated) {
      headers = headers.set('Authorization', 'Bearer ' + this.authToken);
    }
    console.log('extra headers:', headers);

    return headers;
  }

  constructor(private http: HttpClient) {}

  public authorize(credentials: Credentials): Observable<BackendUser> {
    const process = new Observable<BackendUser>((subscriber) => {
      try {
        this.http
          .post<{ user: BackendUser; token: string }>(
            'http://localhost:8080/api/user/authenticate',
            credentials,
            { headers: this.headers }
          )
          .subscribe((auth) => {
            this._authToken = auth.token;
            subscriber.next(auth.user);
          });
      } catch (error) {
        subscriber.error(error);
      }
    });

    const subject = new Subject<BackendUser>();

    process.subscribe(subject);

    subject.subscribe((user) => {
      this.resourceOwner.next(user);
    });

    return subject;
  }
}
