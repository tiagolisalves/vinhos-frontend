import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'   
import { FormsModule } from '@angular/forms'
import { VinhoFormComponent } from './vinho/vinho-form/vinho-form.component'


@NgModule({
  declarations: [
    // ProdutoComponent,
    // ProdutoCifraoComponent,
    // ProdutoListaComponent
    VinhoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [VinhoFormComponent]
})
export class AppModule { }
