import { Component, Input, inject } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Alert } from '../../alert/alert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})


export class CadastroUsuarioComponent {
  retryPassword = ''

  @Input() user: User = {
    username: '',
    name: '',
    password: ''
  }

  alert: Alert = {
    text: '',
    color: ''
  }

  constructor(private service: UserService, private router: Router) { }

  save(): void {
    if (this.user.password === this.retryPassword) {
      this.service.create(this.user).subscribe(
        (user: User) => {
          this.alert.text = `O Usuario: ${user.name} criado!`
          this.alert.color = 'success'
        },
        (erro: HttpErrorResponse) => {
          this.alert.text = erro.error.message
          this.alert.color = 'warning'
        })
    } else {
      this.alert.text = "Senhas não iguais"
      this.alert.color = 'warning'
    }
  }
}
