import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly usersUrl = 'https://pvduc.herokuapp.com/api/v1/users';

  constructor(private readonly http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.usersUrl).pipe(catchError(err => throwError(err.message)));
  }
}
