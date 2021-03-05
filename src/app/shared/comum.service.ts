import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComumService {

  constructor() { }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic cGF1bG9AYWxnYS5jb20uYnI6cGF1bG8='
    })
  }

  processError(err: any) {
      let message = '';
      if(err.error instanceof ErrorEvent) {
      message = err.error.message;
      } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
      }
      console.log(message);
      return throwError(message);
  }

}
