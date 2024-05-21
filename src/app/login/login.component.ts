import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, Validators } from '@angular/forms';
import {Route, Router, RouterLink} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showSuccessMessages = false;
  showErrorMessages = false;

  login = new FormControl('',
    [Validators.required]);

  password = new FormControl('',
    [Validators.required]);

  constructor(private router: Router,
    public afAuth: AngularFireAuth,) {}

  realizarLogin(){
    console.log('Login: ' + this.login.value);
    console.log('Senha: ' + this.password.value);

    this.afAuth
      .signInWithEmailAndPassword(this.login.value!, this.password.value!)
      .then((result) => {
        console.log(result.user);
        this.router.navigate(['/home']);
      })
      .catch((error) =>{
        console.log(error);
        window.alert('Email ou senha incorretos!!')
        return;
      });
  }

  recuperarSenha(){
    this.afAuth
      .sendPasswordResetEmail(this.login.value!)
      .then(()=>{
        window.alert('Email para alterar sua senha foi enviado, confira sua caixa de entrada.');
      })
    .catch((error)=> {
      window.alert(error);
    });
  }

  excluirConta(){
    this.afAuth.currentUser?.then((user) => {
      user?.delete().then(() => {
        window.alert('Conta excluida com sucesso');
      }).catch((error) => {
        window.alert(error);
      });
    });
  }
}
