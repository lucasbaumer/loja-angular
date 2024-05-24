import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  constructor(private auth: AuthService){}
    ngOnInit():void{

    }

    logout(){
      this.auth.logout();
    }
}
