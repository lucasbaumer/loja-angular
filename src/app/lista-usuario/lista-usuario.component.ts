import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { CompradorModel } from '../usuario/model/usuario.model';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit {

  public compradores: CompradorModel[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(compradores => {
      this.compradores = compradores;
      console.log(this.compradores);
    }, error => {
      console.error(error);
    });
  }
}
