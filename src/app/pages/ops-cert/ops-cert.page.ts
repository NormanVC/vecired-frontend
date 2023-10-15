import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emisor } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { EmisorService } from 'src/app/servicios/emisor.service';

@Component({
  selector: 'app-ops-cert',
  templateUrl: './ops-cert.page.html',
  styleUrls: ['./ops-cert.page.scss'],
})
export class OpsCertPage implements OnInit {

  emisor: Emisor ={};

  constructor(private ruta: Router,
              private emisorService: EmisorService,
              private alertasService: AlertasService
    ) { }

  ngOnInit() {
    this.obtenerEmisor();
  }

  atras(){
    this.ruta.navigateByUrl('/main/tabs/estado-cert');
  }

  obtenerEmisor() {
    this.emisorService.Objeto.subscribe((respuesta: any) => {
     

      this.emisor = respuesta;
      
      //obtenemos el objeto de solicitud
      //console.log(this.emisor);
      //conseguimos la id de solicitud :3
      //console.log(this.emisor._id);
      console.log('Este certificado fue emitido?',this.emisor.emitido);
      console.log('Este certificado fue existe?',this.emisor.existe);
    });
  }
  
  confirmacion(){
    this.alertasService.alertaDecision('¿Desea generar ahora este certificado? Solo puede generarlo una vez.');
  }

  descargar(){
    this.alertasService.alertaDecision('¿Desea descargar este certificado? Solo se puede descargar una vez.');
  }


}
