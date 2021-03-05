import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.css']
})
export class PessoasGridComponent {

  @Input() pessoas: any;
  @Output() pesquisarPaginacao = new EventEmitter();


  carregar(event: LazyLoadEvent) {

    let page = event.first && event.rows ? (event.first / event.rows) : undefined;
    let size = event.rows;

    const pagination = { "page" : page, "size" : size };
    this.pesquisarPaginacao.emit(pagination);
  }

}
