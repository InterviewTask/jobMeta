import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {

    return this.http.get<T>(`${environment.apiUrl}${path}`, {
      params,
    });
  }

  put<T>(path: string, body = {}): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}${path}`, body);
  }

  post<T>(path: string, body = {}, options = {}): Observable<T> {
    return this.http.post<T>(
      `${environment.apiUrl}${path}`,
      body,
      options
    );
  }

  delete<T>(path: string, options = {}): Observable<T> {
    return this.http.delete<T>(
      `${environment.apiUrl}${path}`,
      options
    );
  }
}
