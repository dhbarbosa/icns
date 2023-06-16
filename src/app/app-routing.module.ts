import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AreaLogadoComponent } from './components/icns/area-logado/area-logado.component';
import { CadastrarEmpresaComponent } from './components/icns/area-logado/empresas/cadastrar-empresa/cadastrar-empresa.component';
import { ListarEmpresasComponent } from './components/icns/area-logado/empresas/listar-empresas/listar-empresas.component';
import { EmpresasComponent } from './components/icns/area-logado/empresas/empresas.component';
import { CadastrarProdutoComponent } from './components/icns/area-logado/produtos/cadastrar-produto/cadastrar-produto.component';
import { ProdutosComponent } from './components/icns/area-logado/produtos/produtos.component';


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
          }],
      },
      {
        path: 'produtos',
        component: ProdutosComponent,
        children: [
          {
            path: 'cadastrar',
            component: CadastrarProdutoComponent
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
