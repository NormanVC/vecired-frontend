(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[8643],{8643:(e,t,r)=>{"use strict";r.r(t),r.d(t,{RegistroPageModule:()=>p});var n=r(8583),o=r(665),i=r(7823),a=r(7860),s=r(4762),l=r(5873),c=r(639),g=r(4975),u=r(2478),d=r(9272);const m=[{path:"",component:(()=>{class e{constructor(e,t,r,n,o){this.navCtrl=e,this.usuarioService=t,this.alertasService=r,this.menuCtrl=n,this.rutService=o,this.maxTime=(new Date).toISOString(),this.userRegistro={nombre:"",fechaNacimiento:null,email:"",password:"",rut:"",direccion:""},this.veciRed={_id:"619f11e875415805c3424bbb",nombreComunidad:"Comunidad VeciRed"},this.repitaPassword="",this.menuCtrl.enable(!1,"first")}ngOnInit(){}formatearRut(e){return this.rutService.formatearRut(e)}registro(){return(0,s.mG)(this,void 0,void 0,function*(){null==this.validacion()&&((yield this.usuarioService.registro(this.userRegistro))?this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0}):this.alertasService.alerta("Ese correo electronico ya existe."))})}validacion(){if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd1 ]{3,50})+$/g.test(this.userRegistro.nombre))return this.alertasService.alerta("El nombre de usuario no permite tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 50.");if(console.log(this.userRegistro.fechaNacimiento),null==this.userRegistro.fechaNacimiento)return this.alertasService.alerta("Debe seleccionar una d\xeda.");const e=new Date;return this.userRegistro.fechaNacimiento>e.toISOString()?this.alertasService.alerta("El d\xeda seleccionado no debe ser mayor a la fecha actual."):0==/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.userRegistro.email)?this.alertasService.alerta("Debe ingresar un correo valido."):this.userRegistro.email.length>150?this.alertasService.alerta("El correo electr\xf3nico no puede tener m\xe1s de 150 caracteres."):this.userRegistro.password.length<6?this.alertasService.alerta("La contrase\xf1a no puede tener menos de 6 caracteres."):this.userRegistro.password.length>100?this.alertasService.alerta("La contrase\xf1a no puede tener m\xe1s de 100 caracteres."):this.repitaPassword!=this.userRegistro.password?this.alertasService.alerta("Las contrase\xf1as no coinciden."):(0,l.validate)(this.userRegistro.rut)?null:this.alertasService.alerta("El rut ingresado no es valido.")}login(){this.navCtrl.navigateRoot("/login")}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(i.SH),c.Y36(g.i),c.Y36(u.e),c.Y36(i._q),c.Y36(d.o))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-registro"]],decls:67,vars:13,consts:[[1,"ion-text-center"],["color","light",1,"vecired"],["src","/assets/icon/VeciRed.png"],[3,"ngSubmit"],["registrarse","ngForm"],["fixed",""],[1,"bg-transparent"],["color","none"],["position","floating","color","light",1,"my-label"],["name","person","item-start",""],["name","nombre","type","text","minlength","3","maxlength","50","placeholder","Manuel Rodriguez Soto","color","light","required","",1,"my-label",3,"ngModel","ngModelChange"],[1,"caracteres"],["name","calendar","item-start",""],["display-format","DD MMMM YYYY","name","fechaNacimiento","picker-format","DD MMMM YYYY","month-names","Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic","doneText","Aceptar","cancelText","Cancelar","required","",1,"my-label",3,"max","ngModel","ngModelChange"],["name","mail","item-start",""],["name","email","type","email","maxlength","150","placeholder","tucorreo@VeciRed.cl","color","light","color","light","required","",1,"my-label",3,"ngModel","ngModelChange"],["name","lock-closed","item-start",""],["name","password","type","password","maxlength","100","placeholder","\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf","color","light","required","",1,"my-label",3,"ngModel","ngModelChange"],["name","repitePass","type","password","maxlength","100","placeholder","\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf","color","light","required","",1,"my-label",3,"ngModel","ngModelChange"],["name","key","item-start",""],["name","rut","type","text","placeholder","12.345.678-9","color","light","required","",1,"my-label",3,"ngModel","ngModelChange","ionChange"],["name","home","item-start",""],["name","direccion","type","text","placeholder","Casimiro Zujomic #221,dto #320,Concepcion","color","light","required","",1,"my-label",3,"ngModel","ngModelChange"],["type","submit","color","tertiary","shape","round",1,"my-button"],[3,"click"],["color","light",1,"my-label"]],template:function(e,t){1&e&&(c.TgZ(0,"ion-content",0),c.TgZ(1,"ion-row"),c.TgZ(2,"ion-col"),c.TgZ(3,"h4"),c.TgZ(4,"ion-text",1),c._uU(5," VeciRed "),c.qZA(),c.qZA(),c.TgZ(6,"div"),c._UZ(7,"img",2),c.qZA(),c.qZA(),c.qZA(),c.TgZ(8,"form",3,4),c.NdJ("ngSubmit",function(){return t.registro()}),c.TgZ(10,"ion-grid",5),c.TgZ(11,"ion-row"),c.TgZ(12,"ion-col"),c.TgZ(13,"ion-list",6),c.TgZ(14,"ion-item",7),c.TgZ(15,"ion-label",8),c._UZ(16,"ion-icon",9),c._uU(17," Nombre "),c.qZA(),c.TgZ(18,"ion-input",10),c.NdJ("ngModelChange",function(e){return t.userRegistro.nombre=e}),c.qZA(),c.qZA(),c.TgZ(19,"span",11),c._uU(20),c.qZA(),c.TgZ(21,"ion-item",7),c.TgZ(22,"ion-label",8),c._UZ(23,"ion-icon",12),c._uU(24," Fecha Nacimiento "),c.qZA(),c.TgZ(25,"ion-datetime",13),c.NdJ("ngModelChange",function(e){return t.userRegistro.fechaNacimiento=e}),c.qZA(),c.qZA(),c.TgZ(26,"ion-item",7),c.TgZ(27,"ion-label",8),c._UZ(28,"ion-icon",14),c._uU(29," Correo Electr\xf3nico "),c.qZA(),c.TgZ(30,"ion-input",15),c.NdJ("ngModelChange",function(e){return t.userRegistro.email=e}),c.qZA(),c.qZA(),c.TgZ(31,"span",11),c._uU(32),c.qZA(),c.TgZ(33,"ion-item",7),c.TgZ(34,"ion-label",8),c._UZ(35,"ion-icon",16),c._uU(36," Contrase\xf1a "),c.qZA(),c.TgZ(37,"ion-input",17),c.NdJ("ngModelChange",function(e){return t.userRegistro.password=e}),c.qZA(),c.qZA(),c.TgZ(38,"span",11),c._uU(39),c.qZA(),c.TgZ(40,"ion-item",7),c.TgZ(41,"ion-label",8),c._UZ(42,"ion-icon",16),c._uU(43," Repita Contrase\xf1a "),c.qZA(),c.TgZ(44,"ion-input",18),c.NdJ("ngModelChange",function(e){return t.repitaPassword=e}),c.qZA(),c.qZA(),c.TgZ(45,"span",11),c._uU(46),c.qZA(),c.TgZ(47,"ion-item",7),c.TgZ(48,"ion-label",8),c._UZ(49,"ion-icon",19),c._uU(50," RUT "),c.qZA(),c.TgZ(51,"ion-input",20),c.NdJ("ngModelChange",function(e){return t.userRegistro.rut=e})("ionChange",function(){return t.userRegistro.rut=t.formatearRut(t.userRegistro.rut)}),c.qZA(),c.qZA(),c.TgZ(52,"ion-item",7),c.TgZ(53,"ion-label",8),c._UZ(54,"ion-icon",21),c._uU(55," Direcci\xf3n "),c.qZA(),c.TgZ(56,"ion-input",22),c.NdJ("ngModelChange",function(e){return t.userRegistro.direccion=e}),c.qZA(),c.qZA(),c.TgZ(57,"span",11),c._uU(58),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(59,"ion-row"),c.TgZ(60,"ion-col"),c.TgZ(61,"ion-button",23),c._uU(62," Registrarse "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(63,"p",24),c.NdJ("click",function(){return t.login()}),c.TgZ(64,"ion-text",25),c.TgZ(65,"strong"),c._uU(66,"Ya tengo cuenta"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(18),c.Q6J("ngModel",t.userRegistro.nombre),c.xp6(2),c.hij("",50-t.userRegistro.nombre.length," caracteres restantes"),c.xp6(5),c.Q6J("max",t.maxTime)("ngModel",t.userRegistro.fechaNacimiento),c.xp6(5),c.Q6J("ngModel",t.userRegistro.email),c.xp6(2),c.hij("",150-t.userRegistro.email.length," caracteres restantes"),c.xp6(5),c.Q6J("ngModel",t.userRegistro.password),c.xp6(2),c.hij("",100-t.userRegistro.password.length," caracteres restantes"),c.xp6(5),c.Q6J("ngModel",t.repitaPassword),c.xp6(2),c.hij("",100-t.repitaPassword.length," caracteres restantes"),c.xp6(5),c.Q6J("ngModel",t.userRegistro.rut),c.xp6(5),c.Q6J("ngModel",t.userRegistro.direccion),c.xp6(2),c.hij("",150-t.userRegistro.direccion.length," caracteres restantes"))},directives:[i.W2,i.Nd,i.wI,i.yW,o._Y,o.JL,o.F,i.jY,i.q_,i.Ie,i.Q$,i.gu,i.pK,i.j9,o.wO,o.nD,o.Q7,o.JJ,o.On,i.x4,i.QI,i.YG],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0);--padding-top:10px}img[_ngcontent-%COMP%]{width:60px}.bg-transparent[_ngcontent-%COMP%]{background:#0000}.my-label[_ngcontent-%COMP%]{font-size:18px;color:#f0f8ff}ion-item[_ngcontent-%COMP%]{--padding-top:4px}.my-button[_ngcontent-%COMP%]{margin-top:2em}ion-datetime[_ngcontent-%COMP%]{color:#fff}.caracteres[_ngcontent-%COMP%]{font-size:small;margin-left:55%;color:#fff}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,o.u5,i.Pc,h]]}),e})()},2478:(e,t,r)=>{"use strict";r.d(t,{e:()=>a});var n=r(4762),o=r(639),i=r(7823);let a=(()=>{class e{constructor(e,t){this.alertController=e,this.toastController=t}alerta(e){return(0,n.mG)(this,void 0,void 0,function*(){const t=yield this.alertController.create({cssClass:"my-custom-class",message:e,buttons:[{text:"Ok",role:"cancel"}]});yield t.present(),yield t.onDidDismiss()})}alertaDecision(e){return(0,n.mG)(this,void 0,void 0,function*(){let t;const r=yield this.alertController.create({backdropDismiss:!1,message:e,buttons:[{text:"ACEPTAR",handler:()=>(r.dismiss(!0),!1)},{text:"Cancelar"}]});return yield r.present(),yield r.onDidDismiss().then(e=>{t=e}),t})}presentToast(e){return(0,n.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,position:"bottom",duration:1800})).present()})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(i.Br),o.LFG(i.yF))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);