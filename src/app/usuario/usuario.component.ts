import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioModel } from './model/usuario.model';
import { UsuarioService } from './service/usuario.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})

export class UsuarioComponent implements OnInit{

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;
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
    [Validators.required]),
  })

   constructor(private usuarioService: UsuarioService,
   private router: ActivatedRoute){ }

   ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.usuarioService.carregar(this.key).subscribe(comprador => {
          this.formGroup.controls.nome.patchValue(comprador.nome);
          this.formGroup.controls.CPF.patchValue(comprador.cpf);
          this.formGroup.controls.email.patchValue(comprador.email);
          this.formGroup.controls.senha.patchValue(comprador.senha);
          this.formGroup.controls.sexo.patchValue(comprador.sexo);
          this.formGroup.controls.dtnasc.patchValue(comprador.dtNasc);
          this.formGroup.controls.endereco.patchValue(comprador.endereco);
          console.log(comprador.dtNasc)
        });
      }
    })
  }

  salvar(): void {
    console.log(this.formGroup.value)
    if (this.formGroup.invalid) {
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    if (this.key) {
      var usuario = new UsuarioModel();

      usuario.nome = this.formGroup.controls.nome.value?.toString();
      usuario.cpf = this.formGroup.controls.CPF.value?.toString();
      usuario.email = this.formGroup.controls.email.value?.toString();
      usuario.senha = this.formGroup.controls.senha.value?.toString();
      usuario.sexo = this.formGroup.controls.sexo.value?.toString();
      usuario.dtNasc = this.formGroup.controls.dtnasc.value?.toString();
      usuario.endereco = this.formGroup.controls.endereco.value?.toString();


      this.usuarioService.editar( this.key, usuario).then(result => {
        this.showSuccessMessages = true;
        console.log(result);

      })

    } else {
      //codigo para salvar o produto
      var usuario = new UsuarioModel();
      usuario.nome = this.formGroup.controls.nome.value?.toString();
      usuario.cpf = this.formGroup.controls.CPF.value?.toString();
      usuario.email = this.formGroup.controls.email.value?.toString();
      usuario.senha = this.formGroup.controls.senha.value?.toString();
      usuario.sexo = this.formGroup.controls.sexo.value?.toString();
      usuario.dtNasc = this.formGroup.controls.dtnasc.value?.toString();
      usuario.endereco = this.formGroup.controls.endereco.value?.toString();


      this.usuarioService.salvar(usuario).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }
}


