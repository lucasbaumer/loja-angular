import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //metodo register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() =>{
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    },err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
}
