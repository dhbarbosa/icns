import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Token } from './token';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly TOKEN_USER = localStorage.getItem("Bearer")

  private readonly headers = new HttpHeaders({
    'Authorization': `Bearer ${this.TOKEN_USER}`
  });

  private readonly API_USER = `http://${environment.apiIp}:${environment.port}/api/user`

  private readonly API_LOGIN = `http://${environment.apiIp}:${environment.port}/api/login`

  constructor(private http: HttpClient) { }

  create(user: User): Observable<User> {
    const cadatro = `${this.API_USER}/cadastro`
    return this.http.post<User>(cadatro, user);
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.API_LOGIN, user);
  }

  findUserByToken(): Observable<User> {
    const infoUser = `${this.API_USER}/infoUser`
    return this.http.post<User>(infoUser, null, { headers: this.headers })
  }

}
