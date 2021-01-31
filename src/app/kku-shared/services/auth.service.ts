import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Credentials, BackendUser } from '../models/user';
import { environment } from '../../../environments/environment';
import { Status, NotificationService, Duration } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public resourceOwner: BehaviorSubject<BackendUser | null> = new BehaviorSubject<BackendUser | null>(
    null
  );

  //TODO: turns this into an observable so code can react to changes
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

    return headers;
  }

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  public authorize(credentials: Credentials): Observable<BackendUser> {
    const notification = this.notificationService.create(
      'In aan het loggen...',
      Status.PROCESSING
    );

    const process = new Observable<BackendUser>((subscriber) => {
      try {
        this.http
          .post<{ user: BackendUser; token: string }>(
            `${environment.API_URL}/user/authenticate`,
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
      notification.update(
        `Ingelogd als '${user.username}'`,
        Status.SUCCESS,
        Duration.SHORT
      );
    });

    return subject;
  }

  public logout(): void {
    this._authToken = '';
    this.resourceOwner.next(null);
  }
}
