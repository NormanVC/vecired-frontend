import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { CertificadosCreados } from '../interfaces/interfaces';

const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  constructor(
              private http: HttpClient,
              private usuarioService: UsuarioService
  ) { }

  getCertificados() {

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    })

    return this.http.get<CertificadosCreados>(`${url}/certificados/`,{headers});
  }

}

