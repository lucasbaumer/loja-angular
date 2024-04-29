import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { UsuarioModel } from '../usuario/model/usuario.model';
import { UsuarioService } from '../usuario/service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit {

  public compradores: any;

  constructor(private usuarioService: UsuarioService,
  private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(compradores => {
      console.log(compradores)
      this.compradores = compradores;
    });
  }

  excluir(key: any) {
    console.log(key);
    this.usuarioService.excluir(key).then(retorno => {
      console.log(retorno);
    });
  }

  carregar(key: any) {
    this.router.navigate(['/usuario/' + key ]);
  }
}
