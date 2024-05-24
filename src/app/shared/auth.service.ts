import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { emit } from 'process';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //metodo login
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home'])

    },err =>{
      alert('Algo deu errado');
      this.router.navigate(['/login'])
    })
  }

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

  //método logout
  logout(){
    this.fireauth.signOut().then(() =>{
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    },err => {
      alert(err.message);
    })
  }

  //método esqueceu senha
  ForgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() =>{
      this.router.navigate(['/verify'])
    },err => {
      alert('Algo deu errado!')
    })
  }

  //verificação de email
  sendEmailForVerification(user: any){
    user.sendEmailVerification().then((res: any) =>{
      this.router.navigate(['/verify']);
      },(err: any) => {
        alert('Algo deu errado, não foi possível mandar o link')
      })
  }
}
