import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/api/';

  constructor(
    private httpClient: HttpClient
  ) { }

  buildUrl(url: string): string {
    return `${this.BASE_URL}${url}`;
  }

  private mergeHeaders(): HttpHeaders {
    const token = 'ABC';
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    } else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }
  }

  get<T>(url: string, params?: any): Observable<T> {
    const mergedHeaders = this.mergeHeaders();
    return this.httpClient.get<T>(this.buildUrl(url), { headers: mergedHeaders, params });
  }

  post<T>(url: string, body: any): Observable<T> {
    const mergedHeaders = this.mergeHeaders();
    return this.httpClient.post<T>(this.buildUrl(url), body, { headers: mergedHeaders });
  }

  put<T>(url: string, body: any): Observable<T> {
    const mergedHeaders = this.mergeHeaders();
    return this.httpClient.put<T>(this.buildUrl(url), body, { headers: mergedHeaders });
  }

  patch<T>(url: string, body: any): Observable<T> {
    const mergedHeaders = this.mergeHeaders();
    return this.httpClient.put<T>(this.buildUrl(url), body, { headers: mergedHeaders });
  }

  delete<T>(url: string): Observable<T> {
    const mergedHeaders = this.mergeHeaders();
    return this.httpClient.delete<T>(this.buildUrl(url), { headers: mergedHeaders });
  }
}
