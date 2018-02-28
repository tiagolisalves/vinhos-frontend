import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent {
    produto: Produto;
    mostra: Boolean;
    produtos: [Produto] = [] as [Produto];

    constructor() {
        this.produto = new Produto('Carro', 25);
    }
    logar(produto: Produto) {
        console.log(produto);
    }
    mostraDeVezEmQuando() {
        this.mostra = !this.mostra;
    }
    adicionarProduto(produto: Produto) {
        this.produtos.push(produto);
    }


}
