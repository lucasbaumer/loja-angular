import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/service/produto.service';
import { ProdutoModel } from '../produto/model/produto.model';
import { error } from 'console';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.css'
})

export class ListaProdutoComponent implements OnInit {

  public produtos: any;

  constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos;
    });

  }


  excluir(key: any) {
    console.log(key);
    this.produtoService.excluir(key).then(retorno => {
      console.log(retorno);
    });
  }

  carregar(key: any) {
    this.router.navigate(['/produto/' + key ]);
  }

}

