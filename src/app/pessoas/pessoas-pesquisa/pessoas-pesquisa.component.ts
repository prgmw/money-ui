import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})


export class PessoasPesquisaComponent {

  pessoas : any = [];
  nome: string;

  page: string;
  size: string;

  constructor(private service: PessoaService) {}

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
      nome: this.nome
    }

    const paginacao = {
      page : this.page ? this.page : "0",
      size: this.size ? this.size : "5"
    };

    this.service.pesquisar(filtro, paginacao)
      .subscribe((res: {}) => {
        this.pessoas = res;
      })
  }

}
