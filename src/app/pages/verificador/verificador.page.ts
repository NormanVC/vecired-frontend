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

  async verificar(){
    const idSolicitud = this.solicitud;
    const validado = this.validacion();

    if(validado == null){
      this.ruta.navigate(['/validate', idSolicitud]);
    }

  }

  validacion(){
    
    if(this.solicitud.length == 0){
      return this.alertasService.alerta('Se debe ingresar un id de solicitud en el campo antes de intentar verificarlo.')
    }
    var caracteres = /^[a-zA-Z0-9]+$/;
    if(caracteres.test(this.solicitud) == false){

      return this.alertasService.alerta('El id ingresado contiene caracteres invalidos');
    }

    if(this.solicitud.length < 24){
      return this.alertasService.alerta('El id ingresado es demasiado corto, el id debe tener  24 caracteres.')
    }

    if(this.solicitud.length > 24){
      return this.alertasService.alerta('El id ingresado es demasiado largo, el id debe tener 24 caracteres')
    }

   

    return null
  }

 

}
