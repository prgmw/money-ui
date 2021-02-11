import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao : 'Compra de pão', dataVencimento: new Date(), dataPagamento: new Date(), valor: 150},
    {tipo: 'DESPESA', descricao : 'Compra de bolo', dataVencimento: new Date(), dataPagamento: new Date(), valor: 80},
    {tipo: 'DESPESA', descricao : 'Compra de cachaça', dataVencimento: new Date(), dataPagamento: new Date(), valor: 70},
    {tipo: 'DESPESA', descricao : 'Compra de pão de queijo', dataVencimento: new Date(), dataPagamento: new Date(), valor: 600},
    {tipo: 'DESPESA', descricao : 'Compra de pipoca', dataVencimento: new Date(), dataPagamento: new Date(), valor: 30020},
    {tipo: 'DESPESA', descricao : 'Compra de cerveja', dataVencimento: new Date(), dataPagamento: new Date(), valor: 3066},
    {tipo: 'DESPESA', descricao : 'Compra de bala', dataVencimento: new Date(), dataPagamento: new Date(), valor: 300},
    {tipo: 'DESPESA', descricao : 'Compra de tapioca', dataVencimento: new Date(), dataPagamento: new Date(), valor: 30}
  ];
}
