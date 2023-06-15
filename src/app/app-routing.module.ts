import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AreaLogadoComponent } from './components/icns/area-logado/area-logado.component';
import { NotasComponent } from './components/icns/notas/notas.component';
import { CadastrarEmpresaComponent } from './components/icns/area-logado/cadastrar-empresa/cadastrar-empresa.component';


const routes: Routes = [
  {
    component: LoginComponent,
    path: '',
    pathMatch: 'full'
  },
  {
    component: CadastroUsuarioComponent,
    path: 'cadastrar'
  },
  {
    component: AreaLogadoComponent,
    path: 'home',
    children: [
      {
        path: 'notas', component: NotasComponent
      },
      {
        path: "cadasEmpre", component: CadastrarEmpresaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
