import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Token } from './token';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly API_CADASTRO = `http://${environment.apiIp}:${environment.port}/api/user/cadastro`

  private readonly API_LOGIN = `http://${environment.apiIp}:${environment.port}/api/login`

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.API_CADASTRO, user);
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.API_LOGIN, user);
  }
}
