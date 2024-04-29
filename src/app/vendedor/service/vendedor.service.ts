import { Injectable } from '@angular/core';
import { VendedorModel } from '../models/vendedor.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private db: AngularFireDatabase) { }

  salvar(vendedor: VendedorModel) {
    return this.db.list('vendedor').push(vendedor);
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
