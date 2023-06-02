import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { Advertisment } from '../models/Advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private _http: HttpClient) { }

  getSingle(advertisementId: number) {
    this._http.get<any>(`https://localhost:7094/advertisement/${advertisementId}`)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  getAll() {
    this._http.get<any>(`https://localhost:7094/advertisement/`)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  post(advertisement: Advertisment) {
    this._http.post<any>('https://localhost:7094/advertisement', advertisement)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  delete(advertisementId: number) {
    this._http.delete<any>(`https://localhost:7094/advertisement/${advertisementId}`)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  update() {

  }

  getRange() {

  }

  addToFavorites() {

  }

}