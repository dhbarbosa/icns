import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Empresa } from './empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient, router: Router) { }

  private readonly API_EMPRESA = `http://${environment.apiIp}:${environment.port}/api/user/empresas`
  private readonly TOKEN_USER = localStorage.getItem("Bearer")

  private readonly headers = new HttpHeaders({
    'Authorization': `Bearer ${this.TOKEN_USER}`
  });

  save(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.API_EMPRESA, empresa, { headers: this.headers })
  }

  findAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.API_EMPRESA, { headers: this.headers })
  }

  findByCNPJ(cnpj: string): Observable<Empresa> {
    const url = `${this.API_EMPRESA}/${cnpj}`
    return this.http.get<Empresa>(url, { headers: this.headers })
  }
}
