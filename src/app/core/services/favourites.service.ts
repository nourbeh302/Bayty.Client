import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Favourites } from '../models/Favourites';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private _http: HttpClient) { }

  addToFavourites(fav: Favourites) {
    if(!this.loggedIn){
    this._http.post<any>(`https://localhost:7094/favourites`, fav)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
    }
  }

  getAllFavourites(){
    if(!this.loggedIn){
    this._http.get<any>(`https://localhost:7094/favourites`, )
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
    }
  }

  removeFromFavourites(fav: Favourites){
    if(!this.loggedIn){
        this._http.post<any>(`https://localhost:7094/favourites`, fav)
          .subscribe(next => {
            console.log(next);
          }, error => {
            console.log(error);
          });
        }
  }

}