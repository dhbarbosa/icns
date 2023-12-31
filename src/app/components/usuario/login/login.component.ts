import { Component } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';
import { Alert } from '../../alert/alert';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  }


  alert: Alert = {
    text: '',
    color: ''
  }
  constructor(private service: UserService, private router: Router) { }

  login(): void {
    this.service.login(this.user).subscribe((res) => {
      localStorage.setItem("Bearer", res.token);
      this.router.navigate(["/areaLogado"])

    },
      (erro: HttpErrorResponse) => {
        this.alert.text = erro.error.message || "Requisição possui campos inválidos"
        this.alert.color = 'warning'
      })
  }
}
