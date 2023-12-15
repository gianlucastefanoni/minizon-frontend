import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IClient } from './IClient';
import { IAdmin } from './IAdmin';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  login(user: IClient): Observable<any> {
    return this.postRequest('/api/Login', user);
  }

  register(user: IClient): Observable<any> {
    return this.postRequest('/api/Register', user);
  }

  loginAdmin(user: IAdmin): Observable<any> {
    return this.postRequest('/api/admin/Login', user);
  }

  createAdmin(user: IAdmin): Observable<any> {
    return this.postRequest('/api/admin/CreateAdmin', user);
  }

  postRequest(url: string, object: any) {
    return this.http
      .post(url, object, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body;
          } else {
            return throwError('Unexpected status code');
          }
        }),
        catchError((error) => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  getRequest(url: string) {
    return this.http
      .get(url, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        responseType: 'text',
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body;
          } else {
            return throwError('Unexpected status code');
          }
        }),
        catchError((error) => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  deleteRequest(url: string) {
    {
      return this.http
        .delete(url, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          responseType: 'text',
          observe: 'response',
        })
        .pipe(
          map((response: HttpResponse<any>) => {
            if (response.status === 200) {
              return response.body;
            } else {
              return throwError('Unexpected status code');
            }
          }),
          catchError((error) => {
            console.error('Error:', error);
            return throwError(error);
          })
        );
    }
  }

  
  isGuest(): boolean {
    return !(localStorage.getItem('logged') === '' || localStorage.getItem('logged') === null);
  }
  isAdmin(): boolean {
    return localStorage.getItem('admin') !== '' && localStorage.getItem('admin') !== null;
  }
}
