(self.webpackChunkveciRed=self.webpackChunkveciRed||[]).push([[8018],{8010:(t,e,r)=>{const n=r(9334),o=r(8530),i=r(1956),s=r(8670);function a(t,e,r,i,s){const a=[].slice.call(arguments,1),c=a.length,u="function"==typeof a[c-1];if(!u&&!n())throw new Error("Callback required as last argument");if(!u){if(c<1)throw new Error("Too few arguments provided");return 1===c?(r=e,e=i=void 0):2!==c||e.getContext||(i=r,r=e,e=void 0),new Promise(function(n,s){try{const s=o.create(r,i);n(t(s,e,i))}catch(a){s(a)}})}if(c<2)throw new Error("Too few arguments provided");2===c?(s=r,r=e,e=i=void 0):3===c&&(e.getContext&&void 0===s?(s=i,i=void 0):(s=i,i=r,r=e,e=void 0));try{const n=o.create(r,i);s(null,t(n,e,i))}catch(l){s(l)}}e.rT=a.bind(null,i.render),e.hz=a.bind(null,i.renderToDataURL),e.toString=a.bind(null,function(t,e,r){return s.render(t,r)})},9334:t=>{t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},4760:(t,e,r)=>{const n=r(6721).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];const e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7];for(let n=1;n<e-1;n++)i[n]=i[n-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){const r=[],n=e.getRowColCoords(t),o=n.length;for(let e=0;e<o;e++)for(let t=0;t<o;t++)0===e&&0===t||0===e&&t===o-1||e===o-1&&0===t||r.push([n[e],n[t]]);return r}},6812:(t,e,r)=>{const n=r(6255),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},9974:t=>{function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},5438:t=>{function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}e.prototype.set=function(t,e,r,n){const o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},e.prototype.get=function(t,e){return this.data[t*this.size+e]},e.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},e.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=e},4860:(t,e,r)=>{const n=r(1522),o=r(6255);function i(t){this.mode=o.BYTE,this.data=new Uint8Array(n(t))}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},3528:(t,e,r)=>{const n=r(109),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},109:(t,e)=>{e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(n){return r}}},4966:(t,e,r)=>{const n=r(6721).getSymbolSize;e.getPositions=function(t){const e=n(t);return[[0,0],[e-7,0],[0,e-7]]}},8986:(t,e,r)=>{const n=r(6721),o=n.getBCHDigit(1335);e.getEncodedBits=function(t,e){const r=t.bit<<3|e;let i=r<<10;for(;n.getBCHDigit(i)-o>=0;)i^=1335<<n.getBCHDigit(i)-o;return 21522^(r<<10|i)}},9516:(t,e)=>{const r=new Uint8Array(512),n=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)r[e]=t,n[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return n[t]},e.exp=function(t){return r[t]},e.mul=function(t,e){return 0===t||0===e?0:r[n[t]+n[e]]}},7597:(t,e,r)=>{const n=r(6255),o=r(6721);function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},3373:(t,e)=>{function r(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2==0;case e.Patterns.PATTERN001:return r%2==0;case e.Patterns.PATTERN010:return n%3==0;case e.Patterns.PATTERN011:return(r+n)%3==0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case e.Patterns.PATTERN101:return r*n%2+r*n%3==0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){const e=t.size;let r=0,n=0,o=0,i=null,s=null;for(let a=0;a<e;a++){n=o=0,i=s=null;for(let c=0;c<e;c++){let e=t.get(a,c);e===i?n++:(n>=5&&(r+=n-5+3),i=e,n=1),e=t.get(c,a),e===s?o++:(o>=5&&(r+=o-5+3),s=e,o=1)}n>=5&&(r+=n-5+3),o>=5&&(r+=o-5+3)}return r},e.getPenaltyN2=function(t){const e=t.size;let r=0;for(let n=0;n<e-1;n++)for(let o=0;o<e-1;o++){const e=t.get(n,o)+t.get(n,o+1)+t.get(n+1,o)+t.get(n+1,o+1);4!==e&&0!==e||r++}return 3*r},e.getPenaltyN3=function(t){const e=t.size;let r=0,n=0,o=0;for(let i=0;i<e;i++){n=o=0;for(let s=0;s<e;s++)n=n<<1&2047|t.get(i,s),s>=10&&(1488===n||93===n)&&r++,o=o<<1&2047|t.get(s,i),s>=10&&(1488===o||93===o)&&r++}return 40*r},e.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];return 10*Math.abs(Math.ceil(100*e/r/5)-10)},e.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,r(t,i,o))},e.getBestMask=function(t,r){const n=Object.keys(e.Patterns).length;let o=0,i=1/0;for(let s=0;s<n;s++){r(s),e.applyMask(s,t);const n=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(s,t),n<i&&(i=n,o=s)}return o}},6255:(t,e,r)=>{const n=r(3994),o=r(3445);e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(n){return r}}},7020:(t,e,r)=>{const n=r(6255);function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},709:(t,e,r)=>{const n=r(9516);e.mul=function(t,e){const r=new Uint8Array(t.length+e.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<e.length;i++)r[o+i]^=n.mul(t[o],e[i]);return r},e.mod=function(t,e){let r=new Uint8Array(t);for(;r.length-e.length>=0;){const t=r[0];for(let i=0;i<e.length;i++)r[i]^=n.mul(e[i],t);let o=0;for(;o<r.length&&0===r[o];)o++;r=r.slice(o)}return r},e.generateECPolynomial=function(t){let r=new Uint8Array([1]);for(let o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,n.exp(o)]));return r}},8530:(t,e,r)=>{const n=r(6721),o=r(109),i=r(9974),s=r(5438),a=r(4760),c=r(4966),u=r(3373),l=r(3528),h=r(3628),d=r(5273),g=r(8986),f=r(6255),p=r(6586);function m(t,e,r){const n=t.size,o=g.getEncodedBits(e,r);let i,s;for(i=0;i<15;i++)s=1==(o>>i&1),t.set(i<6?i:i<8?i+1:n-15+i,8,s,!0),t.set(8,i<8?n-i-1:i<9?15-i-1+1:15-i-1,s,!0);t.set(n-8,8,1,!0)}e.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let r,g,w=o.M;return void 0!==e&&(w=o.from(e.errorCorrectionLevel,o.M),r=d.from(e.version),g=u.from(e.maskPattern),e.toSJISFunc&&n.setToSJISFunction(e.toSJISFunc)),function(t,e,r,o){let g;if(Array.isArray(t))g=p.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let n=e;if(!n){const e=p.rawSplit(t);n=d.getBestVersionForData(e,r)}g=p.fromString(t,n||40)}}const w=d.getBestVersionForData(g,r);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<w)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+w+".\n")}else e=w;const E=function(t,e,r){const o=new i;r.forEach(function(e){o.put(e.mode.bit,4),o.put(e.getLength(),f.getCharCountIndicator(e.mode,t)),e.write(o)});const s=8*(n.getSymbolTotalCodewords(t)-l.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const a=(s-o.getLengthInBits())/8;for(let n=0;n<a;n++)o.put(n%2?17:236,8);return function(t,e,r){const o=n.getSymbolTotalCodewords(e),i=o-l.getTotalCodewordsCount(e,r),s=l.getBlocksCount(e,r),a=s-o%s,c=Math.floor(o/s),u=Math.floor(i/s),d=u+1,g=c-u,f=new h(g);let p=0;const m=new Array(s),w=new Array(s);let E=0;const y=new Uint8Array(t.buffer);for(let n=0;n<s;n++){const t=n<a?u:d;m[n]=y.slice(p,p+t),w[n]=f.encode(m[n]),p+=t,E=Math.max(E,t)}const v=new Uint8Array(o);let C,A,b=0;for(C=0;C<E;C++)for(A=0;A<s;A++)C<m[A].length&&(v[b++]=m[A][C]);for(C=0;C<g;C++)for(A=0;A<s;A++)v[b++]=w[A][C];return v}(o,t,e)}(e,r,g),y=n.getSymbolSize(e),v=new s(y);return function(t,e){const r=t.size,n=c.getPositions(e);for(let o=0;o<n.length;o++){const e=n[o][0],i=n[o][1];for(let n=-1;n<=7;n++)if(!(e+n<=-1||r<=e+n))for(let o=-1;o<=7;o++)i+o<=-1||r<=i+o||t.set(e+n,i+o,n>=0&&n<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===n||6===n)||n>=2&&n<=4&&o>=2&&o<=4,!0)}}(v,e),function(t){const e=t.size;for(let r=8;r<e-8;r++){const e=r%2==0;t.set(r,6,e,!0),t.set(6,r,e,!0)}}(v),function(t,e){const r=a.getPositions(e);for(let n=0;n<r.length;n++){const e=r[n][0],o=r[n][1];for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)t.set(e+r,o+n,-2===r||2===r||-2===n||2===n||0===r&&0===n,!0)}}(v,e),m(v,r,0),e>=7&&function(t,e){const r=t.size,n=d.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+r-8-3,s=1==(n>>a&1),t.set(o,i,s,!0),t.set(i,o,s,!0)}(v,e),function(t,e){const r=t.size;let n=-1,o=r-1,i=7,s=0;for(let a=r-1;a>0;a-=2)for(6===a&&a--;;){for(let r=0;r<2;r++)if(!t.isReserved(o,a-r)){let n=!1;s<e.length&&(n=1==(e[s]>>>i&1)),t.set(o,a-r,n),i--,-1===i&&(s++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}(v,E),isNaN(o)&&(o=u.getBestMask(v,m.bind(null,v,r))),u.applyMask(o,v),m(v,r,o),{modules:v,version:e,errorCorrectionLevel:r,maskPattern:o,segments:g}}(t,r,w,g)}},3628:(t,e,r)=>{const n=r(709);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(r,o),t}return r},t.exports=o},3445:(t,e)=>{let r="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";r=r.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+r+")(?:.|[\r\n]))+";e.KANJI=new RegExp(r,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(n,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const o=new RegExp("^"+r+"$"),i=new RegExp("^[0-9]+$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return o.test(t)},e.testNumeric=function(t){return i.test(t)},e.testAlphanumeric=function(t){return s.test(t)}},6586:(t,e,r)=>{const n=r(6255),o=r(7020),i=r(6812),s=r(4860),a=r(7597),c=r(3445),u=r(6721),l=r(8333);function h(t){return unescape(encodeURIComponent(t)).length}function d(t,e,r){const n=[];let o;for(;null!==(o=t.exec(r));)n.push({data:o[0],index:o.index,mode:e,length:o[0].length});return n}function g(t){const e=d(c.NUMERIC,n.NUMERIC,t),r=d(c.ALPHANUMERIC,n.ALPHANUMERIC,t);let o,i;return u.isKanjiModeEnabled()?(o=d(c.BYTE,n.BYTE,t),i=d(c.KANJI,n.KANJI,t)):(o=d(c.BYTE_KANJI,n.BYTE,t),i=[]),e.concat(r,o,i).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function f(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return a.getBitsLength(t);case n.BYTE:return s.getBitsLength(t)}}function p(t,e){let r;const c=n.getBestModeForData(t);if(r=n.from(e,c),r!==n.BYTE&&r.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(c));switch(r!==n.KANJI||u.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new a(t);case n.BYTE:return new s(t)}}e.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(p(e,null)):e.data&&t.push(p(e.data,e.mode)),t},[])},e.fromString=function(t,r){const o=function(t,e){const r={},o={start:{}};let i=["start"];for(let s=0;s<t.length;s++){const a=t[s],c=[];for(let t=0;t<a.length;t++){const u=a[t],l=""+s+t;c.push(l),r[l]={node:u,lastCount:0},o[l]={};for(let t=0;t<i.length;t++){const s=i[t];r[s]&&r[s].node.mode===u.mode?(o[s][l]=f(r[s].lastCount+u.length,u.mode)-f(r[s].lastCount,u.mode),r[s].lastCount+=u.length):(r[s]&&(r[s].lastCount=u.length),o[s][l]=f(u.length,u.mode)+4+n.getCharCountIndicator(u.mode,e))}}i=c}for(let n=0;n<i.length;n++)o[i[n]].end=0;return{map:o,table:r}}(function(t){const e=[];for(let r=0;r<t.length;r++){const o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:h(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:h(o.data)}])}}return e}(g(t,u.isKanjiModeEnabled())),r),i=l.find_path(o.map,"start","end"),s=[];for(let e=1;e<i.length-1;e++)s.push(o.table[i[e]].node);return e.fromArray(s.reduce(function(t,e){const r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[]))},e.rawSplit=function(t){return e.fromArray(g(t,u.isKanjiModeEnabled()))}},6721:(t,e)=>{let r;const n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return n[t]},e.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');r=t},e.isKanjiModeEnabled=function(){return void 0!==r},e.toSJIS=function(t){return r(t)}},3994:(t,e)=>{e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},5273:(t,e,r)=>{const n=r(6721),o=r(3528),i=r(109),s=r(6255),a=r(3994),c=n.getBCHDigit(7973);function u(t,e){return s.getCharCountIndicator(t,e)+4}function l(t,e){let r=0;return t.forEach(function(t){const n=u(t.mode,e);r+=n+t.getBitsLength()}),r}e.from=function(t,e){return a.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!a.isValid(t))throw new Error("Invalid QR Code version");void 0===r&&(r=s.BYTE);const i=8*(n.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,e));if(r===s.MIXED)return i;const c=i-u(r,t);switch(r){case s.NUMERIC:return Math.floor(c/10*3);case s.ALPHANUMERIC:return Math.floor(c/11*2);case s.KANJI:return Math.floor(c/13);case s.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,r){let n;const o=i.from(r,i.M);if(Array.isArray(t)){if(t.length>1)return function(t,r){for(let n=1;n<=40;n++)if(l(t,n)<=e.getCapacity(n,r,s.MIXED))return n}(t,o);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,r,n){for(let o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}(n.mode,n.getLength(),o)},e.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");let e=t<<12;for(;n.getBCHDigit(e)-c>=0;)e^=7973<<n.getBCHDigit(e)-c;return t<<12|e}},1956:(t,e,r)=>{const n=r(5797);e.render=function(t,e,r){let o=r,i=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=n.getOptions(o);const s=n.getImageWidth(t.modules.size,o),a=i.getContext("2d"),c=a.createImageData(s,s);return n.qrToImageData(c.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(a,i,s),a.putImageData(c,0,0),i},e.renderToDataURL=function(t,r,n){let o=n;return void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={}),e.render(t,r,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},8670:(t,e,r)=>{const n=r(5797);function o(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){let n=t+e;return void 0!==r&&(n+=" "+r),n}e.render=function(t,e,r){const s=n.getOptions(e),a=t.modules.size,c=t.modules.data,u=a+2*s.margin,l=s.color.light.a?"<path "+o(s.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+o(s.color.dark,"stroke")+' d="'+function(t,e,r){let n="",o=0,s=!1,a=0;for(let c=0;c<t.length;c++){const u=Math.floor(c%e),l=Math.floor(c/e);u||s||(s=!0),t[c]?(a++,c>0&&u>0&&t[c-1]||(n+=s?i("M",u+r,.5+l+r):i("m",o,0),o=0,s=!1),u+1<e&&t[c+1]||(n+=i("h",a),a=0)):o++}return n}(c,a,s.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(s.width?'width="'+s.width+'" height="'+s.width+'" ':"")+'viewBox="0 0 '+u+" "+u+'" shape-rendering="crispEdges">'+l+h+"</svg>\n";return"function"==typeof r&&r(null,d),d}},5797:(t,e)=>{function r(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}e.getOptions=function(t){t||(t={}),t.color||(t.color={});const e=t.width&&t.width>=21?t.width:void 0;return{width:e,scale:e?4:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:r(t.color.dark||"#000000ff"),light:r(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){const n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){const o=r.modules.size,i=r.modules.data,s=e.getScale(o,n),a=Math.floor((o+2*n.margin)*s),c=n.margin*s,u=[n.color.light,n.color.dark];for(let e=0;e<a;e++)for(let r=0;r<a;r++){let l=4*(e*a+r),h=n.color.light;e>=c&&r>=c&&e<a-c&&r<a-c&&(h=u[i[Math.floor((e-c)/s)*o+Math.floor((r-c)/s)]?1:0]),t[l++]=h.r,t[l++]=h.g,t[l++]=h.b,t[l]=h.a}}},8333:t=>{"use strict";var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var s,a,c,u,l,h,d=e.PriorityQueue.make();for(d.push(r,0);!d.empty();)for(c in u=(s=d.pop()).cost,l=t[a=s.value]||{})l.hasOwnProperty(c)&&(h=u+l[c],(void 0===i[c]||i[c]>h)&&(i[c]=h,d.push(c,h),o[c]=a));if(void 0!==n&&void 0===i[n]){var g=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},1522:t=>{"use strict";t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},8018:(t,e,r)=>{"use strict";r.r(e),r.d(e,{CodigoQrPageModule:()=>p});var n=r(8583),o=r(665),i=r(7823),s=r(7860),a=r(639),c=r(2977),u=r(8010);const l=["qrcElement"];let h=(()=>{class t{constructor(t){this.renderer=t,this.allowEmptyString=!1,this.colorDark="#000000ff",this.colorLight="#ffffffff",this.cssClass="qrcode",this.elementType="canvas",this.errorCorrectionLevel="M",this.margin=4,this.qrdata="",this.scale=4,this.width=10,this.context=null}async ngOnChanges(){await this.createQRCode()}isValidQrCodeText(t){return!1===this.allowEmptyString?!(void 0===t||""===t||"null"===t||null===t):!(void 0===t)}toDataURL(t){return new Promise((e,r)=>{u.hz(this.qrdata,t,(t,n)=>{t?r(t):e(n)})})}toCanvas(t,e){return new Promise((r,n)=>{u.rT(t,this.qrdata,e,t=>{t?n(t):r("success")})})}toSVG(t){return new Promise((e,r)=>{u.toString(this.qrdata,t,(t,n)=>{t?r(t):e(n)})})}renderElement(t){for(const e of this.qrcElement.nativeElement.childNodes)this.renderer.removeChild(this.qrcElement.nativeElement,e);this.renderer.appendChild(this.qrcElement.nativeElement,t)}async createQRCode(){this.version&&this.version>40?(console.warn("[angularx-qrcode] max value for `version` is 40"),this.version=40):this.version&&this.version<1?(console.warn("[angularx-qrcode]`min value for `version` is 1"),this.version=1):void 0!==this.version&&isNaN(this.version)&&(console.warn("[angularx-qrcode] version should be a number, defaulting to auto."),this.version=void 0);try{if(!this.isValidQrCodeText(this.qrdata))throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");this.isValidQrCodeText(this.qrdata)&&""===this.qrdata&&(this.qrdata=" ");const t={color:{dark:this.colorDark,light:this.colorLight},errorCorrectionLevel:this.errorCorrectionLevel,margin:this.margin,scale:this.scale,type:this.elementType,version:this.version,width:this.width},e=this.imageSrc,r=this.imageHeight||40,n=this.imageWidth||40;switch(this.elementType){case"canvas":const o=this.renderer.createElement("canvas");this.context=o.getContext("2d"),this.toCanvas(o,t).then(()=>{if(this.ariaLabel&&this.renderer.setAttribute(o,"aria-label",`${this.ariaLabel}`),this.title&&this.renderer.setAttribute(o,"title",`${this.title}`),e&&this.context){this.centerImage=new Image(n,r),e!==this.centerImage.src&&(this.centerImage.src=e),r!==this.centerImage.height&&(this.centerImage.height=r),n!==this.centerImage.width&&(this.centerImage.width=n);const t=this.centerImage;t&&(t.onload=()=>{this.context?.drawImage(t,o.width/2-n/2,o.height/2-r/2,n,r)})}this.renderElement(o)}).catch(t=>{console.error("[angularx-qrcode] canvas error:",t)});break;case"svg":const i=this.renderer.createElement("div");this.toSVG(t).then(t=>{this.renderer.setProperty(i,"innerHTML",t);const e=i.firstChild;this.renderer.setAttribute(e,"height",`${this.width}`),this.renderer.setAttribute(e,"width",`${this.width}`),this.renderElement(e)}).catch(t=>{console.error("[angularx-qrcode] svg error:",t)});break;case"url":case"img":default:const s=this.renderer.createElement("img");this.toDataURL(t).then(t=>{this.alt&&s.setAttribute("alt",this.alt),this.ariaLabel&&s.setAttribute("aria-label",this.ariaLabel),s.setAttribute("src",t),this.title&&s.setAttribute("title",this.title),this.renderElement(s)}).catch(t=>{console.error("[angularx-qrcode] img/url error:",t)})}}catch(t){console.error("[angularx-qrcode] Error generating QR Code:",t.message)}}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.Qsj))},t.\u0275cmp=a.Xpm({type:t,selectors:[["qrcode"]],viewQuery:function(t,e){if(1&t&&a.Gf(l,7),2&t){let t;a.iGM(t=a.CRH())&&(e.qrcElement=t.first)}},inputs:{allowEmptyString:"allowEmptyString",colorDark:"colorDark",colorLight:"colorLight",cssClass:"cssClass",elementType:"elementType",errorCorrectionLevel:"errorCorrectionLevel",imageSrc:"imageSrc",imageHeight:"imageHeight",imageWidth:"imageWidth",margin:"margin",qrdata:"qrdata",scale:"scale",version:"version",width:"width",alt:"alt",ariaLabel:"ariaLabel",title:"title"},features:[a.TTD],decls:2,vars:2,consts:[["qrcElement",""]],template:function(t,e){1&t&&a._UZ(0,"div",null,0),2&t&&a.Tol(e.cssClass)},encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[]}),t})();const g=[{path:"",component:(()=>{class t{constructor(t){this.emisorService=t,this.emisor={}}ngOnInit(){this.obtenerID(),this.qrcreator()}qrcreator(){this.idSolicitud=this.emisor._id,this.qrdata=`www.google.com/${this.idSolicitud}`}obtenerID(){this.emisorService.Objeto.subscribe(t=>{this.emisor=t})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c.i))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-codigo-qr"]],decls:11,vars:7,consts:[[1,"cabecera"],["slot","start"],["defaultHref","/main/tabs/ops-cert","color","light"],["color","light",1,"vecired"],["padding",""],[1,"qr-container"],[3,"qrdata","width","colorDark","imageSrc","imageHeight","imageWidth"],[1,"mi-texto"]],template:function(t,e){1&t&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-buttons",1),a._UZ(3,"ion-back-button",2),a.qZA(),a.TgZ(4,"ion-title",3),a._uU(5,"VeciRed"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-content",4),a.TgZ(7,"div",5),a._UZ(8,"qrcode",6),a.qZA(),a.TgZ(9,"ion-text",7),a._uU(10),a.qZA(),a.qZA()),2&t&&(a.xp6(8),a.Q6J("qrdata",e.qrdata)("width",300)("colorDark","#3f51b5")("imageSrc","/assets/icon/VeciRed.png")("imageHeight",75)("imageWidth",75),a.xp6(2),a.hij("ID de Solictud: ",e.idSolicitud,""))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,h,i.yW],styles:[".vecired[_ngcontent-%COMP%]{color:#f0f8ff;font-weight:bolder;font-size:x-large;text-align:center}.cabecera[_ngcontent-%COMP%]{--background:linear-gradient(135deg,#110a3b,#2f32a0)}.loader[_ngcontent-%COMP%]{position:fixed;top:40%;left:35%;width:100px;height:100px}.mi-texto[_ngcontent-%COMP%]{font-style:italic;position:fixed;top:75%;left:20%;right:20%}.qr-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:90%}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,o.u5,i.Pc,f,d]]}),t})()}}]);