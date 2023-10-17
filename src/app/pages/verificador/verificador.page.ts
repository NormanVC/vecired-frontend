import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.page.html',
  styleUrls: ['./verificador.page.scss'],
})
export class VerificadorPage implements OnInit {
  solicitud: string;
  constructor() { }

  ngOnInit() {
  }

  verificar(){
    console.log(this.solicitud);
  }

}
