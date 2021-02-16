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

  constructor(private service: LancamentoService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar()  {
    debugger
      this.service.pesquisar()
        .subscribe((res: {}) => {
          this.lancamentos = res;
          console.log(this.lancamentos)
        })
  }
}
