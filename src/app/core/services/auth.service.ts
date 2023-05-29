import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  login(userName: string, password: string) {
    this.loggedIn.next(true)
    this.router.navigate(['/home'])
  }

  logout() {
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }

  isLoggedIn() {
    return this.loggedIn.getValue();
  }
}
