import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/service/produto.service';
import { ProdutoModel } from '../produto/model/produto.model';
import { error } from 'console';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})
export class ListaProdutoComponent implements OnInit {

  public produtos: ProdutoModel[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }

  excluir(key: any){
    console.log(key);
    this.produtoService.excluir(key).then(retorno =>{
      console.log(retorno);
    });
  }
}
