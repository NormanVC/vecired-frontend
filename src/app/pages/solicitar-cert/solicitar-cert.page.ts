import { Component, OnInit } from '@angular/core';
import { EmisorService } from 'src/app/servicios/emisor.service';
import { Emisor } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-solicitar-cert',
  templateUrl: './solicitar-cert.page.html',
  styleUrls: ['./solicitar-cert.page.scss'],
})
export class SolicitarCertPage implements OnInit {
  emisor: Emisor = {
    rut: '',
    motivo: '',
    certificado: {} 
  };

  constructor(private emisorService: EmisorService,
              private ruta: Router,
              private alertaService: AlertasService) { }

  ngOnInit() {
    this.obtenerCertificado(); 
  }

  obtenerCertificado() {
    this.emisorService.Objeto.subscribe((respuesta: any) => {
      // Asignar el valor del certificado ID a this.emisor.certificado
      this.emisor.certificado = respuesta;
  
      console.log(this.emisor); 
    });
  }
  

  crearPost() {
    console.log(this.emisor.rut);
    console.log(this.emisor.motivo);
    console.log(this.emisor.certificado);

  }



  async crearCert()
   {
     const validado = this.validacion();

     if(validado == null)
     {
       const nuevoEmisor = await this.emisorService.crearSolicitud(this.emisor);

      
      //Vaciamos las variables para limpiar los campos
      this.emisor = {
        rut: '',
        motivo: '',
        certificado: {},
      };


      this.ruta.navigateByUrl('main/tabs/mis-certificados');
      this.alertaService.presentToast('Certificado creado exitosamente');
     }

     
   }

   validacion()
   {
     //Validación caracteres extraños en nombre
     var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{3,50})+$/g;

 
     if(caracteres.test(this.emisor.motivo) == false){
      
      return this.alertaService.alerta('El título no permite tener caracteres especiales');
    }

     return null;
 
   }

}
