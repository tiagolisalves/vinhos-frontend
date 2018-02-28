import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core'

@Component({
    selector : 'app-produto-cifrao', // Se não usarmos no html teremos o erro: The selector "app-teste" did not match any elements
    templateUrl : './produto-cifrao.component.html',
    styleUrls: ['./produto-cifrao.component.css']
})
export class ProdutoCifraoComponent implements OnChanges {
    
    @Input()
    valor: Number 

    @Output()
    custaMuito = new EventEmitter<Boolean>()


    representacaoValor: string

    ngOnChanges(changes: SimpleChanges) {
        this.representacaoValor = Array(Math.ceil(Number(this.valor) / 10 + 1)).join('$')
        
        if (this.representacaoValor.length > 4) {
            this.custaMuito.emit(true)
        } else {
            this.custaMuito.emit(false)
        }
    }
    
   
}
