import { Component } from '@angular/core';
import { UserService } from 'src/app/components/usuario/user.service';
import { User } from 'src/app/components/usuario/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  user: User = {
    idUser: '',
    username: '',
    name: ''
  }
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.findUserByToken().subscribe((user) => {
      this.user = user;
      console.log(user)
    }, (erro: HttpErrorResponse) =>
      this.router.navigate([''])
    )
  }
}
