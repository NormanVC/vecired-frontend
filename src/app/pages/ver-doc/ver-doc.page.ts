import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { Certificado, Emisor, Comunidad, Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-ver-doc',
  templateUrl: './ver-doc.page.html',
  styleUrls: ['./ver-doc.page.scss'],
})
export class VerDocPage implements OnInit {

  emisor: Emisor ={};
  certificado: Certificado ={};
  comunidad: Comunidad ={};
  usuario: Usuario= {};

  constructor(private ruta: Router,
              private emisorService: EmisorService) { }

  ngOnInit() {
    this.obtenerEmisores();
  }

  atras(){
    this.ruta.navigateByUrl('/main/tabs/ops-cert');
  }

  obtenerEmisores(){
    this.emisorService.Objeto.subscribe((respuesta: any) =>{
      this.emisor = respuesta;
      console.log(this.emisor);
    });
  }

}
