import { Component, OnInit } from '@angular/core';
import { Emisor } from 'src/app/interfaces/interfaces';
import { EmisorService } from 'src/app/servicios/emisor.service';

@Component({
  selector: 'app-gest-cert',
  templateUrl: './gest-cert.page.html',
  styleUrls: ['./gest-cert.page.scss'],
})
export class GestCertPage implements OnInit {
  emisores: Emisor[] = [];

  emptySolicitud = false;

  constructor(private emisorService: EmisorService) { }

  ngOnInit() {
    this.emisores = [];
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(event?)
  {
    this.emisorService.getEmisor().subscribe(
      respuesta => {
        
        //console.log(respuesta['emisor']);
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


}
