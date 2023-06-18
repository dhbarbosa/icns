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
import { HeaderComponent } from './components/icns/area-logado/header/header.component';
import { EmpresaComponent } from './components/icns/area-logado/empresas/empresa/empresa.component';
import { NotasComponent } from './components/icns/area-logado/notas/notas.component';
import { DeleteEmpresasComponent } from './components/icns/area-logado/empresas/delete-empresas/delete-empresas.component';
import { UpdateEmpresaComponent } from './components/icns/area-logado/empresas/update-empresa/update-empresa.component';




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
    HeaderComponent,
    EmpresaComponent,
    NotasComponent,
    DeleteEmpresasComponent,
    UpdateEmpresaComponent,
    UpdateEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
