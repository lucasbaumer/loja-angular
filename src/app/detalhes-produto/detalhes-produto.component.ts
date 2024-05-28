import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto/service/produto.service';
import { switchMap } from 'rxjs';
import { ProdutoModel } from '../produto/model/produto.model';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit{

  produto: ProdutoModel | null = null;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService){
  }

  ngOnInit(){
      this.route.paramMap.pipe(
        switchMap(params =>{
          const key = params.get('key');
          return this.produtoService.getProdutoById(key);
        })
      ).subscribe(produto => {
        this.produto = produto;
      })
  }
}
