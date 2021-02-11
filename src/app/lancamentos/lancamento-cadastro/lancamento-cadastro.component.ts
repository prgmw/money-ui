import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  opcoes = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'},
  ]

  categorias = [
    {label: 'Alimentação', value: '1'},
    {label: 'Transporte', value: '2'},
  ]

  pessoas = [
    {label: 'João da Silva', value: '1'},
    {label: 'Maria Sebastiana', value: '2'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
