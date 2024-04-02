import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
       {path: '', redirectTo: 'login', pathMatch: 'full'},
       {path: 'home', component: HomeComponent},
       {path: 'usuario', component: UsuarioComponent},
       {path: 'lista-usuario', component: ListaUsuarioComponent},
       {path: 'produto', component: ProdutoComponent},
       {path: 'lista-produto', component: ListaProdutoComponent},
       {path: 'vendedor', component: VendedorComponent},
       {path: 'lista-vendedores', component: ListaVendedoresComponent},
       {path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
