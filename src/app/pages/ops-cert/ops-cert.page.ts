import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Emisor } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { EmisorService } from 'src/app/servicios/emisor.service';
import {Plugins} from '@capacitor/core'
const  {FileSystem} = Plugins;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { HttpClient } from '@angular/common/http';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function fechaActual() {
  const hoy = new Date();
  const dd = String(hoy.getDate()).padStart(2, '0');
  const mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0!
  const yyyy = hoy.getFullYear();

  return `${dd}-${mm}-${yyyy}`;
}

@Component({
  selector: 'app-ops-cert',
  templateUrl: './ops-cert.page.html',
  styleUrls: ['./ops-cert.page.scss'],
})
export class OpsCertPage implements OnInit {

  emisor: Emisor ={};

  aceptar: any;
  logoData = null;

  constructor(private ruta: Router,
              private emisorService: EmisorService,
              private alertasService: AlertasService,
              private fileOpener: FileOpener,
              private http: HttpClient
    ) { }

  ngOnInit() {
    this.obtenerEmisor();
    this.cargarlogo();
  }

  

  atras(){
    this.ruta.navigateByUrl('/main/tabs/estado-cert');
  }

  obtenerEmisor() {
    this.emisorService.Objeto.subscribe((respuesta: any) => {
     

      this.emisor = respuesta;
      
      //obtenemos el objeto de solicitud
      //console.log(this.emisor);
      //conseguimos la id de solicitud :3
      //console.log(this.emisor._id);
      console.log('Este certificado fue emitido?',this.emisor.emitido);
      console.log('Este certificado fue existe?',this.emisor.existe);
    });
  }
  
  cargarlogo() {
    this.http.get('/assets/icon/VeciRedText.png', {responseType: 'blob'}).subscribe( res => {
      const lector = new FileReader();
      lector.onloadend = () =>{
        this.logoData = lector.result
      }
      lector.readAsDataURL(res);
    });
  }

  confirmacion() {
    const fechaactual = fechaActual();
    let logo =  {image: this.logoData, width: 150, length:100};

    this.alertasService.alertaDecision('¿Desea generar ahora este certificado? Solo puede generarlo una vez.').then(
      respuesta => {
        this.aceptar = respuesta['data'];
        if (this.aceptar === true) {
          const documento = {
            content: [
              //logo
              logo,
              // Título
              { text: this.emisor.certificado.titulo, style: 'header' },
          
              // Info usuario
              { text: 'Presentado a:', style: 'subheader' },
              { text: this.emisor.usuario.nombre, style: 'nombreusuario' },
              { text: 'R.U.T:', style: 'subheader'},
              { text: this.emisor.usuario.rut, style:'subheader'},
              { text: 'Direccion:', style: 'subheader'},
              { text: this.emisor.usuario.direccion, style:'descripcion'},
      
          
              // Descripción
              { text: 'Descripción:', style: 'subheader' },
              { text: this.emisor.certificado.descripcion, style: 'descripcion' },
          
              // Nombre de la comunidad
              { text: 'Comunidad:', style: 'subheader' },
              { text: this.emisor.comunidad.nombreComunidad, style: 'nombrecomunidad' },
              { text: 'Fecha emisión de certificado:', style: 'subheader'},
              { text: fechaactual, style: 'subheader'},
          
              // Datos del representante de la comunidad
              { text: 'Representante de la Comunidad:', style: 'subheader' },
              { text: this.emisor.certificado.replegal, style: 'representante' },
              { text: 'Número de Contacto:', style: 'subheader' },
              { text: this.emisor.certificado.contacto, style: 'contacto' },
      
              // QR ,  SE DEBE CAMBIAR LA DIRECCION CUANDO SE SAQUE DE LOCALHOST
                { qr: 'https://www.bing.com/search?pglt=41&q=' +this.emisor._id, fit: '50'  },
      
              
            ],
          
            styles: {
              header: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 20]  // margen inferior
              },
              subheader: {
                fontSize: 14,
                bold: true,
                margin: [0, 10, 0, 5]
              },
              nombreusuario: {
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              descripcion: {
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              nombrecomunidad: {
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              representante: {
                fontSize: 12,
                margin: [0, 0, 0, 10]
              },
              contacto: {
                fontSize: 12,
                margin: [0, 0, 0, 20]
              }
            }
          };
        
          pdfMake.createPdf(documento).download('CertificadoVeciRed_'+ fechaactual +'.pdf');
          
        } else {
          this.alertasService.presentToast('Operación cancelada');
        }
      }
    );
  }


  verdocumento(emisor: Emisor){
  //se comprueba que se esta mandando los datos integros
    //console.log(this.emisor);
    this.emisorService.enviarDatos(emisor);
    this.ruta.navigateByUrl('/main/tabs/ver-doc');
  }

}

