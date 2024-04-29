import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { VendedorModel } from '../vendedor/models/vendedor.models';
import { VendedorService } from '../vendedor/service/vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrl: './lista-vendedores.component.css'
})
export class ListaVendedoresComponent implements OnInit {

  public vendedores: any;

  constructor(private vendedorService: VendedorService,
    private router: Router) { }

  ngOnInit(): void {
    this.vendedorService.listar().subscribe(vendedor => {
      console.log(vendedor)
      this.vendedores = vendedor;
    });
  }

  excluir(key: any) {
    console.log(key);
    this.vendedorService.excluir(key).then(retorno => {
      console.log(retorno);
    });
  }

  carregar(key: any) {
    this.router.navigate(['/vendedor/' + key ]);
  }


}
