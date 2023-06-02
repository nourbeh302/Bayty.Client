import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private router: Router, private _http: HttpClient) { }

  sendMessage(message: Message) {
    this._http.post<any>('https://localhost:7094/chat', message)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }
}
