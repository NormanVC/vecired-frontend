(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[8592],{8225:(e,t,r)=>{"use strict";r.d(t,{c:()=>s});var n=r(3150),o=r(2954),i=r(9461);const s=(e,t)=>{let r,s;const a=(e,n,o)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(e,n);i&&t(i)?i!==r&&(u(),c(i,o)):u()},c=(e,t)=>{r=e,s||(s=r);const o=r;(0,n.c)(()=>o.classList.add("ion-activated")),t()},u=(e=!1)=>{if(!r)return;const t=r;(0,n.c)(()=>t.classList.remove("ion-activated")),e&&s!==r&&r.click(),r=void 0};return(0,i.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>a(e.currentX,e.currentY,o.a),onMove:e=>a(e.currentX,e.currentY,o.b),onEnd:()=>{u(!0),(0,o.h)(),s=void 0}})}},7330:(e,t,r)=>{"use strict";r.d(t,{a:()=>o,d:()=>i});var n=r(2377);const o=async(e,t,r,o,i)=>{if(e)return e.attachViewToDom(t,r,i,o);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r;return o&&o.forEach(e=>s.classList.add(e)),i&&Object.assign(s,i),t.appendChild(s),await new Promise(e=>(0,n.c)(s,e)),s},i=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,r)=>{"use strict";r.d(t,{a:()=>i,b:()=>s,c:()=>o,d:()=>c,h:()=>a});const n={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},o=()=>{n.selection()},i=()=>{n.selectionStart()},s=()=>{n.selectionChanged()},a=()=>{n.selectionEnd()},c=e=>{n.impact(e)}},6575:(e,t,r)=>{"use strict";r.d(t,{s:()=>n});const n=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!s()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,c.forEach(e=>{const r=t.querySelectorAll(e);for(let n=r.length-1;n>=0;n--){const e=r[n];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=i(e);for(let t=0;t<s.length;t++)o(s[t])}});const n=i(t);for(let e=0;e<n.length;e++)o(n[e]);const a=document.createElement("div");a.appendChild(t);const u=a.querySelector("div");return null!==u?u.innerHTML:a.innerHTML}catch(t){return console.error(t),""}},o=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const t=e.attributes.item(r),n=t.name;if(!a.includes(n.toLowerCase())){e.removeAttribute(n);continue}const o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}const t=i(e);for(let r=0;r<t.length;r++)o(t[r])},i=e=>null!=e.children?e.children:e.childNodes,s=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},a=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},408:(e,t,r)=>{"use strict";r.d(t,{S:()=>n});const n={bubbles:{dur:1e3,circles:9,fn:(e,t,r)=>{const n=e*t/r-e+"ms",o=2*Math.PI*t/r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(e,t,r)=>{const n=t/r,o=e*n-e+"ms",i=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/r-e+"ms"}})}}},1269:(e,t,r)=>{"use strict";r.d(t,{c:()=>o,g:()=>i,h:()=>n,o:()=>a});const n=(e,t)=>null!==t.closest(e),o=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,i=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,a=async(e,t,r,n)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const o=document.querySelector("ion-router");if(o)return null!=t&&t.preventDefault(),o.push(e,r,n)}return!1}},5873:e=>{function t(e){return"string"==typeof e?e.replace(/^0+|[^0-9kK]+/g,"").toUpperCase():""}e.exports={validate:function(e){if("string"!=typeof e)return!1;if(/^0+/.test(e))return!1;if(!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(e))return!1;e=t(e);let r=parseInt(e.slice(0,-1),10),n=0,o=1;for(;r>0;)o=(o+r%10*(9-n++%6))%11,r=Math.floor(r/10);return(o>0?""+(o-1):"K")===e.slice(-1)},clean:t,format:function(e,r={dots:!0}){let n;if(e=t(e),r.dots){n=e.slice(-4,-1)+"-"+e.substr(e.length-1);for(let t=4;t<e.length;t+=3)n=e.slice(-3-t,-t)+"."+n}else n=e.slice(0,-1)+"-"+e.substr(e.length-1);return n},getCheckDigit:function(e){const r=Array.from(t(e),Number);if(0===r.length||r.includes(NaN))throw new Error(`"${e}" as RUT is invalid`);const n=11-r.reverse().reduce((e,t,r)=>e+t*(r%6+2),0)%11;return 10===n?"K":11===n?"0":n.toString()}}},581:(e,t,r)=>{"use strict";r.d(t,{e:()=>a});var n=r(8583),o=r(665),i=r(7823),s=r(639);let a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,o.u5,i.Pc]]}),e})()},6175:(e,t,r)=>{"use strict";r.d(t,{$:()=>i});var n=r(639),o=r(7823);let i=(()=>{class e{constructor(e){this.modalController=e}closeModal(){this.modalController.dismiss()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(o.IN))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-aviso-modal"]],decls:46,vars:0,consts:[[1,"cabecera"],["slot","start",3,"click"],["slot","icon-only","name","arrow-back-outline","color","light"],["color","light",1,"ion-text-center"],["slot","end"],["disabled",""],[2,"background-color","rgba(91, 240, 4, 0.250)"],[1,"fontColor","ion-text-center"],[1,"ion-text-center"],[1,"fontColor"],[2,"background-color","rgba(44, 117, 212, 0.250)"],[2,"background-color","rgba(230, 245, 27, 0.250)"],[2,"background-color","rgba(240, 20, 20, 0.300)"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header"),n.TgZ(1,"ion-toolbar",0),n.TgZ(2,"ion-buttons",1),n.NdJ("click",function(){return t.closeModal()}),n._UZ(3,"ion-icon",2),n.qZA(),n.TgZ(4,"ion-title",3),n._uU(5,"VeciRed"),n.qZA(),n.TgZ(6,"ion-buttons",4),n.TgZ(7,"ion-button",5),n._UZ(8,"ion-icon"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(9,"ion-content"),n.TgZ(10,"ion-card",6),n.TgZ(11,"ion-card-header"),n.TgZ(12,"ion-card-subtitle",7),n._uU(13,"Tipos de avisos"),n.qZA(),n.TgZ(14,"ion-card-title",8),n.TgZ(15,"b"),n._uU(16,"Otro"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"ion-card-content",9),n._uU(18," Se considera cualquier aviso que contenga informaci\xf3n \xfatil, mas es prescindible y no es de car\xe1cter urgente, los vecinos lo podr\xedan leer durante el d\xeda sin apuro. "),n.qZA(),n.qZA(),n.TgZ(19,"ion-card",10),n.TgZ(20,"ion-card-header"),n.TgZ(21,"ion-card-subtitle",7),n._uU(22,"Tipos de avisos"),n.qZA(),n.TgZ(23,"ion-card-title",8),n.TgZ(24,"b"),n._uU(25,"Informativo"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(26,"ion-card-content",9),n._uU(27," Se considera cualquier aviso que contenga informaci\xf3n entregada por la directiva de su jjvv o agrupaci\xf3n vecinal. Es importante que todos los vecinos lo lean eventualmente. "),n.qZA(),n.qZA(),n.TgZ(28,"ion-card",11),n.TgZ(29,"ion-card-header"),n.TgZ(30,"ion-card-subtitle",7),n._uU(31,"Tipos de avisos"),n.qZA(),n.TgZ(32,"ion-card-title",8),n.TgZ(33,"b"),n._uU(34,"Problema"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(35,"ion-card-content",9),n._uU(36," Se considera cualquier aviso que contenga informaci\xf3n relacionada a alg\xfan problema que le suceda a alg\xfan vecino o est\xe9 sucediendo en su zona. Es importante resolverlo lo antes posible, no obstante nadie se encuentra en riesgo vital. "),n.qZA(),n.qZA(),n.TgZ(37,"ion-card",12),n.TgZ(38,"ion-card-header"),n.TgZ(39,"ion-card-subtitle",7),n._uU(40,"Tipos de avisos"),n.qZA(),n.TgZ(41,"ion-card-title",8),n.TgZ(42,"b"),n._uU(43,"Emergencia"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(44,"ion-card-content",9),n._uU(45," Se considera un aviso especial, el cual solo esta dise\xf1ado para informar una situaci\xf3n grave que requiere el apoyo inmedianto de quienes lo lean. Solo deber\xeda ocuparse cuando sea realmente necesario. "),n.qZA(),n.qZA(),n.qZA())},directives:[o.Gu,o.sr,o.Sm,o.gu,o.wd,o.YG,o.W2,o.PM,o.Zi,o.tO,o.gZ,o.FN],styles:[".fontColor[_ngcontent-%COMP%]{color:#000}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}"]}),e})()},8320:(e,t,r)=>{"use strict";r.d(t,{P:()=>s});var n=r(2340),o=r(639);const i=n.N.url;let s=(()=>{class e{transform(e,t){return`${i}/avisos/imagenAviso/${t}/${e}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Yjl({name:"mostrarImagen",type:e,pure:!0}),e})()},9894:(e,t,r)=>{"use strict";r.d(t,{y:()=>u});var n=r(639),o=r(1841),i=r(2340),s=r(1929),a=r(4975);const c=i.N.url;let u=(()=>{class e{constructor(e,t){this.http=e,this.usuarioService=t,this.nuevoCertificado=new n.vpe,this.Objeto=new s.t}getCertificados(){const e=new o.WM({UToken:this.usuarioService.userToken});return this.http.get(`${c}/certificados/`,{headers:e})}crearNuevoCertificado(e){const t=new o.WM({UToken:this.usuarioService.userToken});return new Promise(r=>{this.http.post(`${c}/certificados/crear`,e,{headers:t}).subscribe(e=>{console.log(e),this.nuevoCertificado.emit(e.certificado),r(!0)})})}enviarDatos(e){this.Objeto.next(e)}actualizarCertificado(e){const t=new o.WM({UToken:this.usuarioService.userToken});return new Promise(r=>{this.http.post(`${c}/certificados/update`,e,{headers:t}).subscribe(e=>{e.ok?(this.nuevoCertificado.emit(e.certificado),r(!0)):r(!1)})})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.eN),n.LFG(a.i))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4212:(e,t,r)=>{"use strict";r.d(t,{P:()=>u});var n=r(1841),o=r(639),i=r(2340),s=r(1929),a=r(4975);const c=i.N.url;let u=(()=>{class e{constructor(e,t){this.http=e,this.usuarioService=t,this.nuevaComunidad=new o.vpe,this.comunidad={},this.Objeto=new s.t}crearComunidad(e){return new Promise(t=>{this.http.post(`${c}/comunidad/crear`,e).subscribe(e=>{!0===e.ok?(this.nuevaComunidad.emit(e),t(!0)):t(!1)})})}enviarDatos(e){this.Objeto.next(e)}actualizarComunidad(e){return new Promise(t=>{this.http.post(`${c}/comunidad/actualizar`,e).subscribe(e=>{e.ok?(this.nuevaComunidad.emit(e),t(!0)):t(!1)})})}filtrarComunidad(e){return this.http.post(`${c}/comunidad/buscar`,e)}obtenerNombreComunidad(){const e=new n.WM({UToken:this.usuarioService.userToken});return this.http.get(`${c}/comunidad/nombreComunidad`,{headers:e})}obtenerComunidad(){const e=new n.WM({UToken:this.usuarioService.userToken});return this.http.get(`${c}/comunidad/puedeemitir`,{headers:e})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(n.eN),o.LFG(a.i))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},2977:(e,t,r)=>{"use strict";r.d(t,{i:()=>l});var n=r(1841),o=r(639),i=r(2340),s=r(1929),a=r(4975),c=r(2478);const u=i.N.url;let l=(()=>{class e{constructor(e,t,r){this.http=e,this.usuarioService=t,this.alertaService=r,this.nuevaSolicitud=new o.vpe,this.Objeto=new s.t,this.nuevoEmisor=new o.vpe}getEmisor(e){const t=new n.WM({UToken:this.usuarioService.userToken});return this.http.get(`${u}/emisor/solicitudes?pagina=${e}`,{headers:t})}aceptarSolicitud(e){const t=new n.WM({UToken:this.usuarioService.userToken}),r={_id:e};return this.alertaService.presentToast("Solicitud aceptada exitosamente"),this.http.post(`${u}/emisor/aceptar`,r,{headers:t})}rechazarSolicitud(e){const t=new n.WM({UToken:this.usuarioService.userToken}),r={_id:e};return this.alertaService.presentToast("Solicitud rechazada exitosamente"),this.http.post(`${u}/emisor/rechazar`,r,{headers:t})}getmisEmisores(e){const t=new n.WM({UToken:this.usuarioService.userToken});return this.http.get(`${u}/emisor/miscertificados?pagina=${e}`,{headers:t})}crearSolicitud(e){const t=new n.WM({UToken:this.usuarioService.userToken});return new Promise(r=>{this.http.post(`${u}/emisor/solicitud`,e,{headers:t}).subscribe(e=>{console.log(e),this.nuevoEmisor.emit(e.emisor),r(!0)})})}enviarDatos(e){this.Objeto.next(e)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(n.eN),o.LFG(a.i),o.LFG(c.e))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9272:(e,t,r)=>{"use strict";r.d(t,{o:()=>o});var n=r(639);let o=(()=>{class e{constructor(){}formatearRut(e){const t=(e=(e=e.replace(/\./g,"")).replace("-","")).slice(0,-1),r=e.slice(-1);let n=t.replace(/\B(?=(\d{3})+(?!\d))/g,".");return n+="-"+r.toUpperCase(),n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);