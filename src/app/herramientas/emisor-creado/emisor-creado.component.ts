import { Component, OnInit, Input } from '@angular/core';
import { Emisor } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-emisor-creado',
  templateUrl: './emisor-creado.component.html',
  styleUrls: ['./emisor-creado.component.scss'],
})
export class EmisorCreadoComponent implements OnInit {
  @Input() emisor: Emisor= {
    usuario: {},
    rut: '',
    motivo: '',
    fechaemision: '',
    certificado: {},
    comunidad: {}
  };

  constructor() { }

  ngOnInit() {
    //console.log(this.emisor);
  }

}

