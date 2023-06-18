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
    name: '',
    authorities: []
  }
  constructor(private service: UserService, private router: Router) { }

  userAuthorities(): string {
    if (this.user.authorities && this.user.authorities.length > 0) {
      const authority = this.user.authorities[0].authority;
      return authority!
    }
    return ''
  }

  ngOnInit(): void {
    this.service.findUserByToken().subscribe((user) => {
      console.log(user);
      this.user = user;
    }, (erro: HttpErrorResponse) => {
      console.log(erro)
      this.router.navigate([''])
    })
  }
}
