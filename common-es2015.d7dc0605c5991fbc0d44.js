(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[8592],{68225:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var i=n(23150),s=n(52954),o=n(39461);const c=(e,t)=>{let n,c;const r=(e,i,s)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(e,i);o&&t(o)?o!==n&&(l(),a(o,s)):l()},a=(e,t)=>{n=e,c||(c=n);const s=n;(0,i.c)(()=>s.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;(0,i.c)(()=>t.classList.remove("ion-activated")),e&&c!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>r(e.currentX,e.currentY,s.a),onMove:e=>r(e.currentX,e.currentY,s.b),onEnd:()=>{l(!0),(0,s.h)(),c=void 0}})}},77330:function(e,t,n){"use strict";n.d(t,{a:function(){return s},d:function(){return o}});var i=n(52377);const s=async(e,t,n,s,o)=>{if(e)return e.attachViewToDom(t,n,o,s);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const c="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return s&&s.forEach(e=>c.classList.add(e)),o&&Object.assign(c,o),t.appendChild(c),await new Promise(e=>(0,i.c)(c,e)),c},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},52954:function(e,t,n){"use strict";n.d(t,{a:function(){return o},b:function(){return c},c:function(){return s},d:function(){return a},h:function(){return r}});const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},s=()=>{i.selection()},o=()=>{i.selectionStart()},c=()=>{i.selectionChanged()},r=()=>{i.selectionEnd()},a=e=>{i.impact(e)}},66575:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let i=n.length-1;i>=0;i--){const e=n[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const c=o(e);for(let t=0;t<c.length;t++)s(c[t])}});const i=o(t);for(let e=0;e<i.length;e++)s(i[e]);const r=document.createElement("div");r.appendChild(t);const l=r.querySelector("div");return null!==l?l.innerHTML:r.innerHTML}catch(t){return console.error(t),""}},s=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!r.includes(i.toLowerCase())){e.removeAttribute(i);continue}const s=t.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=o(e);for(let n=0;n<t.length;n++)s(t[n])},o=e=>null!=e.children?e.children:e.childNodes,c=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},r=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},60408:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i=e*t/n-e+"ms",s=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,s=e*i-e+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},61269:function(e,t,n){"use strict";n.d(t,{c:function(){return s},g:function(){return o},h:function(){return i},o:function(){return r}});const i=(e,t)=>null!==t.closest(e),s=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,o=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},c=/^[a-z][a-z0-9+\-.]*:/,r=async(e,t,n,i)=>{if(null!=e&&"#"!==e[0]&&!c.test(e)){const s=document.querySelector("ion-router");if(s)return null!=t&&t.preventDefault(),s.push(e,n,i)}return!1}},71588:function(e,t,n){"use strict";n.d(t,{x:function(){return y}});var i=n(33018),s=n(92859),o=n(38120),c=n(8194),r=n(3538),a=n(96809),l=n(38583),h=n(90665);const u=function(e){return{selected:e}};function d(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"ion-chip",16),i.NdJ("click",function(){const t=i.CHM(e).$implicit;return i.oxw().clickTag(t)}),i._UZ(1,"ion-icon",17),i.TgZ(2,"ion-label"),i._uU(3),i.qZA(),i.qZA()}if(2&e){const e=t.$implicit,n=i.oxw();i.Q6J("ngClass",i.VKq(4,u,(null==n.secretKey.tags?null:n.secretKey.tags.indexOf(e))>-1))("color",(null==n.secretKey.tags?null:n.secretKey.tags.indexOf(e))>-1?"primary":""),i.xp6(1),i.Q6J("name",(null==n.secretKey.tags?null:n.secretKey.tags.indexOf(e))>-1?"checkmark-outline":"pricetag-outline"),i.xp6(2),i.Oqu(e)}}function g(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"ion-segment-button",18),i.NdJ("click",function(){return i.CHM(e),i.oxw().shareHuyConfirm()}),i.TgZ(1,"ion-label"),i._uU(2,"H\u1ee7y share"),i.qZA(),i._UZ(3,"ion-icon",19),i.qZA()}if(2&e){const e=i.oxw();i.Q6J("disabled",!e.secretKey.shared)}}let y=(()=>{class e{constructor(e,t,n,i,s){this.modalController=e,this.gistService=t,this.hosoService=n,this.toast=i,this.menuTagsService=s,this.firstTimeCheckAllCheck=!1,this.isSharing=!1}clickTag(e){-1!=this.secretKey.tags.indexOf(e)?this.secretKey.tags.splice(this.secretKey.tags.indexOf(e),1):this.secretKey.tags.push(e),this.checkCheckAll(),this.checkValidHoSo()}toggleCheckAll(){this.secretKey.tags=this.isCheckedAll?Array.from(this.tagsList):[],this.checkValidHoSo()}ngOnInit(){this.tagsList=this.menuTagsService.tagsList}ionViewWillEnter(){this.checkCheckAll(),this.checkValidHoSo()}checkCheckAll(){this.isCheckedAll=this.secretKey.tags.length==this.tagsList.size}save(){this.gistService.secretKeysUpdateTags({secretKeyIndex:this.secretKeyIndex,secretKey:this.secretKey})}dismissModal(){this.save(),this.modalController.dismiss()}checkValidHoSo(){this.HoSos=this.secretKey.AndFilter?this.hosoService.filterHoSoByTag(this.secretKey.tags):this.hosoService.filterHoSoByTagAND(this.secretKey.tags)}shareHosos(){if(this.isSharing=!0,0==this.HoSos.length)return this.toast.presentToast({message:"Kh\xf4ng c\xf3 h\u1ed3 s\u01a1 n\xe0o th\u1ecfa \u0111i\u1ec1u ki\u1ec7n",color:"danger"}),this.isSharing=!1,!1;this.gistService.serverShare(this.HoSos,this.secretKey),this.isSharing=!1}shareCopyLink(){var e,t;navigator.clipboard.writeText(null===(e=this.secretKey.shared)||void 0===e?void 0:e.copyUrl),this.toast.presentToast({message:`${null===(t=this.secretKey.shared)||void 0===t?void 0:t.copyUrl} copied`,color:"warning"})}shareHuyConfirm(){}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(s.IN),i.Y36(o.H),i.Y36(c.y),i.Y36(r.k),i.Y36(a.J))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-sync-server"]],inputs:{secretKey:"secretKey",secretKeyIndex:"secretKeyIndex"},decls:34,vars:10,consts:[["color","primary","translucent",""],["slot","end"],[3,"click"],["slot","icon-only","name","save-outline"],["slot","icon-only","name","close-circle-outline"],[1,"ion-padding"],[1,"menutags"],[3,"ngClass","color","click",4,"ngFor","ngForOf"],["size-md","6"],["slot","end",3,"ngModel","ngModelChange"],["color","warning","scrollable",""],["value","share","layout","icon-start",3,"disabled","click"],[3,"name"],["value","copy","layout","icon-start",3,"disabled","click"],["name","copy-outline"],["value","unshare","layout","icon-start",3,"disabled","click",4,"ngIf"],[3,"ngClass","color","click"],["color","primary",3,"name"],["value","unshare","layout","icon-start",3,"disabled","click"],["name","remove-circle-outline"]],template:function(e,t){1&e&&(i.TgZ(0,"ion-header"),i.TgZ(1,"ion-toolbar",0),i.TgZ(2,"ion-title"),i._uU(3),i.qZA(),i.TgZ(4,"ion-buttons",1),i.TgZ(5,"ion-button",2),i.NdJ("click",function(){return t.save()}),i._UZ(6,"ion-icon",3),i.qZA(),i.TgZ(7,"ion-button",2),i.NdJ("click",function(){return t.dismissModal()}),i._UZ(8,"ion-icon",4),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(9,"ion-content",5),i.TgZ(10,"div",6),i.YNc(11,d,4,6,"ion-chip",7),i.qZA(),i.TgZ(12,"ion-row"),i.TgZ(13,"ion-col",8),i.TgZ(14,"ion-item",2),i.NdJ("click",function(){return t.toggleCheckAll()}),i.TgZ(15,"ion-label"),i._uU(16,"Ch\u1ecdn t\u1ea5t c\u1ea3"),i.qZA(),i.TgZ(17,"ion-checkbox",9),i.NdJ("ngModelChange",function(e){return t.isCheckedAll=e}),i.qZA(),i.qZA(),i.qZA(),i.TgZ(18,"ion-col",8),i.TgZ(19,"ion-item",2),i.NdJ("click",function(){return t.checkValidHoSo()}),i.TgZ(20,"ion-label"),i._uU(21,"\u0110i\u1ec1u ki\u1ec7n: V\xc0?"),i.qZA(),i.TgZ(22,"ion-checkbox",9),i.NdJ("ngModelChange",function(e){return t.secretKey.AndFilter=e}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(23,"div"),i.TgZ(24,"ion-segment",10),i.TgZ(25,"ion-segment-button",11),i.NdJ("click",function(){return t.shareHosos()}),i.TgZ(26,"ion-label"),i._uU(27),i.qZA(),i._UZ(28,"ion-icon",12),i.qZA(),i.TgZ(29,"ion-segment-button",13),i.NdJ("click",function(){return t.shareCopyLink()}),i.TgZ(30,"ion-label"),i._uU(31,"Copy link"),i.qZA(),i._UZ(32,"ion-icon",14),i.qZA(),i.YNc(33,g,4,1,"ion-segment-button",15),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(3),i.AsE("",t.secretKey.hint,"'s tags: ",null==t.HoSos?null:t.HoSos.length," h\u1ed3 s\u01a1"),i.xp6(8),i.Q6J("ngForOf",t.tagsList),i.xp6(6),i.Q6J("ngModel",t.isCheckedAll),i.xp6(5),i.Q6J("ngModel",t.secretKey.AndFilter),i.xp6(3),i.Q6J("disabled",t.isSharing),i.xp6(2),i.Oqu(t.secretKey.shared?"Update":"Share"),i.xp6(1),i.Q6J("name",t.secretKey.shared?"cloud-upload-outline":"share-social-outline"),i.xp6(1),i.Q6J("disabled",!(null!=t.secretKey.shared&&t.secretKey.shared.copyUrl)),i.xp6(4),i.Q6J("ngIf",!(null!=t.secretKey.shared&&t.secretKey.shared.fromServer)))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.YG,s.gu,s.W2,l.sg,s.Nd,s.wI,s.Ie,s.Q$,s.nz,s.w,h.JJ,h.On,s.cJ,s.QI,s.GO,l.O5,s.hM,l.mk],styles:[""]}),e})()},44010:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});const i={cloze:{header:"C\xe0i \u0111\u1eb7t: Cloze All-in-one",msg:"<b>B\u1eadt All-in-one mode</b>: n\u1ebfu c\u1ed9t Front c\xf3 \u22652 clozes \u2192 t\u1ea5t c\u1ea3 clozes \u0111\u01b0\u1ee3c \u1ea9n/hi\u1ec7n c\xf9ng l\xfac\n<b>T\u1eaft All-in-one</b>: n\u1ebfu c\u1ed9t Front c\xf3 \u22652 clozes \u2192 clozes hi\u1ec7n theo th\u1ee9 t\u1ef1",link:"https://hoaiump.notion.site/Cloze-all-in-one-a413eb7c484d430e84422c005aeec752"},columns:{header:"C\xe0i \u0111\u1eb7t c\u1ed9t",msg:'<i>(T\xean c\u1ed9t t\u1ef1 c\u1eadp nh\u1eadt khi m\u1edf trang n\xe0y l\xean)</i>\n<b>T\xean: </b>\u0111\u01b0\u1ee3c l\u1ea5y t\u1ef1 \u0111\u1ed9ng t\u1eeb <i>Sheet th\u1ee9 t\u1ef1 1, H\xe0ng th\u1ee9 1</i>\n<b>Copy xu\u1ed1ng: </b>n\u1ebfu h\xe0ng k\u1ebf ti\u1ebfp c\xf3 c\u1ed9t n\xe0y tr\u1ed1ng, E2A s\u1ebd l\u1ea5y gi\xe1 tr\u1ecb c\u1ee7a \xf4 ph\xeda tr\xean g\u1ea7n nh\u1ea5t m\xe0 c\xf3 gi\xe1 tr\u1ecb (ph\xf9 h\u1ee3p v\u1edbi ti\xeau \u0111\u1ec1, d\u1eabn ngu\u1ed3n t\xe0i li\u1ec7u, t\xe1c gi\u1ea3..)\n<b>Thay th\u1ebf: </b>E2A s\u1ebd thay th\u1ebf c\xe1c gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c c\xe0i \u1edf "S\u1eeda Style \u2192 Replace", img, youtube,..',link:"https://hoaiump.notion.site/T-nh-n-ng-replace-2d1d5c103ccb42af9d4c5c6179335a4c"},share:{header:"T\xednh n\u0103ng chia s\u1ebb",msg:"<i>(B\u1ea1n ph\u1ea3i c\xe0i Github personal access token \u0111\u1ec3 c\xf3 th\u1ec3 chia s\u1ebb)</i>\n<b>Share:</b> t\u1ea1o m\u1ed9t \u0111\u01b0\u1eddng d\u1eabn chia s\u1ebb cho h\u1ed3 s\u01a1 n\xe0y, ng\u01b0\u1eddi c\xf3 \u0111\u01b0\u1eddng d\u1eabn n\xe0y c\xf3 th\u1ec3 import th\xf4ng tin h\u1ed3 s\u01a1 n\xe0y.\n<b>Update:</b> c\u1eadp nh\u1eadt l\u1ea1i h\u1ed3 s\u01a1 n\xe0y v\u1edbi c\xe1c ch\u1ec9nh s\u1eeda c\u1ee7a b\u1ea1n (VD: style, c\u1ed9t m\u1edbi,...)\n<b>Copy:</b> copy \u0111\u01b0\u1eddng d\u1eabn chia s\u1ebb v\xe0o clipboard(b\u1ea5m Ctrl+V \u0111\u1ec3 d\xe1n)\n<b>H\u1ee7y share:</b> h\u1ee7y v\xe0 x\xf3a \u0111\u01b0\u1eddng d\u1eabn \u0111\xf3 (!c\u1ea9n th\u1eadn).",link:"https://hoaiump.notion.site/L-y-Github-token-c698bca6a1694f9bacfb6266baac9bcd"},ggsheet:{header:"\u0110\u01b0\u1eddng d\u1eabn Google Sheet:",msg:'<b>\u0110\u1ec3 ch\u1ec9nh s\u1eeda:</b> \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ec3 b\u1ea1n c\xf3 th\u1ec3 truy c\u1eadp nhanh v\xe0o Google sheet c\u1ee7a h\u1ed3 s\u01a1 n\xe0y. Ch\u1ec9 mang \xfd ngh\u0129a truy c\u1eadp nhanh.\n<b>Publish to the web:</b> l\u1ea5y t\u1eeb "T\u1ec7p \u2192 Xu\u1ea5t b\u1ea3n l\xean web", ho\u1eb7c "File \u2192 Publish to the web". \u0110\xe2y l\xe0 \u0111\u01b0\u1eddng d\u1eabn quan tr\u1ecdng \u0111\u1ec3 E2A l\u1ea5y d\u1eef li\u1ec7u file Google Sheet c\u1ee7a b\u1ea1n \u0111\u1ec3 t\u1ea1o Anki package',link:"https://hoaiump.notion.site/Quy-tr-nh-t-o-h-s-m-i-43758bddc3024e04b850037dc1c12d0e"},tags:{header:"\u0110\u1eb7t tags:",msg:"T\u1ea1o tags: quay l\u1ea1i Danh s\xe1ch h\u1ed3 s\u01a1 \u2192 m\u1edf menu Tags \u0111\u1ec3 t\u1ea1o tags\nM\u1ed9t h\u1ed3 s\u01a1 c\xf3 th\u1ec3 c\xf3 nhi\u1ec1u tags\n<b>\xdd ngh\u0129a:</b> \u0111\u1ec3 l\u1ecdc (filter) c\xe1c h\u1ed3 s\u01a1 nhanh h\u01a1n",link:"https://hoaiump.notion.site/Th-m-xo-i-t-n-tags-add07093e86246caa6cc829d0b9eaddd"}}}}]);