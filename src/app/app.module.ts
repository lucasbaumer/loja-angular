import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environment/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    UsuarioComponent,
    LayoutComponent,
    LoginComponent,
    ListaUsuarioComponent,
    ListaProdutoComponent,
    VendedorComponent,
    ListaVendedoresComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
