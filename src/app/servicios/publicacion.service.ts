import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { PublicacionesCreadas } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class PublicacionService {

  constructor( private http: HttpClient,
               private usuarioService: UsuarioService) { }

  getPublicaciones(){

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return this.http.get<PublicacionesCreadas[]>(`${URL}/publicacion/`, { headers });

  }



}
