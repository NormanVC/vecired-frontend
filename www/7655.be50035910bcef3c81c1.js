(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[7655],{1692:(o,i,e)=>{"use strict";e.r(i),e.d(i,{VerDocPageModule:()=>g});var n=e(8583),t=e(665),r=e(7823),c=e(7860),a=e(639),s=e(2977);const l=[{path:"",component:(()=>{class o{constructor(o,i){this.ruta=o,this.emisorService=i,this.emisor={},this.certificado={},this.comunidad={},this.usuario={}}ngOnInit(){this.obtenerEmisores()}atras(){this.ruta.navigateByUrl("/main/tabs/ops-cert")}obtenerEmisores(){this.emisorService.Objeto.subscribe(o=>{this.emisor=o})}}return o.\u0275fac=function(i){return new(i||o)(a.Y36(c.F0),a.Y36(s.i))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-ver-doc"]],decls:69,vars:9,consts:[[1,"cabecera"],["slot","start"],["color","light",3,"click"],["name","arrow-back"],["color","light",1,"vecired"],[1,"caja-sm"],["lines","none"],[1,"ion-no-padding"],["size","6"],["name","newspaper","color","primary"],["name","accessibility","color","primary"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"my-label"],["name","calendar","color","primary"],["name","call","color","primary"],[1,"mybot"],["shape","round"]],template:function(o,i){1&o&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-buttons",1),a.TgZ(3,"ion-button",2),a.NdJ("click",function(){return i.atras()}),a._UZ(4,"ion-icon",3),a.qZA(),a.qZA(),a.TgZ(5,"ion-title",4),a._uU(6,"VeciRed"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"ion-content"),a.TgZ(8,"ion-card",5),a.TgZ(9,"ion-card-content"),a.TgZ(10,"ion-list",6),a.TgZ(11,"ion-item"),a.TgZ(12,"ion-grid",7),a.TgZ(13,"ion-row"),a.TgZ(14,"ion-col",8),a.TgZ(15,"b"),a._uU(16,"Nombre del Certificado"),a.qZA(),a.qZA(),a.TgZ(17,"ion-col",8),a.TgZ(18,"ion-chip"),a._UZ(19,"ion-icon",9),a.TgZ(20,"ion-label"),a._uU(21),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"ion-col",8),a.TgZ(23,"b"),a._uU(24,"Nombre comunidad"),a.qZA(),a.qZA(),a.TgZ(25,"ion-col",8),a.TgZ(26,"ion-chip"),a._UZ(27,"ion-icon",10),a.TgZ(28,"ion-label"),a._uU(29),a.qZA(),a.qZA(),a.qZA(),a.TgZ(30,"ion-col",8),a.TgZ(31,"b"),a._uU(32,"Asignado a"),a.qZA(),a.qZA(),a.TgZ(33,"ion-col",8),a.TgZ(34,"ion-chip"),a.TgZ(35,"ion-avatar"),a._UZ(36,"img",11),a.qZA(),a.TgZ(37,"ion-label",12),a._uU(38),a.qZA(),a.qZA(),a.qZA(),a.TgZ(39,"ion-col",8),a.TgZ(40,"b"),a._uU(41,"Fecha de emision"),a.qZA(),a.qZA(),a.TgZ(42,"ion-col",8),a.TgZ(43,"ion-chip"),a._UZ(44,"ion-icon",13),a.TgZ(45,"ion-label"),a._uU(46),a.ALo(47,"date"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(48,"ion-col",8),a.TgZ(49,"b"),a._uU(50,"Encargado comunidad"),a.qZA(),a.qZA(),a.TgZ(51,"ion-col",8),a.TgZ(52,"ion-chip"),a.TgZ(53,"ion-avatar"),a._UZ(54,"img",11),a.qZA(),a.TgZ(55,"ion-label",12),a._uU(56),a.qZA(),a.qZA(),a.qZA(),a.TgZ(57,"ion-col",8),a.TgZ(58,"b"),a._uU(59,"Contacto Encargado"),a.qZA(),a.qZA(),a.TgZ(60,"ion-col",8),a.TgZ(61,"ion-chip"),a._UZ(62,"ion-icon",14),a.TgZ(63,"ion-label"),a._uU(64),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.ynx(65),a.TgZ(66,"ion-list",15),a.TgZ(67,"ion-button",16),a._uU(68,"CLICK HERE"),a.qZA(),a.qZA(),a.BQk(),a.qZA()),2&o&&(a.xp6(21),a.hij(" ",i.emisor.certificado.titulo,""),a.xp6(8),a.hij(" ",i.emisor.comunidad.nombreComunidad,""),a.xp6(9),a.Oqu(i.emisor.usuario.nombre),a.xp6(8),a.hij(" ",a.xi3(47,6,i.emisor.fechaemision,"dd-MM-yyyy"),""),a.xp6(10),a.Oqu(i.emisor.certificado.replegal),a.xp6(8),a.Oqu(i.emisor.certificado.contacto))},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.wd,r.W2,r.PM,r.FN,r.q_,r.Ie,r.jY,r.Nd,r.wI,r.hM,r.Q$,r.BJ],pipes:[n.uU],styles:[".vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0);--padding-top:10px}[_nghost-%COMP%]   .cabecera[_ngcontent-%COMP%]{--background:#110a3b}.caja-sm[_ngcontent-%COMP%]{width:100%;height:60%;margin-top:10%;border-radius:20px;align-items:center;right:3%}.my-label[_ngcontent-%COMP%]{font-size:10px}.mybot[_ngcontent-%COMP%]{text-align:center;background-color:initial}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[n.ez,t.u5,r.Pc,Z]]}),o})()},2478:(o,i,e)=>{"use strict";e.d(i,{e:()=>c});var n=e(4762),t=e(639),r=e(7823);let c=(()=>{class o{constructor(o,i){this.alertController=o,this.toastController=i}alerta(o){return(0,n.mG)(this,void 0,void 0,function*(){const i=yield this.alertController.create({cssClass:"my-custom-class",message:o,buttons:[{text:"Ok",role:"cancel"}]});yield i.present(),yield i.onDidDismiss()})}alertaDecision(o){return(0,n.mG)(this,void 0,void 0,function*(){let i;const e=yield this.alertController.create({backdropDismiss:!1,message:o,buttons:[{text:"ACEPTAR",handler:()=>(e.dismiss(!0),!1)},{text:"Cancelar"}]});return yield e.present(),yield e.onDidDismiss().then(o=>{i=o}),i})}presentToast(o){return(0,n.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:o,position:"bottom",duration:1800})).present()})}}return o.\u0275fac=function(i){return new(i||o)(t.LFG(r.Br),t.LFG(r.yF))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);