import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/usuario/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AlertComponent } from './components/alert/alert.component';
import { AreaLogadoComponent } from './components/icns/area-logado/area-logado.component';
import { SidebarComponent } from './components/icns/area-logado/sidebar/sidebar.component';
import { CadastrarEmpresaComponent } from './components/icns/area-logado/empresas/cadastrar-empresa/cadastrar-empresa.component';
import { ListarEmpresasComponent } from './components/icns/area-logado/empresas/listar-empresas/listar-empresas.component';
import { EmpresasComponent } from './components/icns/area-logado/empresas/empresas.component';
import { EditarEmpresaComponent } from './components/icns/area-logado/empresas/editar-empresa/editar-empresa.component';
import { CadastrarProdutoComponent } from './components/icns/area-logado/produtos/cadastrar-produto/cadastrar-produto.component';
import { ProdutosComponent } from './components/icns/area-logado/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    AlertComponent,
    AreaLogadoComponent,
    SidebarComponent,
    CadastrarEmpresaComponent,
    ListarEmpresasComponent,
    EmpresasComponent,
    EditarEmpresaComponent,
    CadastrarProdutoComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
