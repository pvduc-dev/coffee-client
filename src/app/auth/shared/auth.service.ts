import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from './login.dto';
import {Observable} from 'rxjs';
import {JwtPayload} from './jwt-payload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = 'https://pvduc.herokuapp.com/api/v1/auth/login';

  constructor(private readonly http: HttpClient) { }

  public login(loginDto: LoginDto): Observable<JwtPayload> {
    return this.http.post<JwtPayload>(this.loginUrl, loginDto);
  }

  public async storingToken(token: string): Promise<void> {
    localStorage.setItem('access_token', token);
  }
}
