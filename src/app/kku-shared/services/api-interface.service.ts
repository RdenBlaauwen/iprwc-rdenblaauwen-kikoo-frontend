import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInterfaceService {
  private API_URL = 'http://localhost:8080/api';

  private path(pathPart: string): string {
    return `${this.API_URL}/${pathPart}`;
  }

  constructor(private http: HttpClient) {}

  public get<T>(pathPart: string): Observable<T> {
    return this.http.get<T>(this.path(pathPart));
  }

  public post<T>(pathPart: string, data: any): Observable<T> {
    return this.http.post<T>(this.path(pathPart), data);
  }

  public patch<T>(pathPart: string, data: any): Observable<T> {
    return this.http.patch<T>(this.path(pathPart), data);
  }

  public delete<T>(pathPart: string, data: any): Observable<any> {
    return this.http.delete<T>(this.path(pathPart), data);
  }
}
