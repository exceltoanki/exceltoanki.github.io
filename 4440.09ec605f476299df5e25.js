(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[4440],{4440:(n,o,t)=>{"use strict";t.r(o),t.d(o,{HoSoPageModule:()=>x});var e=t(8583),i=t(665),s=t(7823),c=t(649),r=t(4762),a=t(639),l=t(8194),h=t(3815);let g=(()=>{class n{transform(n,o){return n?o?(o=o.toLowerCase(),n.filter(function(n){return JSON.stringify({n:n.name,d:n.description}).toLowerCase().includes(o)})):n:null}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=a.Yjl({name:"searchFilter",type:n,pure:!0}),n})();function d(n,o){if(1&n&&(a.TgZ(0,"div",19),a.TgZ(1,"ion-badge",0),a._uU(2),a.qZA(),a.TgZ(3,"ion-badge",20),a._uU(4),a.qZA(),a.qZA()),2&n){const n=a.oxw().$implicit;a.xp6(2),a.hij("",null==n.stats?null:n.stats.sheets,"s"),a.xp6(2),a.hij("",null==n.stats?null:n.stats.notes,"n")}}function u(n,o){1&n&&a._UZ(0,"ion-spinner",21)}function p(n,o){1&n&&a._UZ(0,"ion-icon",22)}function m(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"ion-button",23),a.NdJ("click",function(){a.CHM(n);const o=a.oxw().$implicit;return a.oxw().mogooglesheet(o)}),a._UZ(1,"ion-icon",24),a.TgZ(2,"span"),a._uU(3," Gg Sheet "),a.qZA(),a.qZA()}}function f(n,o){if(1&n){const n=a.EpF();a.TgZ(0,"ion-col",7),a.TgZ(1,"section"),a.TgZ(2,"ion-card",8),a.NdJ("click",function(o){const t=a.CHM(n).$implicit;return a.oxw().goToHoSoDetail(o.target,t)}),a.TgZ(3,"ion-card-header"),a.TgZ(4,"ion-card-title"),a._uU(5),a.qZA(),a.TgZ(6,"ion-card-subtitle"),a._uU(7),a.qZA(),a.YNc(8,d,5,2,"div",9),a.qZA(),a.TgZ(9,"section",10),a.TgZ(10,"ion-button",11),a.NdJ("click",function(){const o=a.CHM(n).$implicit;return a.oxw().chayTaoAnki(o)}),a.YNc(11,u,1,0,"ion-spinner",12),a.YNc(12,p,1,0,"ion-icon",13),a._uU(13," T\u1ea1o anki "),a.qZA(),a.TgZ(14,"ion-button",14),a.NdJ("click",function(){const o=a.CHM(n).$implicit;return a.oxw().copyHoso(o)}),a._UZ(15,"ion-icon",15),a.TgZ(16,"span"),a._uU(17," Sao ch\xe9p "),a.qZA(),a.qZA(),a.YNc(18,m,4,0,"ion-button",16),a.TgZ(19,"ion-button",17),a.NdJ("click",function(){const o=a.CHM(n).$implicit;return a.oxw().xoaHoSo(o)}),a._UZ(20,"ion-icon",18),a.TgZ(21,"span",3),a._uU(22,"X\xf3a"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&n){const n=o.$implicit;a.xp6(5),a.Oqu(n.name),a.xp6(2),a.hij("",n.description," "),a.xp6(1),a.Q6J("ngIf",n.stats),a.xp6(2),a.Q6J("disabled",n.creatingAnki),a.xp6(1),a.Q6J("ngIf",n.creatingAnki),a.xp6(1),a.Q6J("ngIf",!n.creatingAnki),a.xp6(6),a.Q6J("ngIf",n.ggsheeteditlink)}}const Z=[{path:"",component:(()=>{class n{constructor(n,o,t,e,i){this.hosoService=n,this.router=o,this.getexcelService=t,this.toastController=e,this.alertController=i,this.searchquery="",this.danhsachhoso=[],this.danhsachhoso=this.hosoService.danhsachhoso}presentToast(n,o="success"){return(0,r.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:n,duration:1e3,color:o})).present()})}ngOnInit(){}goToHoSoDetail(n,o){n.localName.startsWith("ion-card")&&this.router.navigate(["/ho-so-chi-tiet"],{state:{hoso:o},skipLocationChange:!0})}chayTaoAnki(n){return(0,r.mG)(this,void 0,void 0,function*(){n.creatingAnki=!0,"createok"==(yield this.getexcelService.getGoogleSheet(n))&&this.hosoService.updateHoSo(n)})}copyHoso(n,o="Copy of "){return(0,r.mG)(this,void 0,void 0,function*(){let t=Object.assign({},n);t.name=o+t.name,t.id=null,t.createdAt=null,(yield this.hosoService.addNewHoSo(t))?this.presentToast("\u0110\xe3 sao ch\xe9p h\u1ed3 s\u01a1 th\xe0nh c\xf4ng."):this.presentToast(`\u0110\xe3 c\xf3 h\u1ed3 s\u01a1 copy c\u1ee7a h\u1ed3 s\u01a1 ${t.name} r\u1ed3i.`,"danger")})}mogooglesheet(n){window.open(n.ggsheeteditlink,"_blank")}xoaHoSo(n){return(0,r.mG)(this,void 0,void 0,function*(){const o=yield this.alertController.create({header:"X\xf3a h\u1ed3 s\u01a1",cssClass:"xoahoso",message:"B\u1ea1n th\u1eadt s\u1ef1 mu\u1ed1n x\xf3a h\u1ed3 s\u01a1 n\xe0y? <br/>\n      M\u1ed9t khi \u0111\xe3 x\xf3a s\u1ebd kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c l\u1ea1i.",buttons:[{text:"H\u1ee7y",role:"cancel"},{text:"X\xf3a",role:"delete",cssClass:"ion-color ion-color-danger"}]});yield o.present();const{role:t}=yield o.onDidDismiss();"delete"==t&&(this.hosoService.xoaHoSo(n),this.presentToast("X\xf3a h\u1ed3 s\u01a1 th\xe0nh c\xf4ng","success"))})}taohosomacdinh(){this.copyHoso(this.hosoService.hosomacdinh,"")}}return n.\u0275fac=function(o){return new(o||n)(a.Y36(l.y),a.Y36(c.F0),a.Y36(h.v),a.Y36(s.yF),a.Y36(s.Br))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-ho-so"]],decls:15,vars:6,consts:[["color","primary"],["slot","primary","color","secondary"],["shape","round",1,"taohoso",3,"click"],[1,"hide960"],["slot","end","name","add"],["placeholder","T\xecm ki\u1ebfm","end","","showCancelButton","focus",3,"debounce","ngModel","ngModelChange"],["size-md","6","size-xs","12",4,"ngFor","ngForOf"],["size-md","6","size-xs","12"],["button","",3,"click"],["class","sheetstats",4,"ngIf"],[1,"ion-padding-bottom","ion-padding-start"],["size","small",3,"disabled","click"],["name","crescent",4,"ngIf"],["slot","start","name","caret-forward-circle-outline",4,"ngIf"],["size","small","color","primary",3,"click"],["slot","start","name","duplicate-outline"],["size","small","color","success",3,"click",4,"ngIf"],["size","small","color","danger",3,"click"],["name","trash-outline","slot","start"],[1,"sheetstats"],["color","danger"],["name","crescent"],["slot","start","name","caret-forward-circle-outline"],["size","small","color","success",3,"click"],["slot","start","name","logo-google"]],template:function(n,o){1&n&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar",0),a.TgZ(2,"ion-title"),a._uU(3,"H\u1ed3 s\u01a1"),a.qZA(),a.TgZ(4,"ion-buttons",1),a.TgZ(5,"ion-button",2),a.NdJ("click",function(){return o.taohosomacdinh()}),a.TgZ(6,"span",3),a._uU(7,"T\u1ea1o h\u1ed3 s\u01a1 m\u1eb7c \u0111\u1ecbnh"),a.qZA(),a._UZ(8,"ion-icon",4),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-searchbar",5),a.NdJ("ngModelChange",function(n){return o.searchquery=n}),a.qZA(),a.TgZ(10,"ion-content"),a.TgZ(11,"ion-grid"),a.TgZ(12,"ion-row"),a.YNc(13,f,23,7,"ion-col",6),a.ALo(14,"searchFilter"),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(9),a.Q6J("debounce",250)("ngModel",o.searchquery),a.xp6(4),a.Q6J("ngForOf",a.xi3(14,3,o.danhsachhoso,o.searchquery)))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.YG,s.gu,s.VI,s.j9,i.JJ,i.On,s.W2,s.jY,s.Nd,e.sg,s.wI,s.PM,s.Zi,s.gZ,s.tO,e.O5,s.yp,s.PQ],pipes:[g],styles:[".hoai[_ngcontent-%COMP%]{color:#0e03a5}.hoai[_ngcontent-%COMP%]:focus, .hoai[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{color:red}.hoai[_ngcontent-%COMP%]:focus{--color:red}ion-col[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover   ion-card[_ngcontent-%COMP%]{background-color:#e7ecff61}ion-col[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover   .sheetstats[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{transform:scale(.9);transition:transform .8s linear;-o-transition:transform .8s linear;-ms-transition:transform .8s linear;-moz-transition:transform .8s linear;-webkit-transition:transform .8s linear}.sheetstats[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px}.sheetstats[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{transform:scale(.7);transition:transform .4s linear;-o-transition:transform .4s linear;-ms-transition:transform .4s linear;-moz-transition:transform .4s linear;-webkit-transition:transform .4s linear}@media (max-width: 960px){ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:x-small}ion-grid[_ngcontent-%COMP%]   .hide960[_ngcontent-%COMP%]{display:none}ion-grid[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{transform:scale(.5)}}@media (max-width: 400px){ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:8px}ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.xoahoso[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{max-width:60%!important;width:90%}@media (max-width: 600px){.taohoso[_ngcontent-%COMP%]   .hide960[_ngcontent-%COMP%]{display:none}}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({}),n})(),x=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[e.ez,i.u5,s.Pc,C,_]]}),n})()}}]);