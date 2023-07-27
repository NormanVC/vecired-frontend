import { Component, OnInit } from '@angular/core';
import { CertificadoService } from '../../servicios/certificado.service';
import { Certificado, Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mis-certificados',
  templateUrl: './mis-certificados.page.html',
  styleUrls: ['./mis-certificados.page.scss'],
})
export class MisCertificadosPage implements OnInit {
  certificados: Certificado[] = []; // Inicializamos como un arreglo vacío para evitar undefined.
  emptyCertificados: boolean = false;


  Roltype = [];
  usuario: Usuario = {};

  constructor(private certificadoService: CertificadoService,
              private ruta: Router,
              private usuarioService: UsuarioService,
              private alertController: AlertController
              ) { }

  ngOnInit() {
    this.loadCertificados(); // Cargamos los certificados al entrar en la página.
  }

  ionViewDidEnter() {
    this.loadCertificados(); // Llamamos a la función al entrar en la página.
    //this.obtenerRol();
    this.obtenerRolUsuario();
  }

  obtenerRolUsuario(){
    this.usuario = this.usuarioService.obtenerRolUsuario();
    this.Roltype[0] = this.usuario.rol;
    //console.log(this.usuario.rol);
  }

  loadCertificados() {
    this.certificadoService.getCertificados().subscribe(resp => {
      //console.log(resp);
      this.certificados = resp.certificados || [];
      this.emptyCertificados = this.certificados.length === 0; 
      //console.log(this.certificados); 
    });
  }

  async NavegarCrearCertificado()
  {
    //console.log(id);
    //this.ruta.navigateByUrl('/main/tabs/crear-cert');

    if (this.Roltype[0] === 2) {
      // Si el rol es 2 muestra alerta
      const alert = await this.alertController.create({
        message: 'Solo personas de la directiva pueden crear certificados.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      this.ruta.navigateByUrl('main/tabs/crear-cert');
    }

  }

  async editarCerticado(certificado) {
    if (this.Roltype[0] === 2) {
      // Si el rol es 2 muestra alerta
      const alert = await this.alertController.create({
        message: 'Solo personas de la directiva tienen permiso para editar el certificado.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      // Si el rol no es dos se procede
      //console.log('VAMOOOOOOOOO');
      this.certificadoService.enviarDatos(certificado);
      //console.log(certificado);
      // redireccionamos al usuario a editar-certificado
      this.ruta.navigateByUrl('main/tabs/editar-certificado');
    }
  }

}
