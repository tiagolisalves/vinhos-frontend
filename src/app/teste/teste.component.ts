import { Component } from '@angular/core'
import { Produto } from './produto'

@Component({
    selector : 'app-teste', // Se não usarmos no html teremos o erro: The selector "app-teste" did not match any elements
    templateUrl : './teste.component.html',
    styleUrls: ['./teste.component.css']
})
export class TesteComponent {
    titulo: string // NoImplicitAny setado como false(default)
    produto: Produto

    constructor() {
        this.titulo = 'Componente de teste'
        this.produto = {
            nome : 'Vinho',
            valor : 20.5
        }
    }
    
    ok(produto: Produto) {
        this.produto = produto
        console.log(produto)
    }   
}
