import { Component } from '@angular/core'
import { Vinho } from '../vinho'
import { VinhosService } from '../vinho.service'


@Component({
    selector: 'app-vinho-form',
    templateUrl: './vinho-form.component.html',
    providers: [VinhosService]
})
export class VinhoFormComponent {
    
    vinho: Vinho = new Vinho()

    constructor(private vinhoService: VinhosService){
        
    }

    cadastrar(vinho: Vinho) {
        console.log(vinho)
        
        this.vinhoService.cadastraVinho(vinho).then(success  => {                          
            console.log('SUC')
            console.log(success)
        }, erro => {
            console.log('ER')
            console.log(erro)
        }) 
    }

}
