import { Component, OnInit } from '@angular/core';
import { Emisor } from 'src/app/interfaces/interfaces';
import { EmisorService } from 'src/app/servicios/emisor.service';

@Component({
  selector: 'app-gest-cert',
  templateUrl: './gest-cert.page.html',
  styleUrls: ['./gest-cert.page.scss'],
})
export class GestCertPage implements OnInit {
  //emisores: Emisor[] = [];

  constructor(private emisorService: EmisorService) { }

  ngOnInit() {
    this.emisorService.getEmisor().subscribe( resp => {
      console.log(resp);
    })
  }

}
