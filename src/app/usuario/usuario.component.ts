import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompradorModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})



export class UsuarioComponent {

  formGroup = new FormGroup({
    nome: new FormControl('',
    [Validators.required]),
    email: new FormControl('',
    [Validators.required]),
    CPF: new FormControl('',
    [Validators.required]),
    senha: new FormControl('',
    [Validators.required]),
    sexo: new FormControl('',
    [Validators.required]),
    endereco: new FormControl('',
    [Validators.required]),
    dtnasc: new FormControl('',
    [Validators.required, Validators.min(5.1),] ),
  })

   constructor(private usuarioService: UsuarioService){ }

  ngOninit(): void{ //iniciar alguma coisa antes de iniciar
  }

  salvar(): void{
    console.log('Salvando produto');
    console.log("nome: " + this.formGroup.controls.nome.value);
    console.log("nome: " + this.formGroup.controls.nome.touched);
    console.log("email: " + this.formGroup.controls.email.value);
    console.log("email: " + this.formGroup.controls.email.touched);
    console.log("senha: " + this.formGroup.controls.senha.value);
    console.log("senha: " + this.formGroup.controls.senha.touched);
    console.log("Sexo: " + this.formGroup.controls.sexo.value);
    console.log("Data Nascimento: " + this.formGroup.controls.dtnasc.value);
    console.log("Endereço: " + this.formGroup.controls.endereco.value);
    console.log("Endereço: " + this.formGroup.controls.endereco.touched);


    var comprador = new CompradorModel();
    comprador.nome = this.formGroup.controls.nome.value?.toString();
    // comprador.cpf = this.formGroup.controls.cpf.value?
    // comprador.dtNasc = this.formGroup.controls.dtNasc.value?.toDate();
    comprador.email = this.formGroup.controls.email.value?.toString();
    comprador.senha = this.formGroup.controls.senha.value?.toString();
    comprador.endereco = this.formGroup.controls.endereco.value?.toString();
    comprador.sexo = this.formGroup.controls.sexo.value?.toString();

    this.usuarioService.salvar(comprador).subscribe(usuario => {
      console.log('Comprador salvo com sucesso');
      console.log(usuario)
    }, error => {
      console.error(error);
    });

  if(this.formGroup.invalid){
    console.log('Formulário Inválido');
    return;
  }
  }
}
