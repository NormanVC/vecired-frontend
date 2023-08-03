import { Component, OnInit, ViewChild} from '@angular/core';
import { PublicacionService } from '../../servicios/publicacion.service';
import { Publicacion, PublicacionesCreadas } from 'src/app/interfaces/interfaces';
import { DatePipe } from '@angular/common';
import { IonRefresher } from '@ionic/angular';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
  @ViewChild(IonRefresher) refresher: IonRefresher;


  publicaciones: PublicacionesCreadas[] = [];

  constructor( private publicacionService:  PublicacionService,
               private datePipe: DatePipe) { }


  ngOnInit() {
    this.siguientes();
  }


  formatearFecha(fecha: string): string{
    const fechaLocal = new Date(fecha);
    fechaLocal.setHours(fechaLocal.getHours() - 4);
    return this.datePipe.transform(fechaLocal, 'dd/MM/yyyy');
  }

  recargar(event){
    this.publicaciones = [];
    this.siguientes(event);
  }

  siguientes( event?) {
    this.publicacionService.getPublicaciones().subscribe(
      (res) => {
        this.publicaciones.push( ...res['publicaciones'] );
        console.log(res);
        if(event){
          event.target.complete();
          if(res['publicaciones'].length === 0){
            event.target.disabled=true;
          }

        }
      },
      (error) =>{
        console.log('Error al obtener las publicaciones', error);
      }
    );
  }


}
