(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[9255],{9255:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LoaderPageModule:()=>h});var r=i(8583),o=i(665),n=i(7823),s=i(7860),c=i(4762),a=i(639),d=i(2977);const u=[{path:"",component:(()=>{class e{constructor(e,t){this.ruta=e,this.emisorService=t,this.emisor={},this.redireccionado=!1}ngOnInit(){this.destruirEmisor(),this.redirect()}ngOnDestroy(){this.emisorSubscription&&this.emisorSubscription.unsubscribe()}redirect(){return(0,c.mG)(this,void 0,void 0,function*(){if(!this.redireccionado){const t=3e3;yield this.delay(t),this.redireccionado=!0;try{this.ruta.navigateByUrl("/main/tabs/estado-cert?nocache="+(new Date).getTime())}catch(e){console.error("Error durante la redirecci\xf3n:",e)}}})}delay(e){return new Promise(t=>setTimeout(t,e))}destruirEmisor(){this.emisorSubscription=this.emisorService.Objeto.subscribe(e=>{this.emisor=e})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.F0),a.Y36(d.i))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-loader"]],decls:8,vars:0,consts:[[1,"cabecera"],["color","light",1,"vecired"],["padding",""],["color","tertiary",1,"loader"],[1,"mi-texto"]],template:function(e,t){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-title",1),a._uU(3,"VeciRed"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"ion-content",2),a._UZ(5,"ion-spinner",3),a.TgZ(6,"ion-text",4),a._uU(7,"VeciRed esta actualizando tus datos y generando tu QR."),a.qZA(),a.qZA())},directives:[n.Gu,n.sr,n.wd,n.W2,n.PQ,n.yW],styles:[".vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.loader[_ngcontent-%COMP%]{position:fixed;top:40%;left:35%;width:100px;height:100px}.mi-texto[_ngcontent-%COMP%]{font-style:italic;position:fixed;top:60%;left:20%;right:20%}"]}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild(u)],s.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[r.ez,o.u5,n.Pc,l]]}),e})()}}]);