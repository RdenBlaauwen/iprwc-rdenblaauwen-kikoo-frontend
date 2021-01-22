import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiInterfaceService {
  private API_URL = environment.API_URL;

  private path(pathPart: string): string {
    return `${this.API_URL}/${pathPart}`;
  }

  private get headers(): HttpHeaders {
    let headers = new HttpHeaders();

    if (this.authService.isAuthenticated) {
      headers = headers.set(
        'Authorization',
        'Bearer ' + this.authService.authToken
      );
    }

    return headers;
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  public get<T>(pathPart: string): Subject<T> {
    const subject = new Subject<T>();

    this.http
      .get<T>(this.path(pathPart), {
        headers: this.headers,
      })
      .subscribe(subject);

    return subject;
  }

  public post<T>(pathPart: string, data: T): Subject<T> {
    const subject = new Subject<T>();

    this.http
      .post<T>(this.path(pathPart), data, {
        headers: this.headers,
      })
      .subscribe(subject);

    return subject;
  }

  public patch<T>(pathPart: string, data: T): Subject<T> {
    const subject = new Subject<T>();
    this.http
      .patch<T>(this.path(pathPart), data, {
        headers: this.headers,
      })
      .subscribe(subject);

    return subject;
  }

  public delete<T>(pathPart: string): Subject<any> {
    const subject = new Subject<any>();

    this.http
      .delete<T>(this.path(pathPart), {
        headers: this.headers,
      })
      .subscribe(subject);

    return subject;
  }
}
