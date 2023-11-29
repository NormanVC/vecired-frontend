import { Component, OnInit} from '@angular/core';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  nombreParseado: any;
  apellidoParseado: any;

 
  constructor( private emisorService: EmisorService,
              private ruta: ActivatedRoute,
              private router: Router
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
          this.loading = false;

          const partesNombre = this.parsearNombre(this.emisor.usuario.nombre);
          this.nombreParseado = partesNombre[0];
          this.apellidoParseado = partesNombre[1];


        },
        (error) => {
          console.error('Error al obtener datos:', error);
          this.loading = false;
        }
      );
    });
  
  }

  parsearNombre(nombreCompleto: string): [string, string] {
    const partes = this.emisor.usuario.nombre.split(' ');
    const nombre = partes.length > 0 ? partes[0] : nombreCompleto;
    const apellido = partes.length > 1 ? partes.slice(1).join(' ') : '';
    return [nombre, apellido];
  }


 aCasa(){
  this.router.navigateByUrl('/login');
 }


}
