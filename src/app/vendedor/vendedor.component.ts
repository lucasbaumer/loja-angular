import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { VendedorModel } from './models/vendedor.models';
import { VendedorService } from './service/vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})

export class VendedorComponent {

  formGroup = new FormGroup({
    nome: new FormControl('',
    [Validators.required]),
    email: new FormControl('',
    [Validators.required]),
    CPF: new FormControl('',
    [Validators.required, Validators.pattern('^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$')]),
    setor: new FormControl('',
    [Validators.required]),
    senha: new FormControl('',
    [Validators.required]),
    sexo: new FormControl('',
    [Validators.required]),
    dtnasc: new FormControl('',
    [Validators.required, Validators.min(5.1),] ),
  })

   constructor(private vendedorService: VendedorService){ }

  ngOninit(): void{ //iniciar alguma coisa antes de iniciar
  }

  salvar(): void{
    console.log('Salvando produto');
    console.log("nome: " + this.formGroup.controls.nome.value);
    console.log("nome: " + this.formGroup.controls.nome.touched);
    console.log("email: " + this.formGroup.controls.email.value);
    console.log("CPF: " + this.formGroup.controls.CPF.touched);
    console.log("setor: " + this.formGroup.controls.setor.value);
    console.log("senha: " + this.formGroup.controls.senha.value);
    console.log("senha: " + this.formGroup.controls.senha.touched);
    console.log("Sexo: " + this.formGroup.controls.sexo.value);
    console.log("Data Nascimento: " + this.formGroup.controls.dtnasc.value);




    var vendedor = new VendedorModel();
    vendedor.nome = this.formGroup.controls.nome.value?.toString();
    vendedor.cpf = this.formGroup.controls.CPF.value?.toString();
    vendedor.dtNasc = this.formGroup.controls.dtnasc.value?.toString();
    vendedor.email = this.formGroup.controls.email.value?.toString();
    vendedor.senha = this.formGroup.controls.senha.value?.toString();
    vendedor.setor = this.formGroup.controls.setor.value?.toString();
    vendedor.sexo = this.formGroup.controls.sexo.value?.toString();

    this.vendedorService.salvar(vendedor).subscribe(vendedor => {
      console.log('Vendedor salvo com sucesso');
      console.log(this.formGroup.controls.sexo.value)
      console.log(vendedor)
    }, error => {
      console.error(error);
    });


  if(this.formGroup.invalid){
    console.log('Formulário Inválido');
    return;
  }
  }
}
