(()=>{"use strict";var e,a,f,d,t,r,c={},b={};function o(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={exports:{}};return c[e].call(f.exports,f,f.exports,o),f.exports}o.m=c,e=[],o.O=(a,f,d,t)=>{if(!f){var r=1/0;for(n=0;n<e.length;n++){for(var[f,d,t]=e[n],c=!0,b=0;b<f.length;b++)(!1&t||r>=t)&&Object.keys(o.O).every(e=>o.O[e](f[b]))?f.splice(b--,1):(c=!1,t<r&&(r=t));c&&(e.splice(n--,1),a=d())}return a}t=t||0;for(var n=e.length;n>0&&e[n-1][2]>t;n--)e[n]=e[n-1];e[n]=[f,d,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&d&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach(a=>r[a]=()=>e[a]);return r.default=()=>e,o.d(t,r),t},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce((a,f)=>(o.f[f](e,a),a),[])),o.u=e=>(({1843:"polyfills-css-shim",2214:"polyfills-core-js",6748:"polyfills-dom",8592:"common"}[e]||e)+"."+{305:"2db705a2d69b737231d9",392:"81564ef6b49a87899aac",431:"0f0ca34cfc247c9dc233",586:"998d895151ef2ff97d10",592:"91466f0bf794aca96285",801:"98c3d5edc3d9147a0ce5",862:"db176af262d4a2ec5f38",896:"227cebaf28497b233a5e",937:"729b8440af98d5bc33fa",1296:"54e131250a37b900dc7a",1374:"5e53b47c2f57b9aaf238",1489:"eb2a2124cfd59a2e45ed",1602:"44bf7a891dc50fb7669c",1709:"2fa83bb50db47fa5e24c",1843:"e68c60816d9bb9290f3d",1855:"1757f881a44fdc869314",2161:"73fb0c170702bfd3a4ed",2191:"bfb0a63f737e09321b3b",2214:"09f96590c2f422007d76",2432:"d06178338ec6611fbcf6",3087:"1535a0aaf2f31ec923b8",3122:"aee25e6e4c7718a9012f",3272:"d4b1c2fc921a1b596984",3527:"552d7bfb531e5555d3d1",4191:"8686da50fc0bb2bb1993",4195:"8663a58dc38fa9312a50",4440:"6c66948ef0675bcda11c",4513:"4145588486042b397709",4694:"050a71603148b37f3e82",5043:"773084a3f81d4480fefa",5174:"f9b36fb6ee50b3e39f9b",5277:"031e4f61ca96cb9d59fe",5830:"ed58ba38a255acf00084",6034:"45c96f19e3bd04232b8e",6069:"ecfa1137931f730fcad4",6108:"420999c355f1510fd308",6164:"9a1baf4c5f0260c5a989",6272:"fd4414d31e3dc100d9f3",6748:"b107d82d357ef83c7374",6911:"5488ef73f34b1b2c999b",7089:"00f142a6ba19ecf026ac",7110:"6611cb6533531f5304d7",7162:"627676b8a816e6a0c9f4",7321:"71a2a5fd329a32691d23",7509:"61f321e83d37aff4ea4c",7733:"ef8891434a43c876d8bc",7757:"86d0d74a595dc36a3d57",7802:"d9f872e2099a5ca6dd14",7895:"1877591112466a083a06",7896:"defe8bb5ddc6438ffbf6",8056:"0931dbdaf1827049c180",8194:"1391a48fa7dd680d5570",8592:"59958355d51fce111344",8669:"6dde6f3a09e27e982db9",8695:"81609b27d53f470dadbf",8708:"d81a7640fd7a37816a6d",8810:"b44cba36de927aa93079",8837:"478cbb2a782d14add539",8991:"7daa7e936faee972398d",9072:"de40a47ab70b38557d5b",9222:"1b97aae3d1d194b44d15",9695:"222f78e3ad27cb2e974a",9921:"fb9259d27e4260969966"}[e]+".js"),o.miniCssF=e=>"styles.7ace13d3ce405e2d610f.css",o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="excel-to-anki:",o.l=(e,a,f,r)=>{if(d[e])d[e].push(a);else{var c,b;if(void 0!==f)for(var n=document.getElementsByTagName("script"),l=0;l<n.length;l++){var i=n[l];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==t+f){c=i;break}}c||(b=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+f),c.src=o.tu(e)),d[e]=[a];var u=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach(e=>e(f)),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=u.bind(null,c.onerror),c.onload=u.bind(null,c.onload),b&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.tu=e=>(void 0===r&&(r={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("angular#bundler",r))),r.createScriptURL(e)),o.p="",(()=>{var e={3666:0};o.f.j=(a,f)=>{var d=o.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(3666!=a){var t=new Promise((f,t)=>d=e[a]=[f,t]);f.push(d[2]=t);var r=o.p+o.u(a),c=new Error;o.l(r,f=>{if(o.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,d[1](c)}},"chunk-"+a,a)}else e[a]=0},o.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,[r,c,b]=f,n=0;for(d in c)o.o(c,d)&&(o.m[d]=c[d]);if(b)var l=b(o);for(a&&a(f);n<r.length;n++)o.o(e,t=r[n])&&e[t]&&e[t][0](),e[r[n]]=0;return o.O(l)},f=self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();