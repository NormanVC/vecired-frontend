import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmisorCreados } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class EmisorService {
  paginaEmisor = 0;
  constructor(private http: HttpClient,
              private usuarioService: UsuarioService ) {}

  getEmisor(){
    this.paginaEmisor ++;
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return this.http.get<EmisorCreados>(`${url}/emisor/solicitudes`, { headers });

  }
}
