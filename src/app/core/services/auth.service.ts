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
  private API = 'http://localhost:5034/account'

  constructor(private router: Router, private http: HttpClient) { }

  register(account: Account): Observable<any> {
    // this.http.post<any>('http://localhost:5034/account/register', account) 
    return this.http.post<any>(`${this.API}/register`, account)
  }

  async login(emailOrPhone: string, password: string, rememberMe: boolean) {

    this.loggedIn.next(true)

    try {
      const response = await this.http.post<any>(`${this.API}/login`, {
        email: emailOrPhone,
        password,
        rememberMe
      }).subscribe((next) => this.saveCredentials(next));
      return 200;
    } catch (error: any) {
      if (error.status === 400)
        return 400;
      return 500;
    }

    return this.http.post<any>(`${this.API}/login`, {
      email: emailOrPhone,
      password: password,
      rememberMe
    }).subscribe(next => {
      this.saveCredentials(next)
      console.log(next['status'])
    }, error => console.log(error['status']))
  }

  logout() {
    this.loggedIn.next(false)
    this.clearCredentials()
    this.router.navigate(['/login'])
  }

  isLoggedIn() {
    return this.loggedIn
  }

  verifyEmailAddress() { }

  verifyPhoneNumber() { }

  saveCredentials(next: any) {
    localStorage.setItem("accessToken", next["accessToken"]);
    localStorage.setItem("accessTokenLifeTime", next["accessTokenLifeTime"]);
    localStorage.setItem("isAuthenticated", next["isAuthenticated"]);
    localStorage.setItem("refreshToken", next["refreshToken"]);
    localStorage.setItem("refreshTokenLifeTime", next["refreshTokenLifeTime"]);
  }

  clearCredentials() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessTokenLifeTime");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshTokenLifeTime");
  }

}