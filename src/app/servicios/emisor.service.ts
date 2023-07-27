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
  
  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  getEmisor(pagina: number) {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return this.http.get<EmisorCreados>(`${url}/emisor/solicitudes?pagina=${pagina}`, { headers });
  }


  aceptarSolicitud(idSolicitud: string) {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    const solicitud = { _id: idSolicitud };
    return this.http.post(`${url}/emisor/aceptar`, solicitud, { headers });
  }

  rechazarSolicitud(idSolicitud: string) {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    const solicitud = { _id: idSolicitud };
    return this.http.post(`${url}/emisor/rechazar`, solicitud, { headers });
  }

  getmisEmisores(pagina: number) {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken,
    });

    return this.http.get<EmisorCreados>(`${url}/emisor/miscertificados?pagina=${pagina}`, { headers });
  }

}
