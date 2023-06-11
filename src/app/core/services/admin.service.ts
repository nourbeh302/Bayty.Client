import { Injectable } from '@angular/core';
import { CreateEnterprise } from '../models/CreateEnterprise';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = `${environment.url}/enterprise`

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router, private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${API}/getListOfEnterprises`)
  }

  createEnterprise(enterprise: CreateEnterprise) {
    return this.http.post<any>('https://localhost:7094/enterprise', enterprise)
  }

  approveEnterprise(enterprise: CreateEnterprise) {
    this.http.put<any>('https://localhost:7094/enterprise', enterprise)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }

  rejectEnterprise(enterprise: CreateEnterprise) {
    this.http.put<any>('https://localhost:7094/enterprise', enterprise)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }

}
