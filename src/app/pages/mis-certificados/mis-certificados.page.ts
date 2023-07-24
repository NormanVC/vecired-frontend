import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../servicios/certificado.service';
import { Certificado } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.page.html',
  styleUrls: ['./mis-certificados.page.scss'],
})
export class MisCertificadosPage implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) { }

  ngOnInit() {
    this.loadCertificados();
  }

  ionViewDidEnter() {
    this.loadCertificados();
  }

  loadCertificados() {
    this.certificadoService.getCertificados().subscribe(resp => {
      console.log(resp);
      this.certificados = resp.certificados;
    });
  }

}