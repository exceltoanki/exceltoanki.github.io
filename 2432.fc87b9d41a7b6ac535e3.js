(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[2432],{2432:(n,o,i)=>{"use strict";i.r(o),i.d(o,{HoSoChiTietPageModule:()=>f});var e=i(8583),t=i(665),l=i(7823),g=i(649),c=i(4762),s=i(639),r=i(8194),a=i(3815);function u(n,o){if(1&n){const n=s.EpF();s.TgZ(0,"ion-checkbox",12),s.NdJ("ngModelChange",function(o){return s.CHM(n),s.oxw().$implicit.copyxuong=o}),s.qZA()}if(2&n){const n=s.oxw().$implicit;s.Q6J("ngModel",n.copyxuong)}}function Z(n,o){if(1&n){const n=s.EpF();s.TgZ(0,"ion-checkbox",12),s.NdJ("ngModelChange",function(o){return s.CHM(n),s.oxw().$implicit.replace=o}),s.qZA()}if(2&n){const n=s.oxw().$implicit;s.Q6J("ngModel",n.replace)}}function d(n,o){if(1&n&&(s.TgZ(0,"ion-row"),s.TgZ(1,"ion-col",22),s._uU(2),s.qZA(),s.TgZ(3,"ion-col",28),s._uU(4),s.qZA(),s.TgZ(5,"ion-col",22),s.YNc(6,u,1,1,"ion-checkbox",29),s.qZA(),s.TgZ(7,"ion-col",22),s.YNc(8,Z,1,1,"ion-checkbox",29),s.qZA(),s.qZA()),2&n){const n=o.$implicit,i=o.index;s.xp6(2),s.Oqu(i+1),s.xp6(2),s.hij(" ",n.name," "),s.xp6(2),s.Q6J("ngIf",i>1),s.xp6(2),s.Q6J("ngIf",i>1)}}function h(n,o){1&n&&s._UZ(0,"ion-spinner",30)}function p(n,o){1&n&&(s.TgZ(0,"span"),s._uU(1,"kh\xf4ng c\xf3 \u1edf m\u1eb7t "),s.TgZ(2,"b"),s._uU(3,"tr\u01b0\u1edbc"),s.qZA(),s.qZA())}function m(n,o){1&n&&(s.TgZ(0,"span"),s._uU(1," kh\xf4ng c\xf3 \u1edf m\u1eb7t "),s.TgZ(2,"b"),s._uU(3,"sau"),s.qZA(),s.qZA())}function T(n,o){if(1&n&&(s.TgZ(0,"span"),s.TgZ(1,"b"),s._uU(2),s.qZA(),s.YNc(3,p,4,0,"span",31),s.YNc(4,m,4,0,"span",31),s._UZ(5,"br"),s.qZA()),2&n){const n=s.oxw().$implicit;s.xp6(2),s.hij("",n.name," "),s.xp6(1),s.Q6J("ngIf",!n.isinfront),s.xp6(1),s.Q6J("ngIf",!n.isinback)}}function b(n,o){if(1&n&&(s.TgZ(0,"span"),s.YNc(1,T,6,3,"span",31),s.qZA()),2&n){const n=o.$implicit;s.xp6(1),s.Q6J("ngIf",!n.isinfront||!n.isinback)}}const A=[{path:"",component:(()=>{class n{constructor(n,o,i){this.router=n,this.hososervice=o,this.getexcelservice=i,this.loadinggetcolumns$=this.getexcelservice.loadinggetcolumns$.subscribe(n=>{this.loadinggetcolumns=n,n||this.saveChinhSua()})}mogooglesheet(n){window.open(n,"_blank")}saveChinhSua(){this.hososervice.updateHoSo(this.hoso)}updateColumnsWithExcel(){return(0,c.mG)(this,void 0,void 0,function*(){yield this.getexcelservice.getExcelColumns(this.hoso)})}openEditor(){this.router.navigate(["/ho-so-editor"],{state:{hoso:this.hoso},skipLocationChange:!0})}ngOnInit(){this.router.getCurrentNavigation().extras.state?this.hoso=this.router.getCurrentNavigation().extras.state.hoso:this.router.navigate(["/t/ho-so"]),this.updateColumnsWithExcel()}ionViewWillLeave(){this.hoso.id&&(this.saveChinhSua(),this.loadinggetcolumns$.unsubscribe())}ionViewDidEnter(){let n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode("\n      *::-webkit-scrollbar {\n        width: 8px;\n    }\n    *::-webkit-scrollbar-track {\n        background-color: #e4e4e4;\n        border-radius: 100px;\n    }\n    *::-webkit-scrollbar-thumb {\n        background-color: #3880ff;\n        border-radius: 100px;\n    }\n    ")),document.getElementsByTagName("ion-textarea")[0].appendChild(n),document.getElementsByTagName("ion-row")[0].appendChild(n)}}return n.\u0275fac=function(o){return new(o||n)(s.Y36(g.F0),s.Y36(r.y),s.Y36(a.v))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-ho-so-chi-tiet"]],decls:88,vars:10,consts:[["color","primary"],["slot","start"],[3,"text"],["slot","primary","color","secondary"],["shape","round",3,"click"],[1,"hide960"],["slot","end","name","color-palette-outline"],["shape","round",1,"taohoso",3,"click"],["slot","end","name","save"],[1,"ion-padding"],["size-md","6","size-xs","12"],["position","floating"],[3,"ngModel","ngModelChange"],["rows","3",3,"ngModel","ngModelChange"],["description",""],[1,"link",3,"ngModel","ngModelChange"],["color","primary",3,"click"],["slot","icon-only","name","open-outline"],["position","floating","color","danger"],["slot","icon-only","name","eye-outline"],["size-xs","12"],[1,"ion-margin","table"],[1,"ion-text-center"],[4,"ngFor","ngForOf"],["name","lines-small",4,"ngIf"],[1,"tablecolumns"],["color","success",3,"click"],["slot","start","name","repeat-outline"],[1,"bold"],[3,"ngModel","ngModelChange",4,"ngIf"],["name","lines-small"],[4,"ngIf"]],template:function(n,o){1&n&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar",0),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-back-button",2),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5),s.qZA(),s.TgZ(6,"ion-buttons",3),s.TgZ(7,"ion-button",4),s.NdJ("click",function(){return o.openEditor()}),s.TgZ(8,"span",5),s._uU(9,"S\u1eeda style"),s.qZA(),s._UZ(10,"ion-icon",6),s.qZA(),s.TgZ(11,"ion-button",7),s.NdJ("click",function(){return o.saveChinhSua()}),s.TgZ(12,"span",5),s._uU(13,"L\u01b0u"),s.qZA(),s._UZ(14,"ion-icon",8),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"ion-content",9),s.TgZ(16,"ion-grid"),s.TgZ(17,"ion-row"),s.TgZ(18,"ion-col",10),s.TgZ(19,"ion-item-group"),s.TgZ(20,"ion-item-divider"),s.TgZ(21,"ion-label"),s._uU(22,"Th\xf4ng tin m\xf4 t\u1ea3"),s.qZA(),s.qZA(),s.TgZ(23,"ion-item"),s.TgZ(24,"ion-label",11),s._uU(25,"T\xean h\u1ed3 s\u01a1"),s.qZA(),s.TgZ(26,"ion-input",12),s.NdJ("ngModelChange",function(n){return o.hoso.name=n}),s.qZA(),s.qZA(),s.TgZ(27,"ion-item"),s.TgZ(28,"ion-label",11),s._uU(29,"M\xf4 t\u1ea3"),s.qZA(),s.TgZ(30,"ion-textarea",13,14),s.NdJ("ngModelChange",function(n){return o.hoso.description=n}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(32,"ion-col",10),s.TgZ(33,"ion-item-group"),s.TgZ(34,"ion-item-divider"),s.TgZ(35,"ion-label"),s._uU(36,"\u0110\u01b0\u1eddng d\u1eabn google sheet"),s.qZA(),s.qZA(),s.TgZ(37,"ion-item"),s.TgZ(38,"ion-label",11),s._uU(39,"\u0110\u1ec3 ch\u1ec9nh s\u1eeda"),s.qZA(),s.TgZ(40,"ion-input",15),s.NdJ("ngModelChange",function(n){return o.hoso.ggsheeteditlink=n}),s.qZA(),s.TgZ(41,"ion-button",16),s.NdJ("click",function(){return o.mogooglesheet(o.hoso.ggsheeteditlink)}),s._UZ(42,"ion-icon",17),s.qZA(),s.qZA(),s.TgZ(43,"ion-item"),s.TgZ(44,"ion-label",18),s._uU(45,"Publish to web"),s.qZA(),s.TgZ(46,"ion-input",15),s.NdJ("ngModelChange",function(n){return o.hoso.ggsheetlinkpublishtoweb=n}),s.qZA(),s.TgZ(47,"ion-button",16),s.NdJ("click",function(){return o.mogooglesheet(o.hoso.ggsheetlinkpublishtoweb)}),s._UZ(48,"ion-icon",19),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(49,"ion-row"),s.TgZ(50,"ion-col",20),s.TgZ(51,"ion-item-group"),s.TgZ(52,"ion-item-divider"),s.TgZ(53,"ion-label"),s._uU(54,"C\xe0i \u0111\u1eb7t cloze"),s.qZA(),s.qZA(),s.TgZ(55,"ion-item"),s.TgZ(56,"ion-label"),s._uU(57,"1 cloze cho 1 note (All-in-one Cloze)"),s.qZA(),s.TgZ(58,"ion-toggle",12),s.NdJ("ngModelChange",function(n){return o.hoso.clozeAllInOne=n}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(59,"ion-row"),s.TgZ(60,"ion-col",20),s.TgZ(61,"ion-item-group"),s.TgZ(62,"ion-item-divider"),s.TgZ(63,"ion-label"),s._uU(64,"C\xe0i \u0111\u1eb7t c\u1ed9t"),s.qZA(),s.qZA(),s.TgZ(65,"ion-grid",21),s.TgZ(66,"ion-row"),s.TgZ(67,"ion-col",22),s._uU(68,"STT"),s.qZA(),s.TgZ(69,"ion-col"),s._uU(70,"T\xean"),s.qZA(),s.TgZ(71,"ion-col"),s._uU(72,"Copy xu\u1ed1ng"),s.qZA(),s.TgZ(73,"ion-col"),s._uU(74,"Thay th\u1ebf"),s.qZA(),s.qZA(),s.YNc(75,d,9,4,"ion-row",23),s.qZA(),s.YNc(76,h,1,0,"ion-spinner",24),s.TgZ(77,"ion-text",25),s.YNc(78,b,2,1,"span",23),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(79,"ion-row"),s.TgZ(80,"ion-col",20),s.TgZ(81,"ion-item-group"),s.TgZ(82,"ion-item-divider"),s.TgZ(83,"ion-label"),s._uU(84,"C\xe0i \u0111\u1eb7t Thay th\u1ebf, HTML, CSS"),s.qZA(),s.qZA(),s.TgZ(85,"ion-button",26),s.NdJ("click",function(){return o.openEditor()}),s._UZ(86,"ion-icon",27),s._uU(87," M\u1edf tr\xecnh ch\u1ec9nh s\u1eeda style "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&n&&(s.xp6(3),s.Q6J("text","Tr\u1edf v\u1ec1"),s.xp6(2),s.Oqu(null==o.hoso?null:o.hoso.name),s.xp6(21),s.Q6J("ngModel",o.hoso.name),s.xp6(4),s.Q6J("ngModel",o.hoso.description),s.xp6(10),s.Q6J("ngModel",o.hoso.ggsheeteditlink),s.xp6(6),s.Q6J("ngModel",o.hoso.ggsheetlinkpublishtoweb),s.xp6(12),s.Q6J("ngModel",o.hoso.clozeAllInOne),s.xp6(17),s.Q6J("ngForOf",o.hoso.columns),s.xp6(1),s.Q6J("ngIf",o.loadinggetcolumns),s.xp6(2),s.Q6J("ngForOf",o.hoso.columns))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.YG,l.gu,l.W2,l.jY,l.Nd,l.wI,l.Ub,l.rH,l.Q$,l.Ie,l.pK,l.j9,t.JJ,t.On,l.g2,l.ho,l.w,e.sg,e.O5,l.yW,l.nz,l.PQ],styles:[".link[_ngcontent-%COMP%]{color:#343452;font-size:x-small}ion-item-divider[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}ion-item-divider[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff}.button-clear[_ngcontent-%COMP%]{--background:#0000002b}.tablecolumns[_ngcontent-%COMP%]{font-size:smaller}ion-label[_ngcontent-%COMP%]{font-size:medium;text-transform:uppercase}ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;right:0;top:15px;z-index:2}ion-grid.table[_ngcontent-%COMP%]{--ion-grid-column-padding:4px;border-collapse:collapse;border-style:hidden}ion-grid.table[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{background-color:#fff8d4;font-weight:700}ion-grid.table[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border:1px solid #000;border-bottom:0;border-right:0}ion-grid.table[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child{border-right:1px solid #000}ion-grid.table[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{border-bottom:1px solid #000}ion-grid.table[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{background-color:#f9f2ff}"]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[g.Bz.forChild(A)],g.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[e.ez,t.u5,l.Pc,q]]}),n})()}}]);