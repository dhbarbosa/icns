import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AreaLogadoComponent } from './components/icns/area-logado/area-logado.component';
import { CadastrarEmpresaComponent } from './components/icns/area-logado/empresas/cadastrar-empresa/cadastrar-empresa.component';
import { ListarEmpresasComponent } from './components/icns/area-logado/empresas/listar-empresas/listar-empresas.component';
import { EmpresasComponent } from './components/icns/area-logado/empresas/empresas.component';
import { EmpresaComponent } from './components/icns/area-logado/empresas/empresa/empresa.component';
import { CadastrarNotaComponent } from './components/icns/area-logado/notas/cadastrar-nota/cadastrar-nota.component';
import { NotasComponent } from './components/icns/area-logado/notas/notas.component';


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
    path: 'areaLogado',
    component: AreaLogadoComponent,
    children: [
      {
        path: 'empresas',
        component: EmpresasComponent,
        children: [
          {
            path: 'cadastrar',
            component: CadastrarEmpresaComponent
          },
          {
            path: 'listar',
            component: ListarEmpresasComponent
          },
          {
            path: 'empresa/:cnpj',
            component: EmpresaComponent
          }
        ],
      },
      {
        path: 'produtos',
        component: NotasComponent,
        children: [
          {
            path: 'cadastrar',
            component: CadastrarNotaComponent
          }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
