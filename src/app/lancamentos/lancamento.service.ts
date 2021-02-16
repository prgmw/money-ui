import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class Content {
   lancamento : Lancamento [];
   last : string;
   totalPages: number;
   totalElements: number;
   size: number;
   number: number;
   sort: any;
   numberOfElements: number;
   first: string
}

export class Lancamento {
  codigo: string;
  descricao: string;
  dataVencimento: string;
  dataPagamento: string;
  valor: number;
  tipo: string;
  categoria: string;
  pessoa: string;
}


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic cGF1bG9AYWxnYS5jb20uYnI6cGF1bG8='
    })
  }


  pesquisar(): Observable<Content> {
    return this.httpClient.get<Content>(`${this.lancamentosUrl}?resumo`, this.httpHeader)
      .pipe(
         retry(1),
         catchError(this.processError)
      )
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
