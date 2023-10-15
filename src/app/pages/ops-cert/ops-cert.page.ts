import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emisor } from 'src/app/interfaces/interfaces';
import { EmisorService } from 'src/app/servicios/emisor.service';

@Component({
  selector: 'app-ops-cert',
  templateUrl: './ops-cert.page.html',
  styleUrls: ['./ops-cert.page.scss'],
})
export class OpsCertPage implements OnInit {

  emisor: Emisor ={};

  constructor(private ruta: Router,
              private emisorService: EmisorService
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

}
