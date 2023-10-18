import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.page.html',
  styleUrls: ['./verificador.page.scss'],
})
export class VerificadorPage implements OnInit {
  solicitud: string;
  constructor(private alertasService: AlertasService) { }

  ngOnInit() {
  }

  verificar(){
    console.log(this.solicitud);


    //Toast, to do configurarla por si el input viene vacio o es menor a 24
    this.alertasService.presentToast('ALL THE BOYS  SAY WOW WOW ');
  }

}
