import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoModel } from './model/produto.model';
import { ProdutoService } from './service/produto.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
import { URL } from '@angular/fire/compat/database';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;
  formGroup = new FormGroup({
    nome: new FormControl('',
      [Validators.required]),
    preco: new FormControl('',
      [Validators.required, Validators.min(5.1),
      Validators.
        pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
    descricao: new FormControl('',
      [Validators.required]),
    imagem: new FormControl('',
      [Validators.required]),
  });

  constructor(private produtoService: ProdutoService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.produtoService.carregar(paramMap.get('key')).subscribe(produto => {
          this.formGroup.controls.nome.patchValue(produto.nome);
          this.formGroup.controls.preco.patchValue(produto.preco);
          this.formGroup.controls.descricao.patchValue(produto.descricao);
          this.formGroup.controls.imagem.patchValue(produto.imagem);
        });
      }
    })
  }

  salvar(): void {
    if (this.formGroup.invalid) {
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    if (this.key) {
      var produto = new ProdutoModel();
      produto.nome = this.formGroup.controls.nome.value?.toString();
      produto.preco = this.formGroup.controls.preco.value?.toString();
      produto.descricao = this.formGroup.controls.descricao.value?.toString();
      produto.imagem = this.formGroup.controls.imagem.value?.toString();

      this.produtoService.editar( this.key, produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result)
      })

    } else {
      //codigo para salvar o produto
      var produto = new ProdutoModel();
      produto.nome = this.formGroup.controls.nome.value?.toString();
      produto.preco = this.formGroup.controls.preco.value?.toString();
      produto.descricao = this.formGroup.controls.descricao.value?.toString();
      produto.imagem = this.formGroup.controls.imagem.value?.toString();

      this.produtoService.salvar(produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }

  selectFile(event: any){
    console.log(event);

    console.log(event.target.files[0]);

    const file = event.target.files[0];

    this.produtoService.uploadImagem(file).then(result => {
      console.log(result);
      result.ref.getDownloadURL().then(url => {
        this.formGroup.controls.imagem.patchValue(result.ref.fullPath);
      });
    })
  }

}
