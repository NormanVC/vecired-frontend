(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[6023],{6023:(i,e,t)=>{"use strict";t.r(e),t.d(e,{Tab2PageModule:()=>m});var n=t(7823),o=t(8583),s=t(665),r=t(581),c=t(7860),a=t(4762),l=t(639),u=t(9859),d=t(4212),h=t(4975);function f(i,e){1&i&&(l.TgZ(0,"ion-grid"),l.TgZ(1,"ion-card",14),l._UZ(2,"img",15),l.TgZ(3,"h3",16),l.TgZ(4,"b"),l._uU(5,"No s\xe9 registrado actividad en la comunidad"),l.qZA(),l.qZA(),l.qZA(),l.qZA())}function g(i,e){if(1&i&&(l.TgZ(0,"ion-item"),l.TgZ(1,"ion-label"),l.TgZ(2,"h3"),l._uU(3),l.qZA(),l.TgZ(4,"p"),l._uU(5),l.qZA(),l.qZA(),l.qZA()),2&i){const i=e.$implicit;l.xp6(3),l.Oqu(i.title),l.xp6(2),l.Oqu(i.body)}}const Z=[{path:"",component:(()=>{class i{constructor(i,e,t,n){this.pushService=i,this.applicationRef=e,this.comunidadService=t,this.usuarioService=n,this.mensajes=[],this.deshabilitar=!1,this.Comunidad=[],this.Idcomunidad="",this.usuario={},this.emptyNotificaciones=!1}ngOnInit(){this.scroll(),this.pushService.pushListener.subscribe(i=>{this.emptyNotificaciones=!1,this.mensajes.unshift(i),this.applicationRef.tick()})}refresh(i){this.scroll(i,!0),this.deshabilitar=!1,this.mensajes=[]}scroll(i,e=!1){return(0,a.mG)(this,void 0,void 0,function*(){this.emptyNotificaciones=!1;var t=yield this.pushService.getMensajes(e);this.mensajes.push(...t),0===t.length&&(this.emptyNotificaciones=!0),i&&(i.target.complete(),0===t.length&&(this.deshabilitar=!0))})}}return i.\u0275fac=function(e){return new(e||i)(l.Y36(u._),l.Y36(l.z2F),l.Y36(d.P),l.Y36(h.i))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-tab2"]],decls:21,vars:5,consts:[[3,"translucent"],[1,"cabecera"],["slot","start"],["menu","first","color","light"],["color","light",1,"vecired"],["slot","end"],["disabled",""],[3,"fullscreen"],[1,"titulo"],[1,"ion-text-center"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[4,"ngFor","ngForOf"],["threshold","100px",3,"disabled","ionInfinite"],[1,"ion-text-center","sinNotificaciones"],["src","/../../assets/noComunity.png",1,"sinNotificacionesImagen"],[1,"sinNotificacionesTitulo"]],template:function(i,e){1&i&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar",1),l.TgZ(2,"ion-buttons",2),l._UZ(3,"ion-menu-button",3),l.qZA(),l.TgZ(4,"ion-title",4),l._uU(5," VeciRed "),l.qZA(),l.TgZ(6,"ion-buttons",5),l.TgZ(7,"ion-button",6),l._UZ(8,"ion-icon"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"ion-content",7),l.TgZ(10,"ion-list"),l.TgZ(11,"div",8),l.TgZ(12,"h4",9),l.TgZ(13,"b"),l._uU(14,"NOTIFICACIONES"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(15,"ion-refresher",10),l.NdJ("ionRefresh",function(i){return e.refresh(i)}),l._UZ(16,"ion-refresher-content"),l.qZA(),l.YNc(17,f,6,0,"ion-grid",11),l.YNc(18,g,6,2,"ion-item",12),l.qZA(),l.TgZ(19,"ion-infinite-scroll",13),l.NdJ("ionInfinite",function(i){return e.scroll(i)}),l._UZ(20,"ion-infinite-scroll-content"),l.qZA(),l.qZA()),2&i&&(l.Q6J("translucent",!0),l.xp6(9),l.Q6J("fullscreen",!0),l.xp6(8),l.Q6J("ngIf",e.emptyNotificaciones),l.xp6(1),l.Q6J("ngForOf",e.mensajes),l.xp6(1),l.Q6J("disabled",e.deshabilitar))},directives:[n.Gu,n.sr,n.Sm,n.fG,n.wd,n.YG,n.gu,n.W2,n.q_,n.nJ,n.Wo,o.O5,o.sg,n.ju,n.MB,n.jY,n.PM,n.Ie,n.Q$],styles:[".cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.sinNotificaciones[_ngcontent-%COMP%]{background-color:#afeeee;border:2px solid #241816;border-bottom-left-radius:9%;border-bottom-right-radius:9%;border-top-left-radius:9%;border-top-right-radius:9%;box-shadow:0 0 2em rgba(30,30,31,.932)}.sinNotificacionesTitulo[_ngcontent-%COMP%]{color:#000;text-align:center;font-family:monospace}.sinNotificacionesImagen[_ngcontent-%COMP%]{width:40%;height:50%;max-height:70%}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),i})()}];let p=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[n.Pc,o.ez,s.u5,r.e,p]]}),i})()}}]);