import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { Advertisement } from '../models/Advertisement';
import { PostAdvertisement } from '../models/PostAdvertisement';
import { environment } from 'src/environments/environment';
import { PropertyType } from '../enums/PropertyType';
import { OrderDirectionPrice } from '../enums/OrderDirectionPrice';

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
    this.advertisements = this._http.get<Advertisement[]>(`${API}/getAll`)
    return this.advertisements
  }

  post(advertisement: FormData) {
    var accessToken = localStorage.getItem('accessToken')
    var refreshToken = localStorage.getItem('refreshToken')!

    var headers = new HttpHeaders()
      // .set('Content-Type', 'multipart/form-data')
      .set('authorization', `Bearer ${accessToken}`)
      .set('refresh-token', refreshToken)

    console.log(headers);

    return this._http.post<any>(`${API}/addAdvertisement`, advertisement, { headers: headers })
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
    // var headers = new HttpHeaders()
    //   .append('Page-Size', '5')
    //   .append('Page-Number', '1')

    return this._http.get<any>(`${API}/searchAdvertisement`, {
      headers: new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Page-Size', '5')
        .set('Page-Number', '1')
    })

    /* 
        public string? City { get; set; }
        public double? MinPrice { get; set; }
        public double? MaxPrice { get; set; }
        public PropertyType? PropertyType { get; set; }
        public bool? IsRent { get; set; }
        public double? maxArea { get; set; }
        public double? minArea { get; set; }
        public OrderDirectionPrice Order { get; set; }
    */

  }
  searchAdvertisement(
    pageSize: number,
    pageNumber: number,
    city: string | null = null,
    minPrice: number | null = null,
    maxPrice: number | null = null,
    propertyType: PropertyType | null = null,
    isRent: boolean | null = null,
    maxArea: number | null = null,
    minArea: number | null = null,
    orderDirectionPrice: OrderDirectionPrice | null = null
  ) {
    var headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('page-size', '2')
      .set('page-number', '3')

    console.log(headers);


    const queryString: string[] = []

    if (city)
      queryString.push(`city=${city}`)

    if (minPrice)
      queryString.push(`minPrice=${minPrice}`)

    if (maxPrice)
      queryString.push(`maxPrice=${maxPrice}`)

    if (propertyType)
      queryString.push(`propertyType=${propertyType}`)

    if (isRent)
      queryString.push(`isRent=${isRent}`)

    if (maxArea)
      queryString.push(`maxArea=${maxArea}`)

    if (minArea)
      queryString.push(`minArea=${minArea}`)

    if (orderDirectionPrice)
      queryString.push(`orderDirectionPrice=${orderDirectionPrice}`)

    return this._http.get(`${API}/searchAdvertisement?${queryString.join("&")}`, { headers })
  }

  addToFavorites() {

  }

}