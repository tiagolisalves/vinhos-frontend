import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { Produto } from '../produto/produto'

@Component({
    selector: 'app-produto-lista',
    templateUrl: './produto-lista.component.html'
})
export class ProdutoListaComponent {
    
    @Input()
    produtos: [Produto]

   

}
