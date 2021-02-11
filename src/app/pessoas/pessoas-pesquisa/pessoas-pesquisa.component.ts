import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome : 'Paulo Medeiros', cidade: 'Campinas', estado: 'SP', status: 'true' },
    {nome : 'Maria', cidade: 'Limeira', estado: 'SP', status: 'true' },
    {nome : 'João', cidade: 'Campinas', estado: 'SP', status: 'false' },
    {nome : 'Antonio', cidade: 'Piracicaba', estado: 'SP', status: 'false' },
    {nome : 'Sandra', cidade: 'Bauru', estado: 'SP', status: 'true' },
  ]

}
