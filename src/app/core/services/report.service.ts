import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Report } from '../models/Report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private router: Router, private _http: HttpClient) { }

  reportUser(report: Report) {
    this._http.post<any>('https://localhost:7094/report', report)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }
}
