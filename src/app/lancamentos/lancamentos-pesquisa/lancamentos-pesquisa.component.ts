import { LancamentoService, Paginacao } from './../lancamento.service';
import { Component } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})

export class LancamentosPesquisaComponent {

  lancamentos : any = [];
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  page: string;
  size: string;

  constructor(private service: LancamentoService) {}

  ngOnInit() {
    this.pesquisar()
  }

  pesquisarPaginacao(paginacao : any) {
    this.page = paginacao.page;
    this.size = paginacao.size;

    this.pesquisar()
  }

  pesquisar()  {

    const filtro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    }

    const paginacao = {
      page : this.page ? this.page : "0",
      size: this.size ? this.size : "5"
    };

    this.service.pesquisar(filtro, paginacao)
      .subscribe((res: {}) => {
        this.lancamentos = res;
      })
  }
}
