import { Component, Input } from '@angular/core';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent {
  listEmpresa: Empresa[] = []

  constructor(private serivce: EmpresaService) { }

  ngOnInit() {
    this.findAll();
  }


  findAll(): void {
    this.serivce.findAll().subscribe((empresas) => {
      this.listEmpresa = empresas;
    })
  }
}
