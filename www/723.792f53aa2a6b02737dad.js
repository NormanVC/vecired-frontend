(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[723],{5369:(e,i,t)=>{"use strict";t.d(i,{r:()=>c});var o=t(8583),n=t(7823),r=t(5503),s=t(665),a=t(639);let c=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,n.Pc,r.D,s.u5]]}),e})()},723:(e,i,t)=>{"use strict";t.r(i),t.d(i,{CrearAvisoPageModule:()=>q});var o=t(8583),n=t(665),r=t(7823),s=t(7860),a=t(4762),c=t(6175),l=t(639),g=t(5348),u=t(4267),d=t(2478),p=t(4975),h=t(9859);function v(e,i){if(1&e){const e=l.EpF();l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l.TgZ(2,"b"),l._uU(3,"Tipo aviso:"),l.qZA(),l.qZA(),l.TgZ(4,"ion-select",20),l.NdJ("ngModelChange",function(i){return l.CHM(e),l.oxw().aviso.tipoAviso=i}),l.TgZ(5,"ion-select-option",21),l._uU(6,"Emergencia"),l.qZA(),l.TgZ(7,"ion-select-option",22),l._uU(8,"Informaci\xf3n"),l.qZA(),l.TgZ(9,"ion-select-option",23),l._uU(10,"Otro"),l.qZA(),l.TgZ(11,"ion-select-option",24),l._uU(12,"Problema"),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=l.oxw();l.xp6(4),l.Q6J("ngModel",e.aviso.tipoAviso)}}function Z(e,i){if(1&e){const e=l.EpF();l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l.TgZ(2,"b"),l._uU(3,"Tipo aviso:"),l.qZA(),l.qZA(),l.TgZ(4,"ion-select",20),l.NdJ("ngModelChange",function(i){return l.CHM(e),l.oxw().aviso.tipoAviso=i}),l.TgZ(5,"ion-select-option",21),l._uU(6,"Emergencia"),l.qZA(),l.TgZ(7,"ion-select-option",23),l._uU(8,"Otro"),l.qZA(),l.TgZ(9,"ion-select-option",24),l._uU(10,"Problema"),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=l.oxw();l.xp6(4),l.Q6J("ngModel",e.aviso.tipoAviso)}}function m(e,i){if(1&e&&(l.TgZ(0,"ion-grid"),l.TgZ(1,"ion-card"),l._UZ(2,"img",25),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(2),l.Q6J("src",e.imagenCarrete,l.LSH)}}const A=[{path:"",component:(()=>{class e{constructor(e,i,t,o,n,r,s){this.ruta=e,this.avisosService=i,this.camera=t,this.alertasService=o,this.modalController=n,this.usuarioService=r,this.pushService=s,this.aviso={titulo:"",descripcion:"",tipoAviso:0},this.Roltype=[],this.usuario={}}ngOnInit(){}crearAviso(){return(0,a.mG)(this,void 0,void 0,function*(){null==this.validacion()&&(yield this.avisosService.crearNuevoAviso(this.aviso),1==this.aviso.tipoAviso&&this.pushService.enviarNotificacion(this.aviso.titulo,this.aviso.descripcion),this.aviso={titulo:"",descripcion:"",tipoAviso:0},this.imagenCarrete="",this.Roltype=[],this.usuario={},this.ruta.navigateByUrl("main/tabs/tab1"),this.alertasService.presentToast("Aviso publicado exitosamente"))})}getImagen(){this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(e=>{const i=window.Ionic.WebView.convertFileSrc(e);this.avisosService.uploadImagen(e),this.imagenCarrete=i},e=>{console.log(e)})}openModal(){return(0,a.mG)(this,void 0,void 0,function*(){const e=yield this.modalController.create({component:c.$});yield e.present()})}obtenerRolUsuario(){this.usuarioService.obtenerRolBD().subscribe(e=>{this.rol=e.currentRol})}ionViewWillEnter(){this.aviso={titulo:"",descripcion:"",tipoAviso:0},this.imagenCarrete="",this.Roltype=[],this.usuario={},this.obtenerRolUsuario()}validacion(){return 0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!?\xbf@-_.,/()= ]{1,50})+$/g.test(this.aviso.titulo)?this.alertasService.alerta("El t\xedtulo no permite tener caracteres especiales"):0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!?\xbf@-_.,/()= ]{1,250})+$/g.test(this.aviso.descripcion)?this.alertasService.alerta("La descripci\xf3n no permite tener caracteres especiales"):this.aviso.titulo.length>30?this.alertasService.alerta("T\xedtulo demasiado largo"):this.aviso.titulo.length<=2?this.alertasService.alerta("T\xedtulo debe tener m\xe1s de 3 caracteres"):this.aviso.descripcion.length>250?this.alertasService.alerta("Descripci\xf3n demasiada larga"):this.aviso.descripcion.length<=2?this.alertasService.alerta("Descripci\xf3n debe tener m\xe1s de 3 caracteres"):0==this.aviso.tipoAviso?this.alertasService.alerta("Debe seleccionar un tipo aviso"):null}}return e.\u0275fac=function(i){return new(i||e)(l.Y36(s.F0),l.Y36(g.U),l.Y36(u.V1),l.Y36(d.e),l.Y36(r.IN),l.Y36(p.i),l.Y36(h._))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-crear-aviso"]],decls:47,vars:8,consts:[[1,"cabecera"],["slot","start"],["defaultHref","/main/tabs/tab1","color","light"],["color","light",1,"vecired"],["slot","end","color","light",3,"click"],["slot","icon-only","name","help-circle-outline","color","light"],["padding",""],[1,"ripple-parent"],[1,"avisosTitlte","ion-text-center"],["position","floating"],["type","text","minlength","3","maxlength","30","required","",3,"ngModel","ngModelChange"],[1,"caracteres"],["type","text","minlength","3","maxlength","250","required","",3,"ngModel","ngModelChange"],[4,"ngIf"],[2,"width","100%","margin-top","3%"],["size","6"],[2,"margin-top","4.5%"],["expand","full","shape","round",2,"margin-bottom","9%",3,"click"],["slot","start","name","images"],["color","tertiary","shape","round","expand","full",1,"crearAviso",2,"margin-top","30%",3,"disabled","click"],["placeholder","Seleccione",3,"ngModel","ngModelChange"],["value","1"],["value","3"],["value","4"],["value","5"],[1,"formatoImagen",3,"src"]],template:function(e,i){1&e&&(l.TgZ(0,"ion-header"),l.TgZ(1,"ion-toolbar",0),l.TgZ(2,"ion-buttons",1),l._UZ(3,"ion-back-button",2),l.qZA(),l.TgZ(4,"ion-title",3),l._uU(5,"VeciRed"),l.qZA(),l.TgZ(6,"ion-buttons",4),l.NdJ("click",function(){return i.openModal()}),l._UZ(7,"ion-icon",5),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"ion-content",6),l.TgZ(9,"ion-grid"),l.TgZ(10,"div",7),l.TgZ(11,"ion-row"),l.TgZ(12,"ion-col",8),l.TgZ(13,"b"),l._uU(14,"CREAR AVISO"),l.qZA(),l.qZA(),l.qZA(),l._UZ(15,"ion-ripple-effect"),l.qZA(),l.qZA(),l.TgZ(16,"ion-grid"),l.TgZ(17,"ion-list"),l.TgZ(18,"ion-item"),l.TgZ(19,"ion-label",9),l.TgZ(20,"b"),l._uU(21,"T\xedtulo:"),l.qZA(),l.qZA(),l.TgZ(22,"ion-input",10),l.NdJ("ngModelChange",function(e){return i.aviso.titulo=e}),l.qZA(),l.qZA(),l.TgZ(23,"span",11),l._uU(24),l.qZA(),l.TgZ(25,"ion-item"),l.TgZ(26,"ion-label",9),l.TgZ(27,"b"),l._uU(28,"Descripci\xf3n:"),l.qZA(),l.qZA(),l.TgZ(29,"ion-textarea",12),l.NdJ("ngModelChange",function(e){return i.aviso.descripcion=e}),l.qZA(),l.qZA(),l.TgZ(30,"span",11),l._uU(31),l.qZA(),l.YNc(32,v,13,1,"ion-item",13),l.YNc(33,Z,11,1,"ion-item",13),l.TgZ(34,"ion-item"),l.TgZ(35,"ion-row",14),l.TgZ(36,"ion-col",15),l.TgZ(37,"ion-label",16),l.TgZ(38,"b"),l._uU(39,"Imagen:"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(40,"ion-col",15),l.TgZ(41,"ion-button",17),l.NdJ("click",function(){return i.getImagen()}),l._UZ(42,"ion-icon",18),l._uU(43," Galer\xeda "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(44,m,3,1,"ion-grid",13),l.TgZ(45,"ion-button",19),l.NdJ("click",function(){return i.crearAviso()}),l._uU(46," Publicar "),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(22),l.Q6J("ngModel",i.aviso.titulo),l.xp6(2),l.hij("",30-i.aviso.titulo.length," caracteres restantes "),l.xp6(5),l.Q6J("ngModel",i.aviso.descripcion),l.xp6(2),l.hij("",250-i.aviso.descripcion.length," caracteres restantes"),l.xp6(1),l.Q6J("ngIf",1==i.rol),l.xp6(1),l.Q6J("ngIf",2==i.rol),l.xp6(11),l.Q6J("ngIf",i.imagenCarrete),l.xp6(1),l.Q6J("disabled",i.aviso.titulo.length<=2||i.aviso.descripcion.length<=2||0==i.aviso.tipoAviso))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.gu,r.W2,r.jY,r.Nd,r.wI,r.H$,r.q_,r.Ie,r.Q$,r.pK,r.j9,n.wO,n.nD,n.Q7,n.JJ,n.On,r.g2,o.O5,r.YG,r.t9,r.QI,r.n0,r.PM],styles:[".avisosTitlte[_ngcontent-%COMP%]{margin-top:-1vw;font-family:monospace;font-size:x-large}.caracteres[_ngcontent-%COMP%]{font-size:small;margin-left:55%;color:grey}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.formatoImagen[_ngcontent-%COMP%]{width:100%;height:250px;object-fit:cover;border:2px solid #241816}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),e})();var f=t(5369);let q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[o.ez,n.u5,r.Pc,T,f.r]]}),e})()},5503:(e,i,t)=>{"use strict";t.d(i,{D:()=>n});var o=t(639);let n=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})()},2478:(e,i,t)=>{"use strict";t.d(i,{e:()=>s});var o=t(4762),n=t(639),r=t(7823);let s=(()=>{class e{constructor(e,i){this.alertController=e,this.toastController=i}alerta(e){return(0,o.mG)(this,void 0,void 0,function*(){const i=yield this.alertController.create({cssClass:"my-custom-class",message:e,buttons:[{text:"Ok",role:"cancel"}]});yield i.present(),yield i.onDidDismiss()})}alertaDecision(e){return(0,o.mG)(this,void 0,void 0,function*(){let i;const t=yield this.alertController.create({backdropDismiss:!1,message:e,buttons:[{text:"ACEPTAR",handler:()=>(t.dismiss(!0),!1)},{text:"Cancelar"}]});return yield t.present(),yield t.onDidDismiss().then(e=>{i=e}),i})}presentToast(e){return(0,o.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,position:"bottom",duration:1800})).present()})}}return e.\u0275fac=function(i){return new(i||e)(n.LFG(r.Br),n.LFG(r.yF))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);