import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { UsuarioComponent } from '../usuario.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private router: Router , private db: AngularFireDatabase) { }

  salvar(usuario: UsuarioModel): Promise<void> {
    return this.db.list('usuario').push(usuario)
    .then(() => {
      console.log('Usuário salvo com sucesso!');
      this.router.navigate(['/lista-usuario']);
    }).catch(error => {
      console.log('Erro ao salvar usuario', error);
    })
  }

  excluir(key: any) {
    return this.db.object('usuario/'+key).remove();
  }

  carregar(key: any) : Observable<any> {
    return this.db.object('usuario/'+key).valueChanges();
  }

  editar(key : any, usuario: UsuarioModel ){
    return this.db.object('usuario/' +key).update(usuario)
  }

  listar() {
    return this.db.list('usuario').snapshotChanges()
    .pipe(
      map(changes => {
        console.log(changes);
        return changes.map(c => ({ key: c.key,
          ...c.payload.val() as UsuarioService}));
      })
    );
  }
}
