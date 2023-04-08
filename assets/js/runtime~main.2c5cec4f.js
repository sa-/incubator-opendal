(()=>{"use strict";var e,t,r,o,a,n={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return n[e].call(r.exports,r,r.exports,c),r.exports}c.m=n,e=[],c.O=(t,r,o,a)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],a=e[b][2];for(var f=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(f=!1,a<n&&(n=a));if(f){e.splice(b--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[r,o,a]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);c.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(a,n),a},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>"assets/js/"+({13:"01a85c17",53:"935f2afb",89:"a6aa9e1f",96:"7f3d7384",103:"ccc49370",157:"283e63f8",195:"c4f5d8e4",212:"20f77fac",309:"4fb2b91a",358:"f3200a52",372:"1db64337",477:"b2f554cd",514:"1be78505",533:"b2b675dd",535:"814f3328",592:"common",608:"9e4087bc",610:"6875c492",661:"3806ecb0",713:"a7023ddc",832:"ece86388",918:"17896441"}[e]||e)+"."+{13:"1ab53d4b",53:"9f000b24",89:"d051bb68",96:"5c70770c",103:"6ef4fa55",157:"c5889d28",195:"2cbb4039",212:"437fe5c5",309:"c4e0977c",358:"3a8c6075",372:"177adc67",477:"63d13840",514:"3c796d84",533:"035f3452",535:"03be8526",592:"edf834a8",608:"c481a347",610:"a26a8c20",661:"d2c86b76",713:"edd4bb6a",832:"f1337e80",918:"49094f9c",972:"6be868f4"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="opendal-website:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),b=0;b<d.length;b++){var u=d[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){f=u;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var l=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/",c.gca=function(e){return e={17896441:"918","01a85c17":"13","935f2afb":"53",a6aa9e1f:"89","7f3d7384":"96",ccc49370:"103","283e63f8":"157",c4f5d8e4:"195","20f77fac":"212","4fb2b91a":"309",f3200a52:"358","1db64337":"372",b2f554cd:"477","1be78505":"514",b2b675dd:"533","814f3328":"535",common:"592","9e4087bc":"608","6875c492":"610","3806ecb0":"661",a7023ddc:"713",ece86388:"832"}[e]||e,c.p+c.u(e)},(()=>{var e={303:0,532:0};c.f.j=(t,r)=>{var o=c.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=c.p+c.u(t),f=new Error;c.l(n,(r=>{if(c.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],i=r[2],d=0;if(n.some((t=>0!==e[t]))){for(o in f)c.o(f,o)&&(c.m[o]=f[o]);if(i)var b=i(c)}for(t&&t(r);d<n.length;d++)a=n[d],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(b)},r=self.webpackChunkopendal_website=self.webpackChunkopendal_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();