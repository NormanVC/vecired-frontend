import { Component, OnInit } from '@angular/core';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { Emisor } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {
  emisor: Emisor = {};
  idSolicitud: string; 
  qrdata: any;

  constructor(private emisorService: EmisorService) {}

  ngOnInit() {
    this.obtenerID();
    this.qrcreator();
  }

  qrcreator() {
    //console.log(this.emisor);
    //console.log(this.emisor);
    this.idSolicitud = this.emisor._id;
    this.qrdata = `http://146.83.194.142/validate/${this.idSolicitud}`;
   }

  obtenerID() {
    this.emisorService.Objeto.subscribe((respuesta: any) => {
      this.emisor = respuesta;
      // console.log(this.emisor);
    });
  }
}
