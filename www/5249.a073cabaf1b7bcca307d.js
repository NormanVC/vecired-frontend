(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[5249],{5249:(e,o,t)=>{"use strict";t.r(o),t.d(o,{Tab3PageModule:()=>d});var n=t(7823),i=t(7860),r=t(8583),a=t(665),c=t(639),s=t(4975);let u=(()=>{class e{constructor(e){this.usuarioService=e,this.usuario={}}ngOnInit(){this.obtenerUsuario()}obtenerUsuario(){this.usuarioService.obtenerDataPerfil().subscribe(e=>{this.usuario=e.usuarioBD;const o=new r.uU("en-US");let t=new Date(this.usuario.fechaNacimiento);console.log(t),this.usuario.fechaNacimiento=o.transform(t," dd-MM-YYYY")})}}return e.\u0275fac=function(o){return new(o||e)(c.Y36(s.i))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-tab3"]],decls:33,vars:3,consts:[[1,"cabecera"],["slot","start"],["defaultHref","/main/tabs/tab1","color","light"],["color","light",1,"vecired"],["slot","end"],["disabled",""],[1,"ripple-parent"],[1,"avisosTitlte","ion-text-center"],[2,"text-align","center"],[1,"perfile","ion-text-center"],[1,"textiee"],["slot","start","name","id-card-outline",2,"color","black"],["slot","start","name","mail-outline",2,"color","black"],["slot","start","name","calendar-outline",2,"color","black"],["routerLink","/main/tabs/condiciones","color","secondary","shape","round","expand","full",2,"margin-top","20%"]],template:function(e,o){1&e&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button",2),c.qZA(),c.TgZ(4,"ion-title",3),c._uU(5,"VeciRed"),c.qZA(),c.TgZ(6,"ion-buttons",4),c.TgZ(7,"ion-button",5),c._UZ(8,"ion-icon"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"ion-content"),c.TgZ(10,"ion-grid"),c.TgZ(11,"div",6),c.TgZ(12,"ion-row"),c.TgZ(13,"ion-col",7),c.TgZ(14,"b"),c._uU(15,"MI PERFIL"),c.qZA(),c.qZA(),c.qZA(),c._UZ(16,"ion-ripple-effect"),c.qZA(),c.qZA(),c.TgZ(17,"ion-grid"),c.TgZ(18,"h3",8),c.TgZ(19,"b"),c._uU(20," Datos personales"),c.qZA(),c.qZA(),c.TgZ(21,"ion-list",9),c.TgZ(22,"ion-item",10),c._UZ(23,"ion-icon",11),c._uU(24),c.qZA(),c.TgZ(25,"ion-item"),c._UZ(26,"ion-icon",12),c._uU(27),c.qZA(),c.TgZ(28,"ion-item"),c._UZ(29,"ion-icon",13),c._uU(30),c.qZA(),c.qZA(),c.TgZ(31,"ion-button",14),c._uU(32," Condiciones de uso "),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(24),c.hij(" ",o.usuario.nombre," "),c.xp6(3),c.hij(" ",o.usuario.email," "),c.xp6(3),c.hij(" ",o.usuario.fechaNacimiento," "))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.wd,n.YG,n.gu,n.W2,n.jY,n.Nd,n.wI,n.H$,n.q_,n.Ie,n.YI,i.rH],styles:[".avisosTitlte[_ngcontent-%COMP%]{margin-top:-1vw;font-family:monospace;font-size:x-large}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),e})();var l=t(581);const Z=[{path:"",component:u}];let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[i.Bz.forChild(Z)],i.Bz]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.Pc,r.ez,a.u5,l.e,i.Bz.forChild([{path:"",component:u}]),g]]}),e})()}}]);