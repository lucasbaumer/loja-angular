import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const routes: Routes = [
  {path: 'layout', component: LayoutComponent,
    children:  [
       {path: 'usuario', component: UsuarioComponent},
       {path: 'lista-usuario', component: ListaUsuarioComponent},
       {path: 'produto', component: ProdutoComponent},
       {path: 'lista-produto', component: ListaProdutoComponent},
    ]},

  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
