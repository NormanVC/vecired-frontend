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
  loading: boolean = true;
 
  constructor( private emisorService: EmisorService,
              private ruta: ActivatedRoute
              ) { }

  ngOnInit() {
  this.IddesdeURL();
  }


  IddesdeURL() {
    this.ruta.params.subscribe((params) => {
      const idSolicitud = params['idSolicitud'];

      this.emisorService.getID(idSolicitud).subscribe(
        (respuesta: any) => {
          this.emisor = respuesta.resultado;
          this.loading = false; // Marcamos que la carga ha terminado
        },
        (error) => {
          console.error('Error al obtener datos:', error);
          this.loading = false; // También marcamos que la carga ha terminado en caso de error
        }
      );
    });
  
  }



}
