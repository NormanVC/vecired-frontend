import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ops-cert',
  templateUrl: './ops-cert.page.html',
  styleUrls: ['./ops-cert.page.scss'],
})
export class OpsCertPage implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  atras(){
    this.ruta.navigateByUrl('/main/tabs/estado-cert');
  }

}
