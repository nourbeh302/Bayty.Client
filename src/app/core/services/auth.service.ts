import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Account } from '../models/Account';

const API = `${environment.url}/account`

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor(private router: Router, private http: HttpClient) { }

  register(account: Account): Observable<any> {
    return this.http.post<any>(`${API}/register`, account)
  }

  login(emailOrPhone: string, password: string, rememberMe: boolean): Observable<any> {
    this.isLoggedIn = true;
    const body = { email: emailOrPhone, password, rememberMe };
    return this.http.post(`${API}/verifyPhoneNumber`, body)
  }

  logout() {
    this.isLoggedIn = false;
    this.clearCredentials()
    this.router.navigate(['/login'])
  }

  getIsLoggedIn() {
    var localStorageCredentials = localStorage.getItem("accessToken");
    if (localStorageCredentials) {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false
    }
    return this.isLoggedIn
  }

  askForPhoneNumberVerification() {
    var userId = localStorage.getItem("userId");
    return this.http.get<any>(`${API}/askForPhoneNumberVerification/${userId}`)
  }

  sendOTPCode() {
    var refreshToken = localStorage.getItem("refreshToken");
    var userId = localStorage.getItem("userId");
    
    return this.http.post<any>(`${API}/verifyPhoneNumber`, { refreshToken, userId })
  }

  verifyPhoneNumber() { }

  saveCredentials(next: any) {
    localStorage.setItem("accessToken", next["accessToken"]);
    localStorage.setItem("accessTokenLifeTime", next["accessTokenLifeTime"]);
    localStorage.setItem("isAuthenticated", next["isAuthenticated"]);
    localStorage.setItem("refreshToken", next["refreshToken"]);
    localStorage.setItem("refreshTokenLifeTime", next["refreshTokenLifeTime"]);
    localStorage.setItem("userId", next["userId"]);
  }

  clearCredentials() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessTokenLifeTime");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshTokenLifeTime");
    localStorage.removeItem("userId");
  }

}