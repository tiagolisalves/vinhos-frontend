import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { TesteComponent } from './teste/teste.component'
import { Teste2Component } from './teste2/teste.component'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    TesteComponent,
    Teste2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TesteComponent]
})
export class AppModule { }
