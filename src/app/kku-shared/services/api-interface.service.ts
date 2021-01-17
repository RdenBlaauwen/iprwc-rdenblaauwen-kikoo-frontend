import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiInterfaceService {
  private API_URL = 'http://localhost:8080/api';

  private path(pathPart: string): string {
    return `${this.API_URL}/${pathPart}`;
  }

  private get headers(): HttpHeaders {
    const headers = new HttpHeaders();

    if (this.authService.isAuthenticated) {
      headers.set('Authorization', 'Bearer ' + this.authService.authToken);
    }

    return headers;
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  public get<T>(pathPart: string): Observable<T> {
    return this.http.get<T>(this.path(pathPart), { headers: this.headers });
  }

  public post<T>(pathPart: string, data: T): Observable<T> {
    return this.http.post<T>(this.path(pathPart), data, {
      headers: this.headers,
    });
  }

  public patch<T>(pathPart: string, data: T): Observable<T> {
    return this.http.patch<T>(this.path(pathPart), data, {
      headers: this.headers,
    });
  }

  public delete<T>(pathPart: string): Observable<any> {
    return this.http.delete<T>(this.path(pathPart), {
      headers: this.headers,
    });
  }
}
