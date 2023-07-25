import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../servicios/certificado.service';
import { Certificado, Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.page.html',
  styleUrls: ['./mis-certificados.page.scss'],
})
export class MisCertificadosPage implements OnInit {
  certificados: Certificado[] = []; // Inicializamos como un arreglo vacío para evitar undefined.
  emptyCertificados: boolean = false;



  usuario: Usuario = {};

  constructor(private certificadoService: CertificadoService,
              private ruta: Router,
              ) { }

  ngOnInit() {
    this.loadCertificados(); // Cargamos los certificados al entrar en la página.
  }

  ionViewDidEnter() {
    this.loadCertificados(); // Llamamos a la función al entrar en la página.
  }

  loadCertificados() {
    this.certificadoService.getCertificados().subscribe(resp => {
      //console.log(resp);
      this.certificados = resp.certificados || [];
      this.emptyCertificados = this.certificados.length === 0; 
      //console.log(this.certificados); 
    });
  }

  NavegarCrearAviso()
  {
    this.ruta.navigateByUrl('/main/tabs/crear-certificado');
  }

  editarCerticado(certificado)
  {
    //enviamos el aviso a traves del service
    this.certificadoService.enviarDatos(certificado);
    //console.log(certificado);
    //redireccionamos al usuario a editar-certificado
    this.ruta.navigateByUrl('main/tabs/editar-certificado');
  }


}
