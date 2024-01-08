import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { Usuario, Comunidad } from '../../interfaces/interfaces';
import { UsuarioService } from '../../servicios/usuario.service';
import { AlertasService } from '../../servicios/alertas.service';
import {validate} from 'rut.js';
import { RutService } from '../../servicios/rut.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  maxTime: String = new Date().toISOString();

  userRegistro: Usuario = {
    nombre: '',
    fechaNacimiento: null,
    email: '',
    password: '',
    rut: '',
    direccion:''
  }

  veciRed:Comunidad = {
    _id: '619f11e875415805c3424bbb',
    nombreComunidad: 'Comunidad VeciRed'

  }

  repitaPassword = '';

  constructor( public navCtrl: NavController,
               public usuarioService: UsuarioService,
               public alertasService: AlertasService,
               private menuCtrl: MenuController,
               private rutService: RutService ) { 
                this.menuCtrl.enable(false, 'first');
               }

  ngOnInit() {
  
  }

  formatearRut(rut: string): string {
    return this.rutService.formatearRut(rut); // Llamamos a la función del servicio
  }

  async registro(){

    const validado = this.validacion();

    if(validado == null){

      const existe = await this.usuarioService.registro(this.userRegistro);
  
      if(existe){
        //navegar al tabs
        this.navCtrl.navigateRoot('/main/tabs/tab1', {animated: true});
      }else{
        //mostrar alerta si el carreo ya se encuentra regstrado
        this.alertasService.alerta('Ese correo electronico ya existe.');
      }
    }
  }

  validacion(){

    //Validación caracteres extraños en nombre
    var caracteres = /^([a-zA-ZÁÉÍÓÚáéíóú]{3,}\s[a-zA-ZÁÉÍÓÚáéíóú]{2,}\s?[a-zA-ZÁÉÍÓÚáéíóú]{2,})$/;

    if(caracteres.test(this.userRegistro.nombre) == false){

      return this.alertasService.alerta('El nombre  ingresado no es valido, evite caracteres especiales, recuerde ingresar ambos apellidos.');
    }
    //console.log(this.userRegistro.fechaNacimiento);

    if(this.userRegistro.nombre.length < 3){

      return this.alertasService.alerta('El nombre ingresado es demasiado corto, recuerde ingresar apellido.');
    }

    if(this.userRegistro.nombre.length > 50){

      return this.alertasService.alerta('El nombre ingresado es demasiado largo, intente ingresar primer nombre, apellido paterno y materno');
    }

    if(this.userRegistro.fechaNacimiento == null){

      return this.alertasService.alerta('Debe seleccionar una fecha de nacimiento.');
    }

    const today = new Date();
  
    //Validar que la fecha no sea mayor a la fecha actual
    if(this.userRegistro.fechaNacimiento > today.toISOString()){
      
      return this.alertasService.alerta('El día seleccionado no debe ser mayor a la fecha actual.');
    }

    //Validación de correo
    var correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(correo.test(this.userRegistro.email) == false){

      return this.alertasService.alerta('Debe ingresar un correo valido.');
    }

    if(this.userRegistro.email.length > 150){

      return this.alertasService.alerta('El correo electrónico no puede tener más de 150 caracteres.');
    }

    if(this.userRegistro.password.length < 6){

      return this.alertasService.alerta('La contraseña no puede tener menos de 6 caracteres.'); 
    }

    if(this.userRegistro.password.length > 100){

      return this.alertasService.alerta('La contraseña no puede tener más de 100 caracteres.'); 
    }
    
    //Validación de contraseñas
    if(this.repitaPassword != this.userRegistro.password){

      return this.alertasService.alerta('Las contraseñas no coinciden.'); 
    }
    
    //Validacion de rut
    if(!validate(this.userRegistro.rut)){
      return this.alertasService.alerta('El rut ingresado no es válido.');
    }

    //Validacion de direccion
    var caracteres3 = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ 0-9,#.]{3,150})+$/g;
    if(caracteres3.test(this.userRegistro.direccion) == false){

      return this.alertasService.alerta('La dirección ingresada contiene características inválidas.');
    }

    //Validación de campos vacios
     /* if(registrarse.invalid){
      this.alertasService.alerta('Complete los campos vacíos');
      return;
    } */

    return null;

  }

  login() {
    this.navCtrl.navigateRoot('/login');
  }
}
