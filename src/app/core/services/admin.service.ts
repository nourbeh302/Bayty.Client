import { Injectable } from '@angular/core';
import { Enterprise } from '../models/Enterprise';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router, private _http: HttpClient) { }

  approveEnterprise(enterprise: Enterprise) {
    this._http.put<any>('https://localhost:7094/enterprise', enterprise)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }

  rejectEnterprise(enterprise: Enterprise) {
    this._http.put<any>('https://localhost:7094/enterprise', enterprise)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }

}
