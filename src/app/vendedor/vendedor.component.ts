import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { VendedorModel } from './models/vendedor.models';
import { VendedorService } from './service/vendedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrl: './vendedor.component.css'
})

export class VendedorComponent {

  showSuccessMessages = false;
  showErrorMessages = false;

  key?:string;
  formGroup = new FormGroup({
    nome: new FormControl('',
    [Validators.required]),
    email: new FormControl('',
    [Validators.required]),
    CPF: new FormControl('',
    [Validators.required]),
    setor: new FormControl('',
    [Validators.required]),
    senha: new FormControl('',
    [Validators.required]),
    sexo: new FormControl('',
    [Validators.required]),
    dtnasc: new FormControl('',
    [Validators.required]),
  })

  constructor(private vendedorService: VendedorService,
    private router: ActivatedRoute){ }

    ngOnInit(): void {
     this.router.paramMap.subscribe(paramMap => {
       this.key = paramMap.get('key')?.toString();
       if (this.key) {
         this.vendedorService.carregar(this.key).subscribe(vendedor => {
           this.formGroup.controls.nome.patchValue(vendedor.nome);
           this.formGroup.controls.CPF.patchValue(vendedor.cpf);
           this.formGroup.controls.email.patchValue(vendedor.email);
           this.formGroup.controls.senha.patchValue(vendedor.senha);
           this.formGroup.controls.sexo.patchValue(vendedor.sexo);
           this.formGroup.controls.dtnasc.patchValue(vendedor.dtNasc);
           this.formGroup.controls.setor.patchValue(vendedor.endereco);
           console.log(vendedor.dtNasc)
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
       var usuario = new VendedorModel();

       usuario.nome = this.formGroup.controls.nome.value?.toString();
       usuario.cpf = this.formGroup.controls.CPF.value?.toString();
       usuario.email = this.formGroup.controls.email.value?.toString();
       usuario.senha = this.formGroup.controls.senha.value?.toString();
       usuario.sexo = this.formGroup.controls.sexo.value?.toString();
       usuario.dtNasc = this.formGroup.controls.dtnasc.value?.toString();
       usuario.setor = this.formGroup.controls.setor.value?.toString();


       this.vendedorService.editar( this.key, usuario).then(result => {
         this.showSuccessMessages = true;
         console.log(result)
       })

     } else {
       //codigo para salvar o produto
       var usuario = new VendedorModel();
       usuario.nome = this.formGroup.controls.nome.value?.toString();
       usuario.cpf = this.formGroup.controls.CPF.value?.toString();
       usuario.email = this.formGroup.controls.email.value?.toString();
       usuario.senha = this.formGroup.controls.senha.value?.toString();
       usuario.sexo = this.formGroup.controls.sexo.value?.toString();
       usuario.dtNasc = this.formGroup.controls.dtnasc.value?.toString();
       usuario.setor = this.formGroup.controls.setor.value?.toString();


       this.vendedorService.salvar(usuario).then(result => {
         this.showSuccessMessages = true;
         console.log(result);
       });
     }
   }
}
