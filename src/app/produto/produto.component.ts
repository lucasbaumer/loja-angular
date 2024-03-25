import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(){ }

  ngOninit(): void{ //iniciar alguma coisa antes de iniciar
  }

  salvar(): void{
    console.log('Salvando produto');
    console.log("nome: " + this.formGroup.controls.nome.invalid);
    console.log("preço: " + this.formGroup.controls.nome.touched);

  console.log("nome: " + this.formGroup.controls.nome.value);
  console.log("nome: " + this.formGroup.controls.preco.value);


  if(this.formGroup.invalid){
    console.log('Formulário Inválido');
    this.formGroup.markAllAsTouched();
    this.showErrorMessages = true;
    return;
  }

  console.log("formulário Válido");
  this.showSuccessMessages = true;

}
}
