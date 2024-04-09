import { Injectable } from '@angular/core';
import { ProdutoModel } from '../model/produto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  salvar(produto:ProdutoModel):Observable<ProdutoModel>{
    return this.http.
    post('https://blazetenis-default-rtdb.firebaseio.com/produto.json', produto);
  }

  listar(): Observable<ProdutoModel[]> {
    return this.http.
    get<ProdutoModel[]>('https://blazetenis-default-rtdb.firebaseio.com/produto.json');
  }
}
