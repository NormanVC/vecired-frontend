(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[8691],{8691:(i,e,o)=>{"use strict";o.r(e),o.d(e,{EditarAvisoPageModule:()=>m});var t=o(8583),n=o(665),a=o(7823),s=o(7860),r=o(4762),c=o(639),l=o(4975),g=o(5348),d=o(2478),u=o(4267);function p(i,e){if(1&i){const i=c.EpF();c.TgZ(0,"ion-item"),c.TgZ(1,"ion-label"),c.TgZ(2,"b"),c._uU(3,"Tipo aviso:"),c.qZA(),c.qZA(),c.TgZ(4,"ion-select",19),c.NdJ("ngModelChange",function(e){return c.CHM(i),c.oxw().avisoEdicion.tipoAviso=e}),c.TgZ(5,"ion-select-option",20),c._uU(6,"Emergencia"),c.qZA(),c.TgZ(7,"ion-select-option",21),c._uU(8,"Informaci\xf3n"),c.qZA(),c.TgZ(9,"ion-select-option",22),c._uU(10,"Otro"),c.qZA(),c.TgZ(11,"ion-select-option",23),c._uU(12,"Problema"),c.qZA(),c.qZA(),c.qZA()}if(2&i){const i=c.oxw();c.xp6(4),c.s9C("placeholder",i.tipoAvisoName),c.Q6J("ngModel",i.avisoEdicion.tipoAviso)}}function v(i,e){if(1&i){const i=c.EpF();c.TgZ(0,"ion-item"),c.TgZ(1,"ion-label"),c.TgZ(2,"b"),c._uU(3,"Tipo aviso:"),c.qZA(),c.qZA(),c.TgZ(4,"ion-select",19),c.NdJ("ngModelChange",function(e){return c.CHM(i),c.oxw().avisoEdicion.tipoAviso=e}),c.TgZ(5,"ion-select-option",20),c._uU(6,"Emergencia"),c.qZA(),c.TgZ(7,"ion-select-option",22),c._uU(8,"Otro"),c.qZA(),c.TgZ(9,"ion-select-option",23),c._uU(10,"Problema"),c.qZA(),c.qZA(),c.qZA()}if(2&i){const i=c.oxw();c.xp6(4),c.s9C("placeholder",i.tipoAvisoName),c.Q6J("ngModel",i.avisoEdicion.tipoAviso)}}function Z(i,e){if(1&i&&(c.TgZ(0,"ion-grid"),c.TgZ(1,"ion-card"),c._UZ(2,"img",24),c.qZA(),c.qZA()),2&i){const i=c.oxw();c.xp6(2),c.Q6J("src",i.imagenCarrete,c.LSH)}}const h=[{path:"",component:(()=>{class i{constructor(i,e,o,t,n){this.usuarioService=i,this.avisosService=e,this.navController=o,this.alertasService=t,this.camera=n,this.avisoEdicion={titulo:"",descripcion:"",tipoAviso:0},this.usuario={},this.tipoAvisoName="default",this.Roltype=[]}ngOnInit(){this.obtenerRolUsuario(),this.obtenerAvisoEditar()}editarAviso(){return(0,r.mG)(this,void 0,void 0,function*(){null==this.validacion()&&((yield this.avisosService.actualizarAviso(this.avisoEdicion))?(this.imagenCarrete="",this.Roltype=[],this.usuario={},this.avisoEdicion={titulo:"",descripcion:"",tipoAviso:0},this.navController.navigateRoot("/main/tabs/mis-avisos",{animated:!0}),this.alertasService.presentToast("Aviso actualizado exitosamente")):this.alertasService.presentToast("Aviso no se pudo actualizar"))})}obtenerRolUsuario(){this.usuario=this.usuarioService.obtenerRolUsuario(),this.Roltype[0]=this.usuario.rol}obtenerAvisoEditar(){this.avisosService.Objeto.subscribe(i=>{this.avisoEdicion=i,1==this.avisoEdicion.tipoAviso?this.tipoAvisoName="Emergencia":3==this.avisoEdicion.tipoAviso?this.tipoAvisoName="Informaci\xf3n":4==this.avisoEdicion.tipoAviso?this.tipoAvisoName="Otro":5==this.avisoEdicion.tipoAviso&&(this.tipoAvisoName="Problema")})}getImagen(){this.camera.getPicture({quality:50,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE,correctOrientation:!0,sourceType:this.camera.PictureSourceType.PHOTOLIBRARY}).then(i=>{const e=window.Ionic.WebView.convertFileSrc(i);this.avisosService.uploadImagen(i),this.imagenCarrete=e},i=>{console.log(i)})}ionViewWillEnter(){this.obtenerRolUsuario()}ionViewDidLeave(){this.imagenCarrete="",this.Roltype=[],this.usuario={},this.avisoEdicion={titulo:"",descripcion:"",tipoAviso:0}}validacion(){return 0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!?\xbf@-_.,/()= ]{1,50})+$/g.test(this.avisoEdicion.titulo)?this.alertasService.alerta("El t\xedtulo no permite tener caracteres especiales"):0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!?\xbf@-_.,/()= ]{1,250})+$/g.test(this.avisoEdicion.descripcion)?this.alertasService.alerta("La descripci\xf3n no permite tener caracteres especiales"):this.avisoEdicion.titulo.length>30?this.alertasService.alerta("T\xedtulo demasiado largo"):this.avisoEdicion.titulo.length<=2?this.alertasService.alerta("T\xedtulo debe tener m\xe1s de 3 caracteres"):this.avisoEdicion.descripcion.length>250?this.alertasService.alerta("Descripci\xf3n demasiada larga"):this.avisoEdicion.descripcion.length<=2?this.alertasService.alerta("Descripci\xf3n debe tener m\xe1s de caracteres"):0==this.avisoEdicion.tipoAviso?this.alertasService.alerta("Debe seleccionar un tipo de aviso"):null}}return i.\u0275fac=function(e){return new(e||i)(c.Y36(l.i),c.Y36(g.U),c.Y36(a.SH),c.Y36(d.e),c.Y36(u.V1))},i.\u0275cmp=c.Xpm({type:i,selectors:[["app-editar-aviso"]],decls:47,vars:8,consts:[[1,"cabecera"],["slot","start"],["defaultHref","/main/tabs/mis-avisos","color","light"],["color","light",1,"vecired"],["slot","end"],["disabled",""],[1,"ripple-parent"],[1,"avisosTitlte","ion-text-center"],["position","floating"],["type","text","maxlength","30","required","",3,"ngModel","ngModelChange"],[1,"caracteres"],["type","text","maxlength","250","required","",3,"ngModel","ngModelChange"],[4,"ngIf"],[2,"width","100%","margin-top","3%"],["size","6"],[2,"margin-top","4.5%"],["expand","full","shape","round",2,"margin-bottom","9%",3,"click"],["slot","start","name","images"],["color","tertiary","shape","round","expand","full",1,"editarAviso",2,"margin-top","30%",3,"disabled","click"],[3,"placeholder","ngModel","ngModelChange"],["value","1"],["value","3"],["value","4"],["value","5"],[1,"formatoImagen",3,"src"]],template:function(i,e){1&i&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button",2),c.qZA(),c.TgZ(4,"ion-title",3),c._uU(5,"VeciRed"),c.qZA(),c.TgZ(6,"ion-buttons",4),c.TgZ(7,"ion-button",5),c._UZ(8,"ion-icon"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"ion-content"),c.TgZ(10,"ion-grid"),c.TgZ(11,"div",6),c.TgZ(12,"ion-row"),c.TgZ(13,"ion-col",7),c.TgZ(14,"b"),c._uU(15,"EDITAR AVISO"),c.qZA(),c.qZA(),c.qZA(),c._UZ(16,"ion-ripple-effect"),c.qZA(),c.qZA(),c.TgZ(17,"ion-grid"),c.TgZ(18,"ion-item"),c.TgZ(19,"ion-label",8),c.TgZ(20,"b"),c._uU(21,"T\xedtulo:"),c.qZA(),c.qZA(),c.TgZ(22,"ion-input",9),c.NdJ("ngModelChange",function(i){return e.avisoEdicion.titulo=i}),c.qZA(),c.qZA(),c.TgZ(23,"span",10),c._uU(24),c.qZA(),c.TgZ(25,"ion-item"),c.TgZ(26,"ion-label",8),c.TgZ(27,"b"),c._uU(28,"Descripci\xf3n:"),c.qZA(),c.qZA(),c.TgZ(29,"ion-textarea",11),c.NdJ("ngModelChange",function(i){return e.avisoEdicion.descripcion=i}),c.qZA(),c.qZA(),c.TgZ(30,"span",10),c._uU(31),c.qZA(),c.YNc(32,p,13,2,"ion-item",12),c.YNc(33,v,11,2,"ion-item",12),c.TgZ(34,"ion-item"),c.TgZ(35,"ion-row",13),c.TgZ(36,"ion-col",14),c.TgZ(37,"ion-label",15),c.TgZ(38,"b"),c._uU(39,"Imagen:"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"ion-col",14),c.TgZ(41,"ion-button",16),c.NdJ("click",function(){return e.getImagen()}),c._UZ(42,"ion-icon",17),c._uU(43," Galer\xeda "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.YNc(44,Z,3,1,"ion-grid",12),c.TgZ(45,"ion-button",18),c.NdJ("click",function(){return e.editarAviso()}),c._uU(46," Actualizar "),c.qZA(),c.qZA(),c.qZA()),2&i&&(c.xp6(22),c.Q6J("ngModel",e.avisoEdicion.titulo),c.xp6(2),c.hij("",30-e.avisoEdicion.titulo.length," caracteres restantes"),c.xp6(5),c.Q6J("ngModel",e.avisoEdicion.descripcion),c.xp6(2),c.hij("",250-e.avisoEdicion.descripcion.length," caracteres restantes"),c.xp6(1),c.Q6J("ngIf",1==e.Roltype[0]),c.xp6(1),c.Q6J("ngIf",2==e.Roltype[0]),c.xp6(11),c.Q6J("ngIf",e.imagenCarrete),c.xp6(1),c.Q6J("disabled",e.avisoEdicion.titulo.length<=2||e.avisoEdicion.descripcion.length<=2||0==e.avisoEdicion.tipoAviso))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.YG,a.gu,a.W2,a.jY,a.Nd,a.wI,a.H$,a.Ie,a.Q$,a.pK,a.j9,n.nD,n.Q7,n.JJ,n.On,a.g2,t.O5,a.t9,a.QI,a.n0,a.PM],styles:[".avisosTitlte[_ngcontent-%COMP%]{margin-top:-1vw;font-family:monospace;font-size:x-large}.caracteres[_ngcontent-%COMP%]{font-size:small;margin-left:55%;color:grey}.formatoImagen[_ngcontent-%COMP%]{width:100%;height:250px;object-fit:cover;border:2px solid #241816}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[[t.ez,n.u5,a.Pc,A]]}),i})()}}]);