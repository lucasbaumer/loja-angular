import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  constructor(private auth: AuthService, public afAuth: AngularFireAuth, private router: Router){}
    ngOnInit():void{

    }


  excluirConta(): void{
    const confirmar = window.confirm("ATENÇÃO!!! deseja excluir a conta?");
    if (confirmar){
    this.afAuth.currentUser?.then((user) => {
      user?.delete().then(() => {
        window.alert('Conta excluida com sucesso');
        this.router.navigate(['/login'])
      }).catch((error) => {
        window.alert(error);
      });
    });
    }else{
      window.alert("Exclusão cancelada!")
    }
  }

    logout(){
      this.auth.logout();
    }
}
