import { Injectable } from '@angular/core';
import { VendedorModel } from '../models/vendedor.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }

  salvar(vendedor:VendedorModel):Observable<VendedorModel>{
    return this.http.
    post('https://blazetenis-default-rtdb.firebaseio.com/vendedor.json', vendedor);
  }

  listar(): Observable<VendedorModel[]> {
    return this.http.
    get<VendedorModel[]>('https://blazetenis-default-rtdb.firebaseio.com/vendedor.json');
  }
}
