import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private _http: HttpClient) { }

  register(user: User) {
    this._http.post<any>('https://localhost:7094/account/register', user)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }
  
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