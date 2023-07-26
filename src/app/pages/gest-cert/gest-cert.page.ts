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
  infiniteScroll = true;
  pagina = 1;


  constructor(private emisorService: EmisorService) {}

  ngOnInit() {
    this.emisores = [];
    this.obtenerSolicitudes();
    //console.log(this.emisores.length);
  }

  obtenerSolicitudes(event?) {
    this.emisorService.getEmisor(this.pagina).subscribe(
      (respuesta) => {
        const nuevosEmisores = respuesta['emisor'];
  
        if (nuevosEmisores.length === 0) {
          //se apaga el infinite scroll
          this.infiniteScroll = false;
          if (this.pagina === 1) {
            // Si la página es 1 y no hay solicitudes se muestra que comunidad no tiene mas solicitudes
            this.emptySolicitud = true;
          }
          if (event) {
            event.target.complete();
          }
          return;
        }
    
        this.emisores = this.emisores.concat(nuevosEmisores);
        this.pagina++;
  
        if (event) {
          event.target.complete();
        }
      },
      (error) => {
        console.error('Error al obtener las solicitudes:', error);
        if (event) {
          event.target.complete();
        }
      }
    );
  }

  cargarNuevos(event) {
    this.obtenerSolicitudes(event);
  }
}
