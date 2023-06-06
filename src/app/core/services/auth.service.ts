import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private _http: HttpClient) { }

  register(account: Account): Observable<any> {
    // this._http.post<any>('https://localhost:7094/account/register', account) 
    return this._http.post<any>('https://localhost:7094/account/register', account)

  }

  login(emailOrPhone: string, password: string, rememberMe: boolean) {
    try {
      return this._http.post<any>('https://localhost:7094/account/login', {
        email: emailOrPhone,
        password: password,
        rememberMe
      })
      
    }
    catch {

    }
  }

  logout() {
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }

  isLoggedIn() {
    var state = localStorage.getItem("accessToken");
    if (state) {
      return true;
    }
    else {
      return false;
    }
    // return (state!.length > 0)  
  }

  verifyEmailAddress() { }

  verifyPhoneNumber() { }

}