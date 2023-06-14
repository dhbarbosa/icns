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
import { SidebarComponent } from './components/icns/sidebar/sidebar.component';
import { NotasComponent } from './components/icns/notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    AlertComponent,
    AreaLogadoComponent,
    SidebarComponent,
    NotasComponent
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
