import { Component, Input } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';
import { HttpErrorResponse } from '@angular/common/http';
import { Alert } from 'src/app/components/alert/alert';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})

export class CadastrarEmpresaComponent {
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
    this.service.save(this.empresa).subscribe((empresa) => {
      this.alert.text = `Empresa: ${empresa.nomeFantasia} cadastrada com sucesso!`
      this.alert.color = 'success'
    }, (erro: HttpErrorResponse) => {
      console.log(erro)
      this.alert.text = erro.error.message || erro.message || "Requisição possui campos inválidos"
      this.alert.color = 'warning'
    })
  }
}
