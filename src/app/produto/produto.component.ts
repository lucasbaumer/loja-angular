import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoModel } from './model/produto.model';
import { ProdutoService } from './service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

showSuccessMessages = false;
showErrorMessages = false;

  formGroup = new FormGroup({
    nome: new FormControl('',
    [Validators.required]),
    preco: new FormControl('',
    [Validators.required, Validators.min(5.1),
    Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
  });

  constructor(private produtoService: ProdutoService){ }

  ngOninit(): void{ //iniciar alguma coisa antes de iniciar
  }

  salvar(): void{
    console.log('Salvando produto');


  console.log("nome: " + this.formGroup.controls.nome.value);
  console.log("nome: " + this.formGroup.controls.preco.value);


  if(this.formGroup.invalid){
    console.log('Formulário Inválido');
    this.formGroup.markAllAsTouched();
    this.showErrorMessages = true;
    this.showSuccessMessages = false;
    return;
  }

  var produto = new ProdutoModel();
  produto.nome = this.formGroup.controls.nome.value?.toString();
  // produto.preco = this.formGroup.controls.preco.value?

  this.produtoService.salvar(produto).subscribe(produto => {
    console.log('Produto salvo com sucesso');
    console.log(produto)
  }, error => {
    console.error(error);
  });


  console.log("formulário Válido");
  this.showSuccessMessages = true;
  this.showErrorMessages = false;


}
}
