!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function e(n,e,o){return e&&t(n.prototype,e),o&&t(n,o),n}(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[3938],{63938:function(t,o,i){"use strict";i.r(o),i.d(o,{HoSoPageModule:function(){return z}});var r=i(38583),a=i(90665),s=i(92859),c=i(76277),l=i(64762),u=i(3633),g=i(33018),h=i(8194),d=i(93815),f=i(3538),m=i(96809),p=i(38120),v=i(83305),Z=i(44010);function T(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"div",12),g.TgZ(1,"ion-item"),g.TgZ(2,"ion-label",13),g._uU(3,"T\xean tags:"),g.qZA(),g.TgZ(4,"ion-input",14),g.NdJ("ngModelChange",function(n){return g.CHM(e),g.oxw().tagsinput=n}),g.qZA(),g.qZA(),g.TgZ(5,"ion-button",15),g.NdJ("click",function(){return g.CHM(e),g.oxw().addTags()}),g._uU(6," Th\xeam "),g._UZ(7,"ion-icon",16),g.qZA(),g.TgZ(8,"ion-button",15),g.NdJ("click",function(){return g.CHM(e),g.oxw().dangTaoTags=!1}),g._uU(9," \u0110\xf3ng "),g._UZ(10,"ion-icon",17),g.qZA(),g.qZA()}if(2&n){var o=g.oxw();g.xp6(4),g.Q6J("ngModel",o.tagsinput)}}function k(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-chip",18),g.NdJ("click",function(n){var t=g.CHM(e).$implicit;return g.oxw().filterTagClick(t,n.target)}),g.TgZ(1,"ion-icon",19),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw().renameTagCheck(n)}),g.qZA(),g.TgZ(2,"ion-label"),g._uU(3),g.qZA(),g.TgZ(4,"ion-icon",20),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw().deleteTag(n)}),g.qZA(),g.qZA()}if(2&n){var o=t.$implicit;g.xp6(3),g.Oqu(o)}}function x(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-chip",22),g.NdJ("click",function(n){var t=g.CHM(e).$implicit;return g.oxw(2).filterTagClick(t,n.target)}),g._uU(1),g._UZ(2,"ion-icon",16),g.TgZ(3,"ion-icon",20),g.NdJ("click",function(n){var t=g.CHM(e).$implicit;return g.oxw(2).deleteTagsCombine(t,n.target)}),g.qZA(),g.qZA()}if(2&n){var o=t.$implicit;g.xp6(1),g.hij(" ",o," ")}}function w(n,t){if(1&n&&(g.TgZ(0,"div",12),g.YNc(1,x,4,1,"ion-chip",21),g.qZA()),2&n){var e=g.oxw();g.xp6(1),g.Q6J("ngForOf",e.filterBigList)}}var b=function(){var t=function(){function t(e,o,i){n(this,t),this.menuTagsService=e,this.alertController=o,this.toastController=i,this.dangTaoTags=!1,this.tagsinput="",this.tagsList=[],this.filterByTag=new g.vpe}return e(t,[{key:"ngOnInit",value:function(){this.tagsList=this.menuTagsService.tagsList,this.filterBigList=this.menuTagsService.filterBigList}},{key:"addTags",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=""!=this.tagsinput,!n.t0){n.next=5;break}return n.next=4,this.menuTagsService.addTags(this.tagsinput);case 4:this.tagsinput="";case 5:case"end":return n.stop()}},n,this)}))}},{key:"deleteTag",value:function(n){this.presentAlert("B\u1ea1n th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a tag <b>".concat(n,"</b>?\n    <br>- <b>Gi\u1eef trong h\u1ed3 s\u01a1</b>: khi th\xeam l\u1ea1i <b>").concat(n,"</b>, h\u1ed3 s\u01a1 s\u1ebd t\u1ef1 c\xf3 tag <b>").concat(n,"</b>.\n    <br>- <b>X\xf3a trong c\xe1c h\u1ed3 s\u01a1</b>: t\u1ea5t c\u1ea3 <b>").concat(n,"</b> s\u1ebd b\u1ecb x\xf3a kh\u1ecfi h\u1ec7 th\u1ed1ng. (H\u1ed3 s\u01a1 kh\xf4ng m\u1ea5t, ch\u1ec9 m\u1ea5t tag)"),n)}},{key:"deleteGiuHoSo",value:function(n){this.menuTagsService.deleteGiuHoSo(n)}},{key:"deleteXoaTagHoSo",value:function(n){this.menuTagsService.deleteXoaTagHoSo(n)}},{key:"deleteTagsCombine",value:function(n,t){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"X\xf3a tags:",message:"X\xf3a <b>".concat(n,"</b>?"),buttons:[{text:"H\u1ee7y",role:"cancel"},{text:"X\xf3a",handler:function(){if("ion-icon"==t.localName){var e=i.filterBigList.indexOf(n);i.filterBigList.splice(e,1),i.menuTagsService.deleteCombineTags(i.filterBigList)}}}]});case 2:return o=e.sent,e.next=5,o.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"helper",value:function(n){this.toastController.helper(Z.f[n])}},{key:"filterTagClick",value:function(n,t){"ion-icon"!=t.localName&&this.filterByTag.emit(n)}},{key:"renameTagCheck",value:function(n){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,this.alertController.create({header:"\u0110\u1ed5i t\xean tag!",inputs:[{name:"newname",type:"text",placeholder:"T\xean m\u1edbi"}],buttons:[{text:"H\u1ee7y",role:"cancel"},{text:"Ok",handler:function(t){e.renameTag(n,t.newname)}}]});case 3:t.sent.present();case 4:case"end":return t.stop()}},t,this)}))}},{key:"renameTag",value:function(n,t){this.tagsList.delete(n),this.tagsList.add(t),this.filterBigList=this.filterBigList.map(function(e,o){console.log(e);var i="";return e.split(",").forEach(function(e,o){e==n?(console.log(e),i=i+(""==i?"":",")+t):i=i+(""==i?"":",")+e}),i}),this.menuTagsService.updateTagsList(),this.menuTagsService.deleteCombineTags(this.filterBigList)}},{key:"presentAlert",value:function(n,t){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"X\xf3a tag",message:n,buttons:[{text:"H\u1ee7y",role:"cancel"},{text:"X\xf3a nh\u01b0ng gi\u1eef trong h\u1ed3 s\u01a1",handler:function(){i.deleteGiuHoSo(t)}},{text:"X\xf3a trong h\u1ed3 s\u01a1",cssClass:"danger",handler:function(){i.deleteXoaTagHoSo(t)}}]});case 2:return o=e.sent,e.next=5,o.present();case 5:case"end":return e.stop()}},e,this)}))}}]),t}();return t.\u0275fac=function(n){return new(n||t)(g.Y36(m.J),g.Y36(s.Br),g.Y36(f.k))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-menu-tags"]],outputs:{filterByTag:"filterByTag"},decls:21,vars:3,consts:[["side","start","menuId","menuFilter","contentId","main"],["color","primary"],["slot","primary","color","secondary"],["shape","round",3,"click"],[1,"hide960"],["slot","end","name","add"],["name","help-circle-outline","slot","end",1,"icon-helper",3,"click"],[1,"ion-padding"],["class","taotags",4,"ngIf"],[1,"menutags"],[3,"click",4,"ngFor","ngForOf"],["id","main"],[1,"taotags"],["position","floating"],["clearInput","true",3,"ngModel","ngModelChange"],["size","small","shape","round",3,"click"],["slot","start","name","add"],["slot","start","name","close-circle-outline"],[3,"click"],["name","pricetag-outline","color","primary",3,"click"],["name","close",3,"click"],["size","small","color","success","shape","round",3,"click",4,"ngFor","ngForOf"],["size","small","color","success","shape","round",3,"click"]],template:function(n,t){1&n&&(g.TgZ(0,"ion-menu",0),g.TgZ(1,"ion-header"),g.TgZ(2,"ion-toolbar",1),g.TgZ(3,"ion-title"),g._uU(4,"Tags "),g.qZA(),g.TgZ(5,"ion-buttons",2),g.TgZ(6,"ion-button",3),g.NdJ("click",function(){return t.dangTaoTags=!0}),g.TgZ(7,"span",4),g._uU(8,"T\u1ea1o tags"),g.qZA(),g._UZ(9,"ion-icon",5),g.qZA(),g.qZA(),g.TgZ(10,"ion-icon",6),g.NdJ("click",function(){return t.helper("tags")}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(11,"ion-content",7),g.YNc(12,T,11,1,"div",8),g.TgZ(13,"div",9),g.YNc(14,k,5,1,"ion-chip",10),g.qZA(),g.YNc(15,w,2,1,"div",8),g.qZA(),g.TgZ(16,"ion-footer"),g.TgZ(17,"ion-toolbar"),g.TgZ(18,"ion-title"),g._uU(19,"Excel to anki by drquochoai"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(20,"ion-router-outlet",11)),2&n&&(g.xp6(12),g.Q6J("ngIf",t.dangTaoTags),g.xp6(2),g.Q6J("ngForOf",t.tagsList),g.xp6(1),g.Q6J("ngIf",t.filterBigList.length>0))},directives:[s.z0,s.Gu,s.sr,s.wd,s.Sm,s.YG,s.gu,s.W2,r.O5,r.sg,s.fr,s.jP,s.Ie,s.Q$,s.pK,s.j9,a.JJ,a.On,s.hM],styles:[".taotags[_ngcontent-%COMP%]{margin-bottom:1rem}.menutags[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{padding:3px 6px;font-size:10px;height:20px;margin:5px 3px}.menutags[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:10px;margin:0}.menutags[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{line-height:14px}"]}),t}();function C(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-badge",17),g._uU(1),g.TgZ(2,"ion-icon",18),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw(2).removeThisTag(n)}),g.qZA(),g.qZA()}if(2&n){var o=t.$implicit;g.xp6(1),g.hij(" ",o," ")}}function A(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-icon",18),g.NdJ("click",function(){return g.CHM(e),g.oxw(2).removeAllTags()}),g.qZA()}}function _(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-icon",19),g.NdJ("click",function(){return g.CHM(e),g.oxw(2).saveFilterList()}),g.qZA()}}function y(n,t){if(1&n&&(g.TgZ(0,"div",11),g.YNc(1,C,3,1,"ion-badge",12),g.TgZ(2,"ion-badge",13),g.YNc(3,A,1,0,"ion-icon",14),g.qZA(),g.TgZ(4,"ion-badge",15),g.YNc(5,_,1,0,"ion-icon",16),g.qZA(),g.qZA()),2&n){var e=g.oxw();g.xp6(1),g.Q6J("ngForOf",e.filterList),g.xp6(2),g.Q6J("ngIf",e.filterList.length>1),g.xp6(2),g.Q6J("ngIf",e.filterList.length>1)}}function S(n,t){1&n&&(g.TgZ(0,"h1",36),g.TgZ(1,"strong",37),g._uU(2,"T\u1eea CHIA S\u1eba"),g.qZA(),g.qZA())}function M(n,t){1&n&&g._UZ(0,"ion-icon",38)}function O(n,t){if(1&n&&(g.TgZ(0,"div",39),g.TgZ(1,"ion-badge",0),g._uU(2),g.qZA(),g.TgZ(3,"ion-badge",13),g._uU(4),g.qZA(),g.qZA()),2&n){var e=g.oxw().$implicit;g.xp6(2),g.hij("",null==e.stats?null:e.stats.sheets,"s"),g.xp6(2),g.hij("",null==e.stats?null:e.stats.notes,"n")}}function q(n,t){1&n&&g._UZ(0,"ion-spinner",40)}function P(n,t){1&n&&g._UZ(0,"ion-icon",41)}function H(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-button",30),g.NdJ("click",function(){g.CHM(e);var n=g.oxw().$implicit;return g.oxw().shareUpdateDownloadHoSo(n)}),g._UZ(1,"ion-icon",42),g.TgZ(2,"span",6),g._uU(3," Update "),g.qZA(),g.qZA()}}function J(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-button",43),g.NdJ("click",function(){g.CHM(e);var n=g.oxw().$implicit;return g.oxw().mogooglesheet(n)}),g._UZ(1,"ion-icon",44),g.TgZ(2,"span"),g._uU(3," Gg Sheet "),g.qZA(),g.qZA()}}function N(n,t){if(1&n){var e=g.EpF();g.TgZ(0,"ion-col",20),g.TgZ(1,"section"),g.TgZ(2,"ion-card",21),g.NdJ("click",function(n){var t=g.CHM(e).$implicit;return g.oxw().goToHoSoDetail(n.target,t)}),g.YNc(3,S,3,0,"h1",22),g.YNc(4,M,1,0,"ion-icon",23),g.TgZ(5,"ion-card-header",24),g.TgZ(6,"ion-card-title"),g._uU(7),g.qZA(),g.TgZ(8,"ion-card-subtitle"),g._uU(9),g.qZA(),g.YNc(10,O,5,2,"div",25),g.qZA(),g.TgZ(11,"section",26),g.TgZ(12,"ion-button",27),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw().chayTaoAnki(n)}),g.YNc(13,q,1,0,"ion-spinner",28),g.YNc(14,P,1,0,"ion-icon",29),g._uU(15," T\u1ea1o anki "),g.qZA(),g.TgZ(16,"ion-button",30),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw().copyHoso(n)}),g._UZ(17,"ion-icon",31),g.TgZ(18,"span"),g._uU(19," Sao ch\xe9p "),g.qZA(),g.qZA(),g.YNc(20,H,4,0,"ion-button",32),g.YNc(21,J,4,0,"ion-button",33),g.TgZ(22,"ion-button",34),g.NdJ("click",function(){var n=g.CHM(e).$implicit;return g.oxw().xoaHoSo(n)}),g._UZ(23,"ion-icon",35),g.TgZ(24,"span",6),g._uU(25,"X\xf3a"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&n){var o=t.$implicit;g.xp6(3),g.Q6J("ngIf",null==o.shared?null:o.shared.fromShared),g.xp6(1),g.Q6J("ngIf",null==o.shared?null:o.shared.lastUpdated),g.xp6(3),g.Oqu(o.name),g.xp6(2),g.hij("",o.description," "),g.xp6(1),g.Q6J("ngIf",o.stats&&(null==o.stats?null:o.stats.sheets)>0),g.xp6(2),g.Q6J("disabled",o.creatingAnki),g.xp6(1),g.Q6J("ngIf",o.creatingAnki),g.xp6(1),g.Q6J("ngIf",!o.creatingAnki),g.xp6(6),g.Q6J("ngIf",null==o.shared?null:o.shared.fromShared),g.xp6(1),g.Q6J("ngIf",o.ggsheeteditlink)}}var U,I,L=[{path:"",component:(U=function(){function t(e,o,i,r,s,c,l,u,g){n(this,t),this.hosoService=e,this.router=o,this.getexcelService=i,this.toastController=r,this.alertController=s,this.menu=c,this.menuTagsService=l,this.gistService=u,this.fblinks=g,this.danhsachhoso=[],this.filterList=[],this.searchControl=new a.NI}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.danhsachhoso=this.hosoService.danhsachhoso,this.searchControl.valueChanges.subscribe(function(t){n.setFilteredDSHoSo(t)})}},{key:"ionViewDidEnter",value:function(){this.shareCheckImport(),this.shareServerCheckImport()}},{key:"shareCheckImport",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.urlParams||!window.urlParams.hasOwnProperty(u.A.share.import)){n.next=5;break}return n.next=3,this.gistService.shareImport(window.urlParams[u.A.share.import]);case 3:(t=n.sent).status&&(t.hoso.shared.idEnc=window.urlParams[u.A.share.import],this.copyHoso(t.hoso,"",u.A.share.newhosofromgist),window.urlParams=void 0);case 5:case"end":return n.stop()}},n,this)}))}},{key:"shareServerCheckImport",value:function(){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.urlParams||!window.urlParams.hasOwnProperty(u.A.shareServer.import)){n.next=5;break}return n.next=3,this.gistService.serverShareImport(window.urlParams[u.A.shareServer.import]);case 3:(t=n.sent).status&&(t.hosos.map(function(n,t){n.shared.idEnc=window.urlParams[u.A.shareServer.import],n.shared.bundelUrl=e.fblinks.getLinkFromId(n.shared.idEnc),e.copyHoso(n,"",u.A.share.newhosofromgist)}),window.urlParams=void 0);case 5:case"end":return n.stop()}},n,this)}))}},{key:"shareUpdateDownloadHoSo",value:function(n){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.gistService.shareImport(n.shared.idEnc,n);case 2:(e=t.sent).status&&this.hosoService.addNewHoSo(e.hoso);case 4:case"end":return t.stop()}},t,this)}))}},{key:"ionViewDidLoad",value:function(){}},{key:"goToHoSoDetail",value:function(n,t){(n.localName.startsWith("ion-card")||"section"==n.localName)&&this.router.navigate(["/ho-so-chi-tiet"],{state:{hoso:t},skipLocationChange:!0})}},{key:"chayTaoAnki",value:function(n){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.creatingAnki=!0,t.next=3,this.getexcelService.getGoogleSheet(n);case 3:if(t.t0=t.sent,t.t1="createok"==t.t0,!t.t1){t.next=7;break}this.hosoService.updateHoSo(n,u.A.hoso.saveStatsAfterRunAnki);case 7:case"end":return t.stop()}},t,this)}))}},{key:"copyHoso",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Copy of ",e=arguments.length>2?arguments[2]:void 0;return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function o(){var i,r;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=Object.assign({},n),e&&e==u.A.share.newhosofromgist||(i.name=t+i.name,i.createdAt=null,i.stats={notes:0,sheets:0},i.shared=void 0),i.id=null,o.next=4,this.hosoService.addNewHoSo(i,e);case 4:r=o.sent,this.toastController.presentToast(r?{message:"\u0110\xe3 sao ch\xe9p h\u1ed3 s\u01a1 th\xe0nh c\xf4ng.",color:"success"}:{message:"\u0110\xe3 c\xf3 h\u1ed3 s\u01a1 copy c\u1ee7a h\u1ed3 s\u01a1 ".concat(i.name," r\u1ed3i."),color:"danger"});case 6:case"end":return o.stop()}},o,this)}))}},{key:"mogooglesheet",value:function(n){window.open(n.ggsheeteditlink,"_blank")}},{key:"xoaHoSo",value:function(n){return(0,l.mG)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"X\xf3a h\u1ed3 s\u01a1",cssClass:"xoahoso",message:"B\u1ea1n th\u1eadt s\u1ef1 mu\u1ed1n x\xf3a h\u1ed3 s\u01a1 n\xe0y? <br/>\n      M\u1ed9t khi \u0111\xe3 x\xf3a s\u1ebd kh\xf4ng th\u1ec3 kh\xf4i ph\u1ee5c l\u1ea1i.",buttons:[{text:"H\u1ee7y",role:"cancel"},{text:"X\xf3a",role:"delete",cssClass:"ion-color ion-color-danger"}]});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.next=7,e.onDidDismiss();case 7:"delete"==t.sent.role&&(this.hosoService.deleteHoSo(n.id),this.toastController.presentToast({message:"X\xf3a h\u1ed3 s\u01a1 th\xe0nh c\xf4ng",color:"success"}));case 10:case"end":return t.stop()}},t,this)}))}},{key:"taohosomacdinh",value:function(){this.copyHoso(this.hosoService.hosomacdinh,"")}},{key:"setFilteredDSHoSo",value:function(n){this.danhsachhoso=this.hosoService.filterHoSo(n)}},{key:"filterByTag",value:function(n){var t=this;n.split(",").forEach(function(n){t.filterList.includes(n)||(t.filterList.push(n),t.danhsachhoso=t.hosoService.filterHoSoByTag(t.filterList))}),this.menu.close("menuFilter")}},{key:"removeThisTag",value:function(n){var t=this.filterList.indexOf(n);t>-1&&(this.filterList.splice(t,1),this.danhsachhoso=this.hosoService.filterHoSoByTag(this.filterList))}},{key:"removeAllTags",value:function(){this.filterList=[],this.danhsachhoso=this.hosoService.filterHoSo("")}},{key:"saveFilterList",value:function(){this.menuTagsService.filterSaveToStorage(this.filterList)}}]),t}(),U.\u0275fac=function(n){return new(n||U)(g.Y36(h.y),g.Y36(c.F0),g.Y36(d.v),g.Y36(f.k),g.Y36(s.Br),g.Y36(s._q),g.Y36(m.J),g.Y36(p.H),g.Y36(v.V))},U.\u0275cmp=g.Xpm({type:U,selectors:[["app-ho-so"]],decls:18,vars:4,consts:[["color","primary"],["slot","start"],["autoHide","false"],["slot","primary","color","secondary"],["class","filterdiv",4,"ngIf"],["shape","round",1,"taohoso",3,"click"],[1,"hide960"],["slot","end","name","add"],[3,"filterByTag"],["placeholder","T\xecm ki\u1ebfm","end","","showCancelButton","focus",3,"debounce","formControl"],["size-md","6","size-xs","12","class","cardhoso",4,"ngFor","ngForOf"],[1,"filterdiv"],["color","tertiary",4,"ngFor","ngForOf"],["color","danger"],["name","close-circle-outline",3,"click",4,"ngIf"],["color","success"],["name","save-outline",3,"click",4,"ngIf"],["color","tertiary"],["name","close-circle-outline",3,"click"],["name","save-outline",3,"click"],["size-md","6","size-xs","12",1,"cardhoso"],["button","","mode","md",3,"click"],["class","ribbon",4,"ngIf"],["name","radio-outline","class","isSharing",4,"ngIf"],[1,"hosocard"],["class","sheetstats",4,"ngIf"],[1,"ion-padding-bottom","ion-padding-start","hosobuttons"],["size","small",3,"disabled","click"],["name","crescent",4,"ngIf"],["slot","start","name","caret-forward-circle-outline",4,"ngIf"],["size","small","color","primary",3,"click"],["slot","start","name","duplicate-outline"],["size","small","color","primary",3,"click",4,"ngIf"],["size","small","color","success",3,"click",4,"ngIf"],["size","small","color","danger",3,"click"],["name","trash-outline","slot","start"],[1,"ribbon"],[1,"ribbon-content"],["name","radio-outline",1,"isSharing"],[1,"sheetstats"],["name","crescent"],["slot","start","name","caret-forward-circle-outline"],["slot","start","name","cloud-download-outline"],["size","small","color","success",3,"click"],["slot","start","name","logo-google"]],template:function(n,t){1&n&&(g.TgZ(0,"ion-header"),g.TgZ(1,"ion-toolbar",0),g.TgZ(2,"ion-title"),g._uU(3,"H\u1ed3 s\u01a1"),g.qZA(),g.TgZ(4,"ion-buttons",1),g._UZ(5,"ion-menu-button",2),g.qZA(),g.TgZ(6,"ion-buttons",3),g.YNc(7,y,6,3,"div",4),g.TgZ(8,"ion-button",5),g.NdJ("click",function(){return t.taohosomacdinh()}),g.TgZ(9,"span",6),g._uU(10,"T\u1ea1o h\u1ed3 s\u01a1 m\u1eb7c \u0111\u1ecbnh"),g.qZA(),g._UZ(11,"ion-icon",7),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(12,"app-menu-tags",8),g.NdJ("filterByTag",function(n){return t.filterByTag(n)}),g.qZA(),g._UZ(13,"ion-searchbar",9),g.TgZ(14,"ion-content"),g.TgZ(15,"ion-grid"),g.TgZ(16,"ion-row"),g.YNc(17,N,26,10,"ion-col",10),g.qZA(),g.qZA(),g.qZA()),2&n&&(g.xp6(7),g.Q6J("ngIf",t.filterList.length>0),g.xp6(6),g.Q6J("debounce",250)("formControl",t.searchControl),g.xp6(4),g.Q6J("ngForOf",t.danhsachhoso))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.fG,r.O5,s.YG,s.gu,b,s.VI,s.j9,a.JJ,a.oH,s.W2,s.jY,s.Nd,r.sg,s.yp,s.wI,s.PM,s.Zi,s.gZ,s.tO,s.PQ],styles:[".hoai[_ngcontent-%COMP%]{color:#0e03a5}.hoai[_ngcontent-%COMP%]:focus, .hoai[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{color:red}.hoai[_ngcontent-%COMP%]:focus{--color:red}ion-col[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover   ion-card[_ngcontent-%COMP%]{background-color:rgba(231,236,255,.38)}ion-col[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover   .sheetstats[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{transform:scale(.9);transition:transform .8s linear;-o-transition:transform .8s linear;-ms-transition:transform .8s linear;-moz-transition:transform .8s linear;-webkit-transition:transform .8s linear}.sheetstats[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px}.sheetstats[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{transform:scale(.7);transition:transform .4s linear;-o-transition:transform .4s linear;-ms-transition:transform .4s linear;-moz-transition:transform .4s linear;-webkit-transition:transform .4s linear}@media (max-width: 960px){ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:x-small}ion-grid[_ngcontent-%COMP%]   .hide960[_ngcontent-%COMP%]{display:none}ion-grid[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{transform:scale(.5)}}@media (max-width: 400px){ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:8px}ion-grid[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.xoahoso[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{max-width:60%!important;width:90%}.spinner-container[_ngcontent-%COMP%]{width:100%;text-align:center;padding:10px}.menu-enabled[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{display:none}.filterdiv[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-top:1px;cursor:pointer}.ribbon[_ngcontent-%COMP%]{font-size:12px!important;width:100%;background:var(--ion-color-success);color:#fff;text-align:center;padding:1em 2em;margin:2em auto 3em;position:absolute;z-index:1;top:-4%;right:-44%;transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);overflow:hidden}.hosobuttons[_ngcontent-%COMP%], .hosocard[_ngcontent-%COMP%]{z-index:2;position:relative}.isSharing[_ngcontent-%COMP%]{position:absolute;left:2px;top:2px;color:var(--ion-color-primary);padding:2px}@media screen and (prefers-color-scheme: dark){.cardhoso[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:hover   ion-card[_ngcontent-%COMP%]{background-color:rgba(39,84,255,.1)}}"]}),U)}],B=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[c.Bz.forChild(L)],c.Bz]}),t}(),Y=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({}),t}(),F=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[r.ez,a.u5,s.Pc]]}),t}(),z=((I=function t(){n(this,t)}).\u0275fac=function(n){return new(n||I)},I.\u0275mod=g.oAB({type:I}),I.\u0275inj=g.cJS({imports:[[r.ez,a.u5,s.Pc,B,Y,a.UX,F]]}),I)}}])}();