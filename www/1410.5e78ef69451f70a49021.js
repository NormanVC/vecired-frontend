(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[1410],{5369:(e,i,t)=>{"use strict";t.d(i,{r:()=>a});var o=t(8583),n=t(7823),r=t(5503),c=t(665),s=t(639);let a=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,n.Pc,r.D,c.u5]]}),e})()},1410:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GestCertPageModule:()=>h});var o=t(8583),n=t(665),r=t(7823),c=t(7860),s=t(639),a=t(2977),l=t(2478);function d(e,i){1&e&&(s.TgZ(0,"ion-grid"),s.TgZ(1,"ion-card",14),s._UZ(2,"img",15),s.TgZ(3,"h3",16),s.TgZ(4,"b"),s._uU(5,"No existen solicitudes de certificado en tu comunidad."),s.qZA(),s.qZA(),s.qZA(),s.qZA())}function u(e,i){if(1&e){const e=s.EpF();s.TgZ(0,"ion-col",17),s.TgZ(1,"ion-card",18),s.TgZ(2,"ion-card-header"),s.TgZ(3,"ion-card-subtitle",19),s._UZ(4,"ion-icon",20),s._uU(5),s.qZA(),s.TgZ(6,"ion-card-subtitle",19),s._UZ(7,"ion-icon",21),s._uU(8),s.qZA(),s.TgZ(9,"ion-card-title",22),s.TgZ(10,"b"),s._uU(11),s.qZA(),s.qZA(),s.TgZ(12,"ion-card-content",19),s._UZ(13,"ion-icon",23),s._uU(14),s.TgZ(15,"ion-row"),s.TgZ(16,"ion-col"),s.TgZ(17,"ion-button",24),s.NdJ("click",function(){const i=s.CHM(e).$implicit;return s.oxw().aprobarSolicitud(i._id)}),s._uU(18," aceptar "),s.qZA(),s.qZA(),s.TgZ(19,"ion-col"),s.TgZ(20,"ion-button",25),s.NdJ("click",function(){const i=s.CHM(e).$implicit;return s.oxw().rechazarSolicitud(i._id)}),s._uU(21," rechazar "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=i.$implicit;s.xp6(5),s.hij(" ",e.comunidad.nombreComunidad," "),s.xp6(3),s.hij(" ",e.certificado.titulo," "),s.xp6(3),s.Oqu(e.usuario.nombre),s.xp6(3),s.hij(" ",e.motivo," ")}}function g(e,i){1&e&&(s.TgZ(0,"div",26),s.TgZ(1,"p"),s._uU(2,"No hay m\xe1s solicitudes de certificado disponibles."),s.qZA(),s.qZA())}const m=[{path:"",component:(()=>{class e{constructor(e,i){this.emisorService=e,this.alertaService=i,this.emisores=[],this.emptySolicitud=!1,this.infiniteScroll=!0,this.pagina=1}ngOnInit(){this.emisores=[],this.obtenerSolicitudes()}obtenerSolicitudes(e){this.emisorService.getEmisor(this.pagina).subscribe(i=>{const t=i.emisor;if(0===t.length)return this.infiniteScroll=!1,1===this.pagina&&(this.emptySolicitud=!0),void(e&&e.target.complete());this.emisores=this.emisores.concat(t),this.pagina++,e&&e.target.complete()},i=>{console.error("Error al obtener las solicitudes:",i),e&&e.target.complete()})}cargarNuevos(e){this.infiniteScroll=!0,this.obtenerSolicitudes(e)}pull2refresh(e){window.location.reload()}aprobarSolicitud(e){this.alertaService.alertaDecision("\xbfDesea aceptar a este usuario?").then(i=>{this.aceptar=i.data,!0===this.aceptar?this.emisorService.aceptarSolicitud(e).subscribe(e=>{window.location.reload()},e=>{console.error("Error al aprobar la solicitud: ",e)}):this.alertaService.presentToast("Operaci\xf3n cancelada")})}rechazarSolicitud(e){this.alertaService.alertaDecision("\xbfDesea rechazar a este usuario?").then(i=>{this.aceptar=i.data,!0===this.aceptar?this.emisorService.rechazarSolicitud(e).subscribe(e=>{window.location.reload()},e=>{console.error("Error al rechazar la solicitud: ",e)}):this.alertaService.presentToast("Operaci\xf3n cancelada")})}}return e.\u0275fac=function(i){return new(i||e)(s.Y36(a.i),s.Y36(l.e))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-gest-cert"]],decls:25,vars:3,consts:[[1,"cabecera"],["slot","start"],["menu","first","color","light"],["color","light",1,"vecired"],["slot","end"],["disabled",""],[1,"ripple-parent"],[1,"emisorTitle","ion-text-center"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["size","12","size-lg","3","size-md","4","size-sm","6","size-xs","12",4,"ngFor","ngForOf"],[3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando m\xe1s certificados."],["class","nomasSolicitudes",4,"ngIf"],[1,"ion-text-center","noEmit"],["src","/../../assets/noComunity.png",1,"noEmitImage"],[1,"noEmitTitle"],["size","12","size-lg","3","size-md","4","size-sm","6","size-xs","12"],[1,"emisorUnitario"],[1,"fontColor","ion-text-center"],["name","body"],["name","document-text-outline"],[1,"ion-text-center"],["name","chatbubble-ellipses-outline"],["id","aceptarVe","color","success","size","small",1,"aceptarVecino",2,"width","84%",3,"click"],["color","danger","size","small",1,"rechazarVecino",3,"click"],[1,"nomasSolicitudes"]],template:function(e,i){1&e&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar",0),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-menu-button",2),s.qZA(),s.TgZ(4,"ion-title",3),s._uU(5," VeciRed "),s.qZA(),s.TgZ(6,"ion-buttons",4),s.TgZ(7,"ion-button",5),s._UZ(8,"ion-icon"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"ion-content"),s.TgZ(10,"ion-grid"),s.TgZ(11,"div",6),s.TgZ(12,"ion-row"),s.TgZ(13,"ion-col",7),s.TgZ(14,"b"),s._uU(15,"SOLICITUDES DE CERTIFICADOS DE MI COMUNIDAD"),s.qZA(),s.qZA(),s.qZA(),s._UZ(16,"ion-ripple-effect"),s.qZA(),s.qZA(),s.YNc(17,d,6,0,"ion-grid",8),s.TgZ(18,"ion-refresher",9),s.NdJ("ionRefresh",function(e){return i.pull2refresh(e)}),s._UZ(19,"ion-refresher-content"),s.qZA(),s.TgZ(20,"ion-row"),s.YNc(21,u,22,4,"ion-col",10),s.qZA(),s.TgZ(22,"ion-infinite-scroll",11),s.NdJ("ionInfinite",function(e){return i.cargarNuevos(e)}),s._UZ(23,"ion-infinite-scroll-content",12),s.qZA(),s.YNc(24,g,3,0,"div",13),s.qZA()),2&e&&(s.xp6(17),s.Q6J("ngIf",i.emptySolicitud),s.xp6(4),s.Q6J("ngForOf",i.emisores),s.xp6(3),s.Q6J("ngIf",!i.infiniteScroll&&!i.emptySolicitud))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.wd,r.YG,r.gu,r.W2,r.jY,r.Nd,r.wI,r.H$,o.O5,r.nJ,r.Wo,o.sg,r.ju,r.MB,r.PM,r.Zi,r.tO,r.gZ,r.FN],styles:[".cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.noEmit[_ngcontent-%COMP%]{background-color:#afeeee;border:2px solid #241816;border-bottom-left-radius:9%;border-bottom-right-radius:9%;border-top-left-radius:9%;border-top-right-radius:9%;box-shadow:0 0 2em rgba(30,30,31,.932)}.noEmitTitle[_ngcontent-%COMP%]{color:#000;text-align:center;font-family:monospace}.noEmitImage[_ngcontent-%COMP%]{width:40%;height:50%;max-height:70%}.emisorUnitario[_ngcontent-%COMP%]{box-shadow:0 0 2em rgba(30,30,31,.932);background-color:#ecebeb}.emisorTitle[_ngcontent-%COMP%]{margin-top:-1vw;font-family:monospace;font-size:x-large}.nomasSolicitudes[_ngcontent-%COMP%]{text-align:center;padding:10px;color:#777}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(m)],c.Bz]}),e})();var p=t(5369);let h=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,n.u5,r.Pc,Z,p.r]]}),e})()},5503:(e,i,t)=>{"use strict";t.d(i,{D:()=>n});var o=t(639);let n=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({}),e})()}}]);