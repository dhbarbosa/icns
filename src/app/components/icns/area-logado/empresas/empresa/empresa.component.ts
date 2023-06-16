import { Component } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../empresa';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  empresa: Empresa = {
    idEmpresas: '',
    cnpj: '',
    email: '',
    contato: '',
    nomeFantasia: ''
  }

  constructor(private service: EmpresaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const cnpj = this.route.snapshot.paramMap.get('cnpj');
    this.service.findByCNPJ(cnpj!).subscribe((empresa) => {
      this.empresa = empresa;
    }, (erro: HttpErrorResponse) => {
      console.log(erro.error.message || erro.message || "Requisição possui campos inválidos")

    })
  }


}
