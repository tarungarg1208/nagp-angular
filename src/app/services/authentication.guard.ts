import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {
    const session = localStorage.getItem('session');
    if (session) {
      //VALID SESSION
    }
  }

  canActivate(): boolean {
    if (this.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  loggedIn() {
    return !!localStorage.getItem('session');
  }

  login(username: string, password: string) {
    if (this.validateUserCredentials(username, password)) {
      localStorage.setItem("session", username);
      return true;
    } else {
      return false;
    }
  }

  validateUserCredentials(username: string, password: string) {
    if (username == 'tarun' || password == 'tarun') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    //Removing session from local storage
    localStorage.removeItem('session');
    this.router.navigate(['/login']);
  }

}
