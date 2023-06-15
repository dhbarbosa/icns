import { Component, Input } from '@angular/core';
import { Empresa } from '../empresa';
import { Alert } from 'src/app/components/alert/alert';
import { EmpresaService } from '../empresa.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})

export class EditarEmpresaComponent {
  
  alert: Alert = {
    text: '',
    color: ''
  }

  @Input() empresa: Empresa = {
    nomeFantasia: '',
    cnpj: '',
    email: '',
    contato: ''
  }

  cnpj_valor(): void {
    const inputElement = document.getElementById('inputCNPJ') as HTMLInputElement;
    const valorFormatado = inputElement.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})/, "$1.$2.$3/$4-")
    inputElement.value = valorFormatado
  }

  contato_valor(): void {
    const inputElement = document.getElementById('inputContato') as HTMLInputElement;
    const valorFormatado = inputElement.value.replace(/^(\d{2})(\d{5})$/, "($1)$2-")
    inputElement.value = valorFormatado
  }

  validCnpj(): string {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const isValidCnpj = cnpjRegex.test(this.empresa.cnpj);

    if (isValidCnpj) {
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }


  validEmail(): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmail = emailRegex.test(this.empresa.email);

    if (isEmail) {
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }

  validNomeFantasia(): string {
    const isValidNomeFantasia = this.empresa.nomeFantasia

    if (isValidNomeFantasia) {
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }

  validContato(): string {
    const contatoRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    const isValidContato = contatoRegex.test(this.empresa.contato);

    if (isValidContato) {
      return 'is-valid'
    } else {
      return 'is-invalid'
    }
  }


  constructor(private service: EmpresaService) { }

  save() {
    console.log(this.empresa.contato)
    this.service.save(this.empresa).subscribe((res) => {
      console.log(res)
    }, (erro: HttpErrorResponse) => {
      this.alert.text = erro.error.message || erro.message || "Requisição possui campos inválidos"
      this.alert.color = 'warning'
    })
  }
}
