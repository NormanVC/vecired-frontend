import { Component, OnInit } from '@angular/core';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { Emisor } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-estado-cert',
  templateUrl: './estado-cert.page.html',
  styleUrls: ['./estado-cert.page.scss'],
})
export class EstadoCertPage implements OnInit {
  emisores: Emisor[] = [];
  emptySolicitud = false;

  constructor(private emisorService: EmisorService,
              private alertaService: AlertasService
              ) { }

  ngOnInit() {
   // this.emisorService.getmisEmisores().subscribe( resp =>{
    //  console.log(resp);
    //});
    this.emisores = [];
    this.getmisEmisores();

  }

  getmisEmisores(event?)
  {
    this.emisorService.getmisEmisores().subscribe(
      respuesta => {
        //console.log(respuesta['solicitudes']);
        this.emisores =respuesta['emisor'];
        //console.log(this.solicitudes[0].usuario.nombre);
        if(this.emisores.length == 0)
        {
          this.emptySolicitud = true;
          
        }else{
          this.emptySolicitud = false;
          
        }


      }
    )

    if(event)
        {
          event.target.complete();

          
        }

  }

  evento(){
    this.alertaService.alerta('Esta funcion aun no esta implementada');
  }

}
