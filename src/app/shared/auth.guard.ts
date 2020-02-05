import { Injectable } from '@angular/core';
import {CanActivate, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router) {
  }
  async canActivate(): Promise<boolean | UrlTree> {
    if (!!localStorage.getItem('access_token')) {
      return true;
    }
    await this.router.navigateByUrl('/login');
  }
}
