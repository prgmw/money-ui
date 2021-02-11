import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoasModule } from './pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
