(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[1204],{1204:(e,o,i)=>{"use strict";i.r(o),i.d(o,{EditarOpcionesPageModule:()=>p});var n=i(8583),t=i(665),r=i(7823),c=i(7860),s=i(639),a=i(6014),d=i(2478);const u=[{path:"",component:(()=>{class e{constructor(e,o,i,n){this.acuerdosService=e,this.router=o,this.navCtrl=i,this.alertasService=n,this.opciones=[],this.titulos="",this.res=[],this.opcion=[{titulo:"",descripcion:"",votos:0},{titulo:"",descripcion:"",votos:0},{titulo:"",descripcion:"",votos:0},{titulo:"",descripcion:"",votos:0}],this.ocultarOpcion3=!0,this.ocultarOpcion4=!0,this.contador=0,this.desactivarBotonAdd=!1,this.desactivarBotonRemove=!0}ngOnInit(){this.acuerdosService.Objeto.subscribe(e=>{this.res=e.opciones;var o=0;for(let i=0;i<this.res.length;i++)this.opcion[i].titulo=this.res[i].titulo,this.opcion[i].descripcion=this.res[i].descripcion,o++;this.agregarOpcion(o-=3)}).unsubscribe()}agregarOpcion(e){null!=e&&(this.contador=e),this.contador++,this.contador>0&&(this.ocultarOpcion3=!1,this.desactivarBotonRemove=!1),this.contador>1&&(this.ocultarOpcion4=!1,this.desactivarBotonAdd=!0)}eliminarOpcion(){this.contador--,this.contador<1&&(this.ocultarOpcion3=!0,this.desactivarBotonRemove=!0),this.contador<2&&(this.ocultarOpcion4=!0,this.desactivarBotonAdd=!1)}enviarOpciones(){null==this.validacion()&&(this.opciones.push(this.opcion[0]),this.opciones.push(this.opcion[1]),this.contador>=1&&this.opciones.push(this.opcion[2]),2==this.contador&&this.opciones.push(this.opcion[3]),this.acuerdosService.enviarDatos(this.opciones,!1),this.router.navigate(["/main/tabs/editar-acuerdo"]),this.opciones=[])}validacion(){if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,30})+$/g.test(this.opcion[0].titulo))return this.alertasService.alerta("Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 30.");if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,250})+$/g.test(this.opcion[0].descripcion))return this.alertasService.alerta("Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 250.");if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,30})+$/g.test(this.opcion[1].titulo))return this.alertasService.alerta("Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 30.");if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,250})+$/g.test(this.opcion[1].descripcion))return this.alertasService.alerta("Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 250.");if(this.contador>=1){if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,30})+$/g.test(this.opcion[2].titulo))return this.alertasService.alerta("Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 30.");if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,250})+$/g.test(this.opcion[2].descripcion))return this.alertasService.alerta("Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 250.")}if(2==this.contador){if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,30})+$/g.test(this.opcion[3].titulo))return this.alertasService.alerta("Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 30.");if(0==/(^[A-Za-z\xc1\xc9\xcd\xd3\xda\xe1\xe9\xed\xf3\xfa\xf1\xd10-9\xa1!\xbf?\-.,()=/@ ]{3,250})+$/g.test(this.opcion[3].descripcion))return this.alertasService.alerta("Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m\xednimo de 3 caracteres y un m\xe1ximo de 250.")}}}return e.\u0275fac=function(o){return new(o||e)(s.Y36(a.U),s.Y36(c.F0),s.Y36(r.SH),s.Y36(d.e))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-editar-opciones"]],decls:82,vars:27,consts:[[1,"cabecera"],["slot","start"],["defaultHref","/main/tabs/editar-acuerdo","color","light"],["color","light",1,"vecired"],["slot","end"],["disabled",""],[1,"titulo"],[1,"ion-text-center"],["position","floating"],["type","text","minlength","3","maxlength","30","required","",3,"ngModel","ngModelChange"],[1,"caracteres"],["minlength","3","maxlength","250","required","",3,"ngModel","ngModelChange"],[3,"hidden"],[1,"caracteres",3,"hidden"],["offset","3"],[1,"botones",3,"click"],["shape","round",3,"disabled"],["name","add-circle-outline"],[1,"botones"],["shape","round",3,"disabled","click"],["name","remove-circle-outline"],["color","tertiary","shape","round","expand","full",3,"disabled","click"]],template:function(e,o){1&e&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar",0),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-back-button",2),s.qZA(),s.TgZ(4,"ion-title",3),s._uU(5," VeciRed "),s.qZA(),s.TgZ(6,"ion-buttons",4),s.TgZ(7,"ion-button",5),s._UZ(8,"ion-icon"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"ion-content"),s.TgZ(10,"div",6),s.TgZ(11,"h4",7),s.TgZ(12,"b"),s._uU(13,"OPCIONES"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"ion-list"),s.TgZ(15,"ion-item"),s.TgZ(16,"ion-label",8),s.TgZ(17,"b"),s._uU(18,"Opci\xf3n 1:"),s.qZA(),s.qZA(),s.TgZ(19,"ion-input",9),s.NdJ("ngModelChange",function(e){return o.opcion[0].titulo=e}),s.qZA(),s.qZA(),s.TgZ(20,"span",10),s._uU(21),s.qZA(),s.TgZ(22,"ion-item"),s.TgZ(23,"ion-label",8),s.TgZ(24,"b"),s._uU(25,"Descripci\xf3n:"),s.qZA(),s.qZA(),s.TgZ(26,"ion-textarea",11),s.NdJ("ngModelChange",function(e){return o.opcion[0].descripcion=e}),s.qZA(),s.qZA(),s.TgZ(27,"span",10),s._uU(28),s.qZA(),s.TgZ(29,"ion-item"),s.TgZ(30,"ion-label",8),s.TgZ(31,"b"),s._uU(32,"Opci\xf3n 2:"),s.qZA(),s.qZA(),s.TgZ(33,"ion-input",9),s.NdJ("ngModelChange",function(e){return o.opcion[1].titulo=e}),s.qZA(),s.qZA(),s.TgZ(34,"span",10),s._uU(35),s.qZA(),s.TgZ(36,"ion-item"),s.TgZ(37,"ion-label",8),s.TgZ(38,"b"),s._uU(39,"Descripci\xf3n:"),s.qZA(),s.qZA(),s.TgZ(40,"ion-textarea",11),s.NdJ("ngModelChange",function(e){return o.opcion[1].descripcion=e}),s.qZA(),s.qZA(),s.TgZ(41,"span",10),s._uU(42),s.qZA(),s.TgZ(43,"ion-item",12),s.TgZ(44,"ion-label",8),s.TgZ(45,"b"),s._uU(46,"Opci\xf3n 3:"),s.qZA(),s.qZA(),s.TgZ(47,"ion-input",9),s.NdJ("ngModelChange",function(e){return o.opcion[2].titulo=e}),s.qZA(),s.qZA(),s.TgZ(48,"span",13),s._uU(49),s.qZA(),s.TgZ(50,"ion-item",12),s.TgZ(51,"ion-label",8),s.TgZ(52,"b"),s._uU(53,"Descripci\xf3n:"),s.qZA(),s.qZA(),s.TgZ(54,"ion-textarea",11),s.NdJ("ngModelChange",function(e){return o.opcion[2].descripcion=e}),s.qZA(),s.qZA(),s.TgZ(55,"span",13),s._uU(56),s.qZA(),s.TgZ(57,"ion-item",12),s.TgZ(58,"ion-label",8),s.TgZ(59,"b"),s._uU(60,"Opci\xf3n 4:"),s.qZA(),s.qZA(),s.TgZ(61,"ion-input",9),s.NdJ("ngModelChange",function(e){return o.opcion[3].titulo=e}),s.qZA(),s.qZA(),s.TgZ(62,"span",13),s._uU(63),s.qZA(),s.TgZ(64,"ion-item",12),s.TgZ(65,"ion-label",8),s.TgZ(66,"b"),s._uU(67,"Descripci\xf3n:"),s.qZA(),s.qZA(),s.TgZ(68,"ion-textarea",11),s.NdJ("ngModelChange",function(e){return o.opcion[3].descripcion=e}),s.qZA(),s.qZA(),s.TgZ(69,"span",13),s._uU(70),s.qZA(),s.TgZ(71,"ion-row"),s.TgZ(72,"ion-col",14),s.TgZ(73,"ion-buttons",15),s.NdJ("click",function(){return o.agregarOpcion()}),s.TgZ(74,"ion-button",16),s._UZ(75,"ion-icon",17),s.qZA(),s.qZA(),s.qZA(),s.TgZ(76,"ion-col"),s.TgZ(77,"ion-buttons",18),s.TgZ(78,"ion-button",19),s.NdJ("click",function(){return o.eliminarOpcion()}),s._UZ(79,"ion-icon",20),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(80,"ion-button",21),s.NdJ("click",function(){return o.enviarOpciones()}),s._uU(81," Enviar "),s.qZA(),s.qZA()),2&e&&(s.xp6(19),s.Q6J("ngModel",o.opcion[0].titulo),s.xp6(2),s.hij("",30-o.opcion[0].titulo.length," caracteres restantes"),s.xp6(5),s.Q6J("ngModel",o.opcion[0].descripcion),s.xp6(2),s.hij("",250-o.opcion[0].descripcion.length," caracteres restantes"),s.xp6(5),s.Q6J("ngModel",o.opcion[1].titulo),s.xp6(2),s.hij("",30-o.opcion[1].titulo.length," caracteres restantes"),s.xp6(5),s.Q6J("ngModel",o.opcion[1].descripcion),s.xp6(2),s.hij("",250-o.opcion[1].descripcion.length," caracteres restantes"),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion3),s.xp6(4),s.Q6J("ngModel",o.opcion[2].titulo),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion3),s.xp6(1),s.hij("",30-o.opcion[2].titulo.length," caracteres restantes"),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion3),s.xp6(4),s.Q6J("ngModel",o.opcion[2].descripcion),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion3),s.xp6(1),s.hij("",250-o.opcion[2].descripcion.length," caracteres restantes"),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion4),s.xp6(4),s.Q6J("ngModel",o.opcion[3].titulo),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion4),s.xp6(1),s.hij("",30-o.opcion[3].titulo.length," caracteres restantes"),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion4),s.xp6(4),s.Q6J("ngModel",o.opcion[3].descripcion),s.xp6(1),s.Q6J("hidden",o.ocultarOpcion4),s.xp6(1),s.hij("",250-o.opcion[3].descripcion.length," caracteres restantes"),s.xp6(4),s.Q6J("disabled",o.desactivarBotonAdd),s.xp6(4),s.Q6J("disabled",o.desactivarBotonRemove),s.xp6(2),s.Q6J("disabled",o.opcion[0].titulo.length<3||o.opcion[0].descripcion.length<3||o.opcion[1].titulo.length<3||o.opcion[1].descripcion.length<3||o.opcion[2].titulo.length<3&&o.contador>0||o.opcion[2].descripcion.length<3&&o.contador>0||o.opcion[3].titulo.length<3&&o.contador>1||o.opcion[3].descripcion.length<3&&o.contador>1))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.wd,r.YG,r.gu,r.W2,r.q_,r.Ie,r.Q$,r.pK,r.j9,t.wO,t.nD,t.Q7,t.JJ,t.On,r.g2,r.Nd,r.wI],styles:[".titulo[_ngcontent-%COMP%]{margin-top:-3%;font-family:monospace}.caracteres[_ngcontent-%COMP%]{font-size:small;margin-left:55%;color:grey}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}"]}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,t.u5,r.Pc,l]]}),e})()},6014:(e,o,i)=>{"use strict";i.d(o,{U:()=>u});var n=i(1841),t=i(639),r=i(2340),c=i(1929),s=i(4975),a=i(7905);const d=r.N.url;let u=(()=>{class e{constructor(e,o,i){this.http=e,this.usuarioService=o,this.fileTransfer=i,this.pagiaAcuerdos=0,this.Objeto=new c.t,this.nuevoAcuerdo=new t.vpe,this.acuerdoEliminado=new t.vpe}getAcuerdos(e=!1){e&&(this.pagiaAcuerdos=0);const o=new n.WM({UToken:this.usuarioService.userToken});return this.pagiaAcuerdos++,this.http.get(`${d}/acuerdos/?pagina=${this.pagiaAcuerdos}`,{headers:o})}crearAcuerdo(e){const o=new n.WM({UToken:this.usuarioService.userToken});return new Promise(i=>{this.http.post(`${d}/acuerdos`,e,{headers:o}).subscribe(e=>{this.nuevoAcuerdo.emit(e.acuerdo),i(!0)})})}enviarDatos(e,o){e.tipo=o,this.Objeto.next(e)}limpiar(e){this.Objeto.next(e)}actualizarAcuerdo(e){const o=new n.WM({UToken:this.usuarioService.userToken});return new Promise(i=>{this.http.post(`${d}/acuerdos/actualizar`,e,{headers:o}).subscribe(e=>{i(!!e.ok)})})}eliminarAcuerdo(e){const o=new n.WM({UToken:this.usuarioService.userToken});return new Promise(i=>{this.http.post(`${d}/acuerdos/actualizar`,e,{headers:o}).subscribe(e=>{e.ok?(this.acuerdoEliminado.emit(e.acuerdo),i(!0)):i(!1)})})}subirImagen(e){const o={fileKey:"imagenAcuerdo",headers:{UToken:this.usuarioService.userToken}};this.fileTransfer.create().upload(e,`${d}/acuerdos/upload`,o).then(e=>{console.log(e)}).catch(e=>{console.log("Fallo al subir imagen:",e)})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(n.eN),t.LFG(s.i),t.LFG(a.K))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);