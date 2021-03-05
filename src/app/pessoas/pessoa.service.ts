import { ComumService } from '../shared/comum.service';
import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class Content {
  lancamento : Pessoa [];
  last : string;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: any;
  numberOfElements: number;
  first: string
}

export interface Pessoa {
  nome : string,
  cidade: string,
  estado: string,
  status: string
}

export interface FiltroPesquisa {
  nome: string
}

export interface Paginacao {
 page: string,
 size: string;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends ComumService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private httpClient: HttpClient) {
    super();
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

    if (filtro.nome) {
       params = params.append('nome', filtro.nome);
    }

    return this.httpClient.get<Content>(`${this.pessoasUrl}`, { headers , params})
      .pipe(
         retry(1),
         catchError(this.processError)
      )
  }


}
