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

  email: string = '';
  password : string = '';

  constructor(private router: Router,
    public afAuth: AngularFireAuth,) {}

  realizarLogin(){
    console.log('email: ' + this.email);
    console.log('Senha: ' + this.password);

    if(this.email == ''){
      alert('Insira seu Email, por favor!');
      return;
    }
    if(this.password == ''){
      alert('Insira sua Senha, por favor!');
      return;
    }

    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password);
        this.email = '';
        this.password = '';
        this.router.navigate(['/home']);
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
