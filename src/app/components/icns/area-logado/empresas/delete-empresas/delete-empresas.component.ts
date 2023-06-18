import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';
import { Alert } from 'src/app/components/alert/alert';



@Component({
  selector: 'app-delete-empresas',
  templateUrl: './delete-empresas.component.html',
  styleUrls: ['./delete-empresas.component.css'],
})
export class DeleteEmpresasComponent {
  alert: Alert = {
    text: '',
    color: ''
  }

  empresa: Empresa = {
    idEmpresas: '',
    nomeFantasia: '',
    cnpj: '',
    email: '',
    contato: ''
  }

  constructor(
    private service: EmpresaService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const cnpj = this.route.snapshot.paramMap.get('cnpj');
    if (cnpj) {
      this.service.findByCNPJ(cnpj).subscribe((empresa) => {
        this.empresa = empresa;
      })
    }
  }


  excluirPensamento(): void {
    const cnpj = this.route.snapshot.paramMap.get('cnpj');
    if (cnpj) {
      this.service.delete(cnpj).subscribe((res) => {
        this.router.navigate(['/areaLogado/empresas/listar'])
      }, (error) => {
        console.log(error)
        this.alert.text = error.error.Conflict+" Voce é não tem diretos Adm"
        this.alert.color = 'warning'
      })
    }
  }

  voltar(): void {
    this.router.navigate(['/areaLogado/empresas/listar'])
  }

}
