import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ProdutoComponent } from './produto/produto.component'
import { ProdutoCifraoComponent } from './produto-cifrao/produto-cifrao.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoCifraoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProdutoComponent]
})
export class AppModule { }
