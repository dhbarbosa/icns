import { Component, Input } from '@angular/core';
import { Empresa } from '../empresa';
import { Alert } from 'src/app/components/alert/alert';
import { EmpresaService } from '../empresa.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-empresa',
  templateUrl: './update-empresa.component.html',
  styleUrls: ['./update-empresa.component.css']
})
export class UpdateEmpresaComponent {
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


  constructor(
    private service: EmpresaService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const cnpj = this.route.snapshot.paramMap.get('cnpj');
    console.log(cnpj)
    if (cnpj) {
      this.service.findByCNPJ(cnpj).subscribe((empresa) => {
        this.empresa = empresa;
      })
    }
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


  save() {
    const cnpj = this.route.snapshot.paramMap.get('cnpj');
    this.service.update(this.empresa, cnpj!).subscribe((empresa) => {
      this.alert.text = `Empresa: ${empresa.nomeFantasia} atualiza com sucesso!`
      this.alert.color = 'success'
    }, (erro: HttpErrorResponse) => {
      console.log(erro)
      this.alert.text = erro.error.message || erro.message || "Requisição possui campos inválidos"
      this.alert.color = 'warning'
    })
  }
}
