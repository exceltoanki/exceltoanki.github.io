(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[2432],{2432:(n,o,i)=>{"use strict";i.r(o),i.d(o,{HoSoChiTietPageModule:()=>k});var t=i(8583),e=i(665),s=i(7823),g=i(649),l=i(4762),c=i(639),r=i(8194),a=i(3815),u=i(6809);function h(n,o){1&n&&c._UZ(0,"ion-spinner",29)}function Z(n,o){1&n&&c._UZ(0,"ion-icon",30)}const d=function(n){return{selected:n}};function p(n,o){if(1&n){const n=c.EpF();c.TgZ(0,"ion-chip",31),c.NdJ("click",function(){const o=c.CHM(n).$implicit;return c.oxw().clickTag(o)}),c._UZ(1,"ion-icon",32),c.TgZ(2,"ion-label"),c._uU(3),c.qZA(),c.qZA()}if(2&n){const n=o.$implicit,i=c.oxw();c.Q6J("ngClass",c.VKq(4,d,null==i.hoso.tags?null:i.hoso.tags.has(n)))("color",null!=i.hoso.tags&&i.hoso.tags.has(n)?"primary":""),c.xp6(1),c.Q6J("name",null!=i.hoso.tags&&i.hoso.tags.has(n)?"checkmark-outline":"pricetag-outline"),c.xp6(2),c.Oqu(n)}}function m(n,o){if(1&n){const n=c.EpF();c.TgZ(0,"ion-checkbox",13),c.NdJ("ngModelChange",function(o){return c.CHM(n),c.oxw().$implicit.copyxuong=o}),c.qZA()}if(2&n){const n=c.oxw().$implicit;c.Q6J("ngModel",n.copyxuong)}}function T(n,o){if(1&n){const n=c.EpF();c.TgZ(0,"ion-checkbox",13),c.NdJ("ngModelChange",function(o){return c.CHM(n),c.oxw().$implicit.replace=o}),c.qZA()}if(2&n){const n=c.oxw().$implicit;c.Q6J("ngModel",n.replace)}}function b(n,o){if(1&n&&(c.TgZ(0,"ion-row"),c.TgZ(1,"ion-col",24),c._uU(2),c.qZA(),c.TgZ(3,"ion-col",33),c._uU(4),c.qZA(),c.TgZ(5,"ion-col",24),c.YNc(6,m,1,1,"ion-checkbox",34),c.qZA(),c.TgZ(7,"ion-col",24),c.YNc(8,T,1,1,"ion-checkbox",34),c.qZA(),c.qZA()),2&n){const n=o.$implicit,i=o.index;c.xp6(2),c.Oqu(i+1),c.xp6(2),c.hij(" ",n.name," "),c.xp6(2),c.Q6J("ngIf",i>1),c.xp6(2),c.Q6J("ngIf",i>1)}}function A(n,o){1&n&&c._UZ(0,"ion-spinner",29)}function f(n,o){1&n&&(c.TgZ(0,"span"),c._uU(1,"kh\xf4ng c\xf3 \u1edf m\u1eb7t "),c.TgZ(2,"b"),c._uU(3,"tr\u01b0\u1edbc"),c.qZA(),c.qZA())}function q(n,o){1&n&&(c.TgZ(0,"span"),c._uU(1," kh\xf4ng c\xf3 \u1edf m\u1eb7t "),c.TgZ(2,"b"),c._uU(3,"sau"),c.qZA(),c.qZA())}function x(n,o){if(1&n&&(c.TgZ(0,"span"),c.TgZ(1,"b"),c._uU(2),c.qZA(),c.YNc(3,f,4,0,"span",35),c.YNc(4,q,4,0,"span",35),c._UZ(5,"br"),c.qZA()),2&n){const n=c.oxw().$implicit;c.xp6(2),c.hij("",n.name," "),c.xp6(1),c.Q6J("ngIf",!n.isinfront),c.xp6(1),c.Q6J("ngIf",!n.isinback)}}function _(n,o){if(1&n&&(c.TgZ(0,"span"),c.YNc(1,x,6,3,"span",35),c.qZA()),2&n){const n=o.$implicit;c.xp6(1),c.Q6J("ngIf",!n.isinfront||!n.isinback)}}const C=[{path:"",component:(()=>{class n{constructor(n,o,i,t){this.router=n,this.hososervice=o,this.getexcelservice=i,this.tagsservice=t,this.loadinggetcolumns$=this.getexcelservice.loadinggetcolumns$.subscribe(n=>{this.loadinggetcolumns=n,n||this.saveChinhSua(this.hoso)}),this.tagsList=this.tagsservice.tagsList}mogooglesheet(n){window.open(n,"_blank")}saveChinhSua(n){this.hososervice.updateHoSo(this.hoso)}updateColumnsWithExcel(){return(0,l.mG)(this,void 0,void 0,function*(){yield this.getexcelservice.getExcelColumns(this.hoso)})}openEditor(){this.router.navigate(["/ho-so-editor"],{state:{hoso:this.hoso},skipLocationChange:!0})}clickTag(n){var o;this.hoso.tags?this.hoso.tags.has(n)?null===(o=this.hoso.tags)||void 0===o||o.delete(n):this.hoso.tags.add(n):this.hoso.tags=(new Set).add(n),this.saveChinhSua(this.hoso)}ngOnInit(){this.router.getCurrentNavigation().extras.state?this.hoso=this.router.getCurrentNavigation().extras.state.hoso:this.router.navigate(["/t/ho-so"]),this.updateColumnsWithExcel()}ionViewWillLeave(){this.hoso.id&&(this.saveChinhSua(this.hoso),this.loadinggetcolumns$.unsubscribe())}ionViewDidEnter(){let n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode("\n      *::-webkit-scrollbar {\n        width: 8px;\n    }\n    *::-webkit-scrollbar-track {\n        background-color: #e4e4e4;\n        border-radius: 100px;\n    }\n    *::-webkit-scrollbar-thumb {\n        background-color: #3880ff;\n        border-radius: 100px;\n    }\n    ")),document.getElementsByTagName("ion-textarea")[0].appendChild(n),document.getElementsByTagName("ion-row")[0].appendChild(n)}}return n.\u0275fac=function(o){return new(o||n)(c.Y36(g.F0),c.Y36(r.y),c.Y36(a.v),c.Y36(u.J))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-ho-so-chi-tiet"]],decls:96,vars:14,consts:[["color","primary"],["slot","start"],[3,"text"],["slot","primary","color","secondary"],["shape","round",3,"click"],[1,"hide960"],["slot","end","name","color-palette-outline"],["shape","round",1,"taohoso",3,"disabled","click"],["name","lines-small",4,"ngIf"],["slot","end","name","save",4,"ngIf"],[1,"ion-padding"],["size-md","6","size-xs","12"],["position","floating"],[3,"ngModel","ngModelChange"],["rows","3",3,"ngModel","ngModelChange"],["description",""],[3,"ngClass","color","click",4,"ngFor","ngForOf"],[1,"link",3,"ngModel","ngModelChange"],["color","primary",3,"click"],["slot","icon-only","name","open-outline"],["position","floating","color","danger"],["slot","icon-only","name","eye-outline"],["size-xs","12"],[1,"ion-margin","table"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],[1,"tablecolumns"],["color","success",3,"click"],["slot","start","name","repeat-outline"],["name","lines-small"],["slot","end","name","save"],[3,"ngClass","color","click"],[3,"name"],[1,"bold"],[3,"ngModel","ngModelChange",4,"ngIf"],[4,"ngIf"]],template:function(n,o){1&n&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button",2),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5),c.qZA(),c.TgZ(6,"ion-buttons",3),c.TgZ(7,"ion-button",4),c.NdJ("click",function(){return o.openEditor()}),c.TgZ(8,"span",5),c._uU(9,"S\u1eeda style"),c.qZA(),c._UZ(10,"ion-icon",6),c.qZA(),c.TgZ(11,"ion-button",7),c.NdJ("click",function(){return o.saveChinhSua(o.hoso)}),c.TgZ(12,"span",5),c._uU(13,"L\u01b0u"),c.qZA(),c.YNc(14,h,1,0,"ion-spinner",8),c.YNc(15,Z,1,0,"ion-icon",9),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(16,"ion-content",10),c.TgZ(17,"ion-grid"),c.TgZ(18,"ion-row"),c.TgZ(19,"ion-col",11),c.TgZ(20,"ion-item-group"),c.TgZ(21,"ion-item-divider"),c.TgZ(22,"ion-label"),c._uU(23,"Th\xf4ng tin m\xf4 t\u1ea3"),c.qZA(),c.qZA(),c.TgZ(24,"ion-item"),c.TgZ(25,"ion-label",12),c._uU(26,"T\xean h\u1ed3 s\u01a1"),c.qZA(),c.TgZ(27,"ion-input",13),c.NdJ("ngModelChange",function(n){return o.hoso.name=n}),c.qZA(),c.qZA(),c.TgZ(28,"ion-item"),c.TgZ(29,"ion-label",12),c._uU(30,"M\xf4 t\u1ea3"),c.qZA(),c.TgZ(31,"ion-textarea",14,15),c.NdJ("ngModelChange",function(n){return o.hoso.description=n}),c.qZA(),c.qZA(),c.TgZ(33,"div"),c.TgZ(34,"ion-item-group"),c.TgZ(35,"ion-item-divider"),c.TgZ(36,"ion-label"),c._uU(37,"Tags:"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"div"),c.YNc(39,p,4,6,"ion-chip",16),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"ion-col",11),c.TgZ(41,"ion-item-group"),c.TgZ(42,"ion-item-divider"),c.TgZ(43,"ion-label"),c._uU(44,"\u0110\u01b0\u1eddng d\u1eabn google sheet"),c.qZA(),c.qZA(),c.TgZ(45,"ion-item"),c.TgZ(46,"ion-label",12),c._uU(47,"\u0110\u1ec3 ch\u1ec9nh s\u1eeda"),c.qZA(),c.TgZ(48,"ion-input",17),c.NdJ("ngModelChange",function(n){return o.hoso.ggsheeteditlink=n}),c.qZA(),c.TgZ(49,"ion-button",18),c.NdJ("click",function(){return o.mogooglesheet(o.hoso.ggsheeteditlink)}),c._UZ(50,"ion-icon",19),c.qZA(),c.qZA(),c.TgZ(51,"ion-item"),c.TgZ(52,"ion-label",20),c._uU(53,"Publish to web"),c.qZA(),c.TgZ(54,"ion-input",17),c.NdJ("ngModelChange",function(n){return o.hoso.ggsheetlinkpublishtoweb=n}),c.qZA(),c.TgZ(55,"ion-button",18),c.NdJ("click",function(){return o.mogooglesheet(o.hoso.ggsheetlinkpublishtoweb)}),c._UZ(56,"ion-icon",21),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(57,"ion-row"),c.TgZ(58,"ion-col",22),c.TgZ(59,"ion-item-group"),c.TgZ(60,"ion-item-divider"),c.TgZ(61,"ion-label"),c._uU(62,"C\xe0i \u0111\u1eb7t cloze"),c.qZA(),c.qZA(),c.TgZ(63,"ion-item"),c.TgZ(64,"ion-label"),c._uU(65,"1 cloze cho 1 note (All-in-one Cloze)"),c.qZA(),c.TgZ(66,"ion-toggle",13),c.NdJ("ngModelChange",function(n){return o.hoso.clozeAllInOne=n}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(67,"ion-row"),c.TgZ(68,"ion-col",22),c.TgZ(69,"ion-item-group"),c.TgZ(70,"ion-item-divider"),c.TgZ(71,"ion-label"),c._uU(72,"C\xe0i \u0111\u1eb7t c\u1ed9t"),c.qZA(),c.qZA(),c.TgZ(73,"ion-grid",23),c.TgZ(74,"ion-row"),c.TgZ(75,"ion-col",24),c._uU(76,"STT"),c.qZA(),c.TgZ(77,"ion-col"),c._uU(78,"T\xean"),c.qZA(),c.TgZ(79,"ion-col"),c._uU(80,"Copy xu\u1ed1ng"),c.qZA(),c.TgZ(81,"ion-col"),c._uU(82,"Thay th\u1ebf"),c.qZA(),c.qZA(),c.YNc(83,b,9,4,"ion-row",25),c.qZA(),c.YNc(84,A,1,0,"ion-spinner",8),c.TgZ(85,"ion-text",26),c.YNc(86,_,2,1,"span",25),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(87,"ion-row"),c.TgZ(88,"ion-col",22),c.TgZ(89,"ion-item-group"),c.TgZ(90,"ion-item-divider"),c.TgZ(91,"ion-label"),c._uU(92,"C\xe0i \u0111\u1eb7t Thay th\u1ebf, HTML, CSS"),c.qZA(),c.qZA(),c.TgZ(93,"ion-button",27),c.NdJ("click",function(){return o.openEditor()}),c._UZ(94,"ion-icon",28),c._uU(95," M\u1edf tr\xecnh ch\u1ec9nh s\u1eeda style "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&n&&(c.xp6(3),c.Q6J("text","Tr\u1edf v\u1ec1"),c.xp6(2),c.Oqu(null==o.hoso?null:o.hoso.name),c.xp6(6),c.Q6J("disabled",o.loadinggetcolumns),c.xp6(3),c.Q6J("ngIf",o.loadinggetcolumns),c.xp6(1),c.Q6J("ngIf",!o.loadinggetcolumns),c.xp6(12),c.Q6J("ngModel",o.hoso.name),c.xp6(4),c.Q6J("ngModel",o.hoso.description),c.xp6(8),c.Q6J("ngForOf",o.tagsList),c.xp6(9),c.Q6J("ngModel",o.hoso.ggsheeteditlink),c.xp6(6),c.Q6J("ngModel",o.hoso.ggsheetlinkpublishtoweb),c.xp6(12),c.Q6J("ngModel",o.hoso.clozeAllInOne),c.xp6(17),c.Q6J("ngForOf",o.hoso.columns),c.xp6(1),c.Q6J("ngIf",o.loadinggetcolumns),c.xp6(2),c.Q6J("ngForOf",o.hoso.columns))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.YG,s.gu,t.O5,s.W2,s.jY,s.Nd,s.wI,s.Ub,s.rH,s.Q$,s.Ie,s.pK,s.j9,e.JJ,e.On,s.g2,t.sg,s.ho,s.w,s.yW,s.PQ,s.hM,t.mk,s.nz],styles:[".link[_ngcontent-%COMP%]{color:#343452;font-size:x-small}ion-item-divider[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-item-divider[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff}.button-clear[_ngcontent-%COMP%]{--background:#0000002b}.tablecolumns[_ngcontent-%COMP%]{font-size:smaller}ion-label[_ngcontent-%COMP%]{font-size:medium;text-transform:uppercase}ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;right:0;top:15px;z-index:2}ion-grid.table[_ngcontent-%COMP%]{--ion-grid-column-padding:4px;border-collapse:collapse;border-style:hidden}ion-grid.table[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{background-color:#fff8d4;font-weight:700}ion-grid.table[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border:1px solid #000;border-bottom:0;border-right:0}ion-grid.table[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child{border-right:1px solid #000}ion-grid.table[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{border-bottom:1px solid #000}ion-grid.table[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background-color:#f9f2ff}.selected[_ngcontent-%COMP%]{--color:red}ion-chip[_ngcontent-%COMP%]{padding:3px 6px;font-size:10px;height:20px;margin:5px 3px}ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:10px;margin:0}ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{line-height:14px}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[g.Bz.forChild(C)],g.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[t.ez,e.u5,s.Pc,M]]}),n})()}}]);