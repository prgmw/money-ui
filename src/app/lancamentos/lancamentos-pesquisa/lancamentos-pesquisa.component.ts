import { LancamentoService } from './../lancamento.service';
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

  constructor(private service: LancamentoService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar()  {

    const filtro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    }

      this.service.pesquisar(filtro)
        .subscribe((res: {}) => {
          this.lancamentos = res;
          console.log(this.lancamentos)
        })
  }
}
