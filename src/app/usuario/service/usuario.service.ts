import { Injectable } from '@angular/core';
import { CompradorModel } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  salvar(usuario:CompradorModel):Observable<CompradorModel>{
    return this.http.
    post('https://blazetenis-default-rtdb.firebaseio.com/comprador.json', usuario);
  }

  listar(): Observable<CompradorModel[]> {
    return this.http.
    get<CompradorModel[]>('https://blazetenis-default-rtdb.firebaseio.com/comprador.json');
  }
}
