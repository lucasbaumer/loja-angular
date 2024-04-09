import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { VendedorModel } from '../vendedor/models/vendedor.models';
import { VendedorService } from '../vendedor/service/vendedor.service';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrl: './lista-vendedores.component.css'
})
export class ListaVendedoresComponent implements OnInit {

  public vendedores: VendedorModel[] = [];

  constructor(private vendedorService: VendedorService) { }

  ngOnInit(): void {
    this.vendedorService.listar().subscribe(vendedores => {
      this.vendedores = vendedores;
      console.log(this.vendedores);
    }, error => {
      console.error(error);
    });
  }

}
