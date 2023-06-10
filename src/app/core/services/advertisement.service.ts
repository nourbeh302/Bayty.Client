import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { Advertisement } from '../models/Advertisement';
import { PostAdvertisement } from '../models/PostAdvertisement';
import { environment } from 'src/environments/environment';

const API = `${environment.url}/ad/advertisement`

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private advertisements = new Observable<Advertisement[]>

  constructor(private router: Router, private _http: HttpClient) { }

  getSingle(advertisementId: number) {
    this._http.get<any>(`${API}/${advertisementId}`)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }

  getAll() {
    this.advertisements = this._http.get<Advertisement[]>(`${API}`)
    return this.advertisements
  }

  post(advertisement: PostAdvertisement) {
    return this._http.post<any>(`${API}/addAdvertisement`, advertisement)
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