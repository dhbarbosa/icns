import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Token } from './token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_CADASTRO = 'http://localhost:8080/api/user/cadastro'

  private readonly API_LOGIN = 'http://localhost:8080/api/login'

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.API_CADASTRO, user);
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.API_LOGIN, user);
  }
}
