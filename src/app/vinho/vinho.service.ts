
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Vinho } from './vinho'

const httpOptions = {    
    headers :    new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable()
export class VinhosService {

    constructor(private http: HttpClient) {}

    cadastraVinho(vinho: Vinho): Promise<Object> {
        return this.http.post('/api/vinho', vinho, httpOptions)
        .toPromise()
    }

}
