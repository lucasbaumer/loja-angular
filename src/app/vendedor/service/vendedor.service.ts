import { Injectable } from '@angular/core';
import { VendedorModel } from '../models/vendedor.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private db: AngularFireDatabase, private router: Router) { }

  salvar(vendedor: VendedorModel): Promise<void> {
    return this.db.list('vendedor').push(vendedor)
    .then(() => {
      console.log('Usuário salvo com sucesso!');
      this.router.navigate(['/lista-vendedores']);
    }).catch(error => {
      console.log('Erro ao salvar usuario', error);
    })
  }

  excluir(key: any) {
    return this.db.object('vendedor/'+key).remove();
  }

  carregar(key: any) : Observable<any> {
    return this.db.object('vendedor/'+key).valueChanges();
  }

  editar(key : any, vendedor: VendedorModel ) {
    return this.db.object('vendedor/' +key).update(vendedor);
  }

  listar() {
    return this.db.list('vendedor').snapshotChanges()
    .pipe(
      map(changes => {
        console.log(changes);
        return changes.map(c => ({ key: c.key,
          ...c.payload.val() as VendedorService}));
      })
    );
  }
}
