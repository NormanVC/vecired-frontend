import { Component, OnInit} from '@angular/core';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { ActivatedRoute } from '@angular/router';
import { Comunidad, Emisor, Usuario } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.page.html',
  styleUrls: ['./validate.page.scss'],
})
export class ValidatePage implements OnInit {

  emisor: Emisor={};
  usuario: Usuario={};
  comunidad: Comunidad={};
 
  constructor( private emisorService: EmisorService,
              private ruta: ActivatedRoute
              ) { }

  ngOnInit() {
  this.IddesdeURL();
  }


  IddesdeURL() {
    this.ruta.params.subscribe(params => {
      const idSolicitud = params['idSolicitud'];
  
      // Llama al servicio y asigna la respuesta a this.emisor
      this.emisorService.getID(idSolicitud).subscribe(
        (respuesta: any) => {
          // Ajusta la propiedad dependiendo de cómo esté estructurada tu respuesta
          this.emisor = respuesta.resultado;

          console.log(this.emisor);
          console.log(this.emisor.motivo)
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
    });
  }


}
