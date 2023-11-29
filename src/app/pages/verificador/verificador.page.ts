import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emisor } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.page.html',
  styleUrls: ['./verificador.page.scss'],
})
export class VerificadorPage implements OnInit {
  solicitud: string;

  emisor: Emisor ={};

  constructor(private alertasService: AlertasService,
              private ruta: Router,
    ) { }

  ngOnInit() {
    this.limpiar();
  }

  limpiar() {
    this.solicitud = '';
  }

  verificar(){
    if (this.solicitud && this.solicitud.length <= 24) {
      const idSolicitud = this.solicitud;
      this.ruta.navigate(['/validate', idSolicitud]);
    } else {
      this.alertasService.alerta('El Id de solicitud ingresado no es válido.');
    }

  }

}
