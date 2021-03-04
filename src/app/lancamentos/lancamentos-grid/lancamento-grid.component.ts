import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lancamento-grid',
  templateUrl: './lancamento-grid.component.html',
  styleUrls: ['./lancamento-grid.component.css']
})
export class LancamentoGridComponent {

  @Input() lancamentos: any;
  @Output() pesquisarPaginacao = new EventEmitter();


  carregar(event: LazyLoadEvent) {

    let page = event.first && event.rows ? (event.first / event.rows) : undefined;
    let size = event.rows;

    const pagination = { "page" : page, "size" : size };
    this.pesquisarPaginacao.emit(pagination);
  }

}
