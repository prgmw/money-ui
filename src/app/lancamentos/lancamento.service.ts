import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';


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

export interface FiltroPesquisa {
   descricao: string,
   dataVencimentoInicio: Date;
   dataVencimentoFim: Date;
}

export interface Paginacao {
  page: string,
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private httpClient: HttpClient) { }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic cGF1bG9AYWxnYS5jb20uYnI6cGF1bG8='
    })
  }

  pesquisar(filtro : FiltroPesquisa, paginacao: Paginacao): Observable<Content> {

    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', 'Basic cGF1bG9AYWxnYS5jb20uYnI6cGF1bG8=')

    if (paginacao.page) {
      params = params.append('page', paginacao.page);
    }

    if (paginacao.size) {
      params = params.append('size', paginacao.size);
    }

    if (filtro.descricao) {
       params = params.append('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoInicio', moment(filtro.dataVencimentoInicio).format('DD-MM-YYYY'));
    }

    if (filtro.descricao) {
      params = params.append('dataVencimentoFim', moment(filtro.dataVencimentoFim).format('DD-MM-YYYY'));
    }

    return this.httpClient.get<Content>(`${this.lancamentosUrl}`, { headers , params})
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
