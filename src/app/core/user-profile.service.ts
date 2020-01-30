import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly userUrl = 'https://pvduc.herokuapp.com/auth/me';

  constructor(private readonly http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get(this.userUrl);
  }
}
