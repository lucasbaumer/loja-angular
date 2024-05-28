import { Injectable } from '@angular/core';
import { ProdutoModel } from '../model/produto.model';
import { Observable, map } from 'rxjs';
import {AngularFireAction, AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class ProdutoService {

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, private router: Router) { }

  salvar(produto: ProdutoModel): Promise<void> {
    return this.db.list('produto').push(produto)
    .then(() => {
      console.log('produto salvo com sucesso!');
      this.router.navigate(['/lista-produto']);
    }).catch(error => {
      console.log('Erro ao salvar produto', error);
    })
  }

  excluir(key: any) {
    return this.db.object('produto/'+key).remove();
  }

  carregar(key: any) : Observable<any> {
    return this.db.object('produto/'+key).valueChanges();
  }


  editar(key : any, produto: ProdutoModel, ) {
    return this.db.object('produto/'+key).update(produto);
  }

  listar() {
    return this.db.list('produto').snapshotChanges()
    .pipe(
      map(changes => {
        console.log(changes);
        return changes.map(c => ({ key: c.key,
          ...c.payload.val() as ProdutoModel}));
      })
    );
  }

  getProdutoById(key: any): Observable<ProdutoModel>{
    return this.db.object(`produto/${key}`).snapshotChanges()
    .pipe(
      map(c => {
        const data = c.payload.val() as ProdutoModel;
        return {
          key: c.key,
          ...data
        };
      })
    )
  }

  uploadImagem(file: any){
    const path = 'imagens/' +file.name;
    const ref = this.storage.ref(path);
    return ref.put(file);
  }

}

