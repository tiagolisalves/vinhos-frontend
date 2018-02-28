import { Component } from '@angular/core'
import { Produto } from './produto'

@Component({
    selector : 'app-produto', // Se não usarmos no html teremos o erro: The selector "app-teste" did not match any elements
    templateUrl : './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
    titulo: string // NoImplicitAny setado como false(default)
    produto: Produto
    caro: Boolean

    constructor() {
        this.titulo = 'Componente de teste'
        this.produto = {
            nome : 'Vinho',
            valor : 20.5
        }
    }
    
    ok(produto: Produto) {
        console.log(produto)
    }   
}
