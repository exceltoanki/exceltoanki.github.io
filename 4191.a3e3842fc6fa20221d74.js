(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[4191],{4191:(t,e,i)=>{"use strict";i.r(e),i.d(e,{HoSoEditorPageModule:()=>Q});var s=i(8583),n=i(665),o=i(7823),r=i(649);const l={format:"text",toolbar:[]};var h=i(639),u=i(8194),a=i(4762),c=i(9075),d=i(5319),m=i(2759),g=i(7393);class f extends d.w{constructor(t,e){super()}schedule(t,e=0){return this}}let p=(()=>{class t{constructor(e,i=t.now){this.SchedulerAction=e,this.now=i}schedule(t,e=0,i){return new this.SchedulerAction(this,t).schedule(i,e)}}return t.now=()=>Date.now(),t})();class b extends p{constructor(t,e=p.now){super(t,()=>b.delegate&&b.delegate!==this?b.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,i){return b.delegate&&b.delegate!==this?b.delegate.schedule(t,e,i):super.schedule(t,e,i)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}}const v=new b(class extends f{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i,s=!1;try{this.work(t)}catch(n){s=!0,i=!!n&&n||new Error(n)}if(s)return this.unsubscribe(),i}_unsubscribe(){const t=this.id,e=this.scheduler,i=e.actions,s=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&i.splice(s,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}});function E(t,e=v){return i=>i.lift(new C(t,e))}class C{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new y(t,this.dueTime,this.scheduler))}}class y extends g.L{constructor(t,e,i){super(t),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(q,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function q(t){t.debouncedNext()}const x=[[["","quill-editor-toolbar",""]]],w=["[quill-editor-toolbar]"],k={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},O=(t,e)=>t||e||"html",S=new h.OlP("config",{providedIn:"root",factory:()=>({modules:k})});let T=(()=>{class t{constructor(t,e){this.config=e,this.count=0,this.document=t.get(s.K0),this.config||(this.config={modules:k})}getQuill(){return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(t=>(0,a.mG)(this,void 0,void 0,function*(){var e,s;const n=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;const o=yield i.e(2161).then(i.t.bind(i,2161,23));this.document.addEventListener=n,this.Quill=o.default?o.default:o,null===(e=this.config.customOptions)||void 0===e||e.forEach(t=>{const e=this.Quill.import(t.import);e.whitelist=t.whitelist,this.Quill.register(e,!0,this.config.suppressGlobalRegisterWarning)}),null===(s=this.config.customModules)||void 0===s||s.forEach(({implementation:t,path:e})=>{this.Quill.register(e,t,this.config.suppressGlobalRegisterWarning)}),t(this.Quill)}))),this.$importPromise}}return t.\u0275fac=function(e){return new(e||t)(h.LFG(h.zs3),h.LFG(S,8))},t.\u0275prov=h.Yz7({factory:function(){return new t(h.LFG(h.gxx),h.LFG(S,8))},token:t,providedIn:"root"}),t})(),V=(()=>{class t{constructor(t,e,i,n,o,r,l,u){this.elementRef=e,this.cd=i,this.domSanitizer=n,this.platformId=o,this.renderer=r,this.zone=l,this.service=u,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new h.vpe,this.onEditorChanged=new h.vpe,this.onContentChanged=new h.vpe,this.onSelectionChanged=new h.vpe,this.onFocus=new h.vpe,this.onBlur=new h.vpe,this.disabled=!1,this.subscription=null,this.valueGetter=(t,e)=>{let i=e.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==i&&"<div><br></div>"!==i||(i=this.defaultEmptyValue);let s=i;const n=O(this.format,this.service.config.format);if("text"===n)s=t.getText();else if("object"===n)s=t.getContents();else if("json"===n)try{s=JSON.stringify(t.getContents())}catch(o){s=t.getText()}return s},this.valueSetter=(t,e)=>{const i=O(this.format,this.service.config.format);if("html"===i)return this.sanitize&&(e=this.domSanitizer.sanitize(h.q3G.HTML,e)),t.clipboard.convert(e);if("json"===i)try{return JSON.parse(e)}catch(s){return[{insert:e}]}return e},this.selectionChangeHandler=(t,e,i)=>{const s=!t&&!!this.onModelTouched;(this.onBlur.observers.length||this.onFocus.observers.length||this.onSelectionChanged.observers.length||s)&&this.zone.run(()=>{null===t?this.onBlur.emit({editor:this.quillEditor,source:i}):null===e&&this.onFocus.emit({editor:this.quillEditor,source:i}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:e,range:t,source:i}),s&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(t,e,i)=>{const s=this.quillEditor.getText(),n=this.quillEditor.getContents();let o=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==o&&"<div><br></div>"!==o||(o=this.defaultEmptyValue);const r=this.trackChanges||this.service.config.trackChanges,l=("user"===i||r&&"all"===r)&&!!this.onModelChange;(this.onContentChanged.observers.length||l)&&this.zone.run(()=>{l&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:n,delta:t,editor:this.quillEditor,html:o,oldDelta:e,source:i,text:s}),this.cd.markForCheck()})},this.editorChangeHandler=(t,e,i,s)=>{if(this.onEditorChanged.observers.length)if("text-change"===t){const n=this.quillEditor.getText(),o=this.quillEditor.getContents();let r=this.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==r&&"<div><br></div>"!==r||(r=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:o,delta:e,editor:this.quillEditor,event:t,html:r,oldDelta:i,source:s,text:n}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:t,oldRange:i,range:e,source:s}),this.cd.markForCheck()})},this.document=t.get(s.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((t,e)=>{const i=e.trim();return i&&t.push(i),t},[])}ngAfterViewInit(){return(0,a.mG)(this,void 0,void 0,function*(){if((0,s.PM)(this.platformId))return;const t=yield this.service.getQuill();this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const e=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules);e?i.toolbar=e:void 0===i.toolbar&&(i.toolbar=k.toolbar);let n=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===n&&(n="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(e=>{const i=t.import(e.import);i.whitelist=e.whitelist,t.register(i,!0)}),this.customModules.forEach(({implementation:e,path:i})=>{t.register(i,e)});let o=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;o||(o=this.service.config.bounds?this.service.config.bounds:this.document.body);let r=this.debug;!r&&!1!==r&&this.service.config.debug&&(r=this.service.config.debug);let l=this.readOnly;l||!1===this.readOnly||(l=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let h=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(h=this.service.config.defaultEmptyValue);let u=this.scrollingContainer;u||null===this.scrollingContainer||(u=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let a=this.formats;if(a||void 0!==a||(a=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{var e,s,c;if(this.quillEditor=new t(this.editorElem,{bounds:o,debug:r,formats:a,modules:i,placeholder:n,readOnly:l,defaultEmptyValue:h,scrollingContainer:u,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const t=null===(s=null===(e=this.quillEditor)||void 0===e?void 0:e.theme)||void 0===s?void 0:s.tooltip,i=null===(c=null==t?void 0:t.root)||void 0===c?void 0:c.querySelector("input[data-link]");(null==i?void 0:i.dataset)&&(i.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===O(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const t=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(t,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observers.length||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})})}ngOnDestroy(){this.dispose()}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const e=t.styles.currentValue,i=t.styles.previousValue;i&&Object.keys(i).forEach(t=>{this.renderer.removeStyle(this.editorElem,t)}),e&&Object.keys(e).forEach(t=>{this.renderer.setStyle(this.editorElem,t,this.styles[t])})}if(t.classes){const e=t.classes.currentValue,i=t.classes.previousValue;i&&this.removeClasses(i),e&&this.addClasses(e)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.addClass(this.editorElem,t)})}removeClasses(e){t.normalizeClassNames(e).forEach(t=>{this.renderer.removeClass(this.editorElem,t)})}writeValue(t){if(this.filterNull&&null===t)return;if(this.content=t,!this.quillEditor)return;const e=O(this.format,this.service.config.format),i=this.valueSetter(this.quillEditor,t);if(this.compareValues){const t=this.quillEditor.getContents();if(JSON.stringify(t)===JSON.stringify(i))return}t?"text"===e?this.quillEditor.setText(t):this.quillEditor.setContents(i):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let e=!0;const i=this.quillEditor.getText(),s=this.trimOnValidation?i.trim().length:1===i.length&&0===i.trim().length?0:i.length-1,n=this.quillEditor.getContents().ops,o=n&&1===n.length&&["\n",""].includes(n[0].insert);return this.minLength&&s&&s<this.minLength&&(t.minLengthError={given:s,minLength:this.minLength},e=!1),this.maxLength&&s>this.maxLength&&(t.maxLengthError={given:s,maxLength:this.maxLength},e=!1),this.required&&!s&&o&&(t.requiredError={empty:!0},e=!1),e?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new d.w,this.subscription.add((0,m.R)(this.quillEditor,"selection-change").subscribe(([t,e,i])=>{this.selectionChangeHandler(t,e,i)}));let t=(0,m.R)(this.quillEditor,"text-change"),e=(0,m.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe(E(this.debounceTime)),e=e.pipe(E(this.debounceTime))),this.subscription.add(t.subscribe(([t,e,i])=>{this.textChangeHandler(t,e,i)})),this.subscription.add(e.subscribe(([t,e,i,s])=>{this.editorChangeHandler(t,e,i,s)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return t.\u0275fac=function(e){return new(e||t)(h.Y36(h.zs3),h.Y36(h.SBq),h.Y36(h.sBO),h.Y36(c.H7),h.Y36(h.Lbi),h.Y36(h.Qsj),h.Y36(h.R0b),h.Y36(T))},t.\u0275dir=h.lG2({type:t,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",compareValues:"compareValues",filterNull:"filterNull",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes",linkPlaceholder:"linkPlaceholder",debounceTime:"debounceTime"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[h.TTD]}),t})(),L=(()=>{class t extends V{constructor(t,e,i,s,n,o,r,l){super(t,e,i,s,n,o,r,l)}}return t.\u0275fac=function(e){return new(e||t)(h.Y36(h.zs3),h.Y36(h.SBq),h.Y36(h.sBO),h.Y36(c.H7),h.Y36(h.Lbi),h.Y36(h.Qsj),h.Y36(h.R0b),h.Y36(T))},t.\u0275cmp=h.Xpm({type:t,selectors:[["quill-editor"]],features:[h._Bn([{multi:!0,provide:n.JU,useExisting:(0,h.Gpc)(()=>t)},{multi:!0,provide:n.Cf,useExisting:(0,h.Gpc)(()=>t)}]),h.qOj],ngContentSelectors:w,decls:1,vars:0,template:function(t,e){1&t&&(h.F$t(x),h.Hsn(0))},styles:["\n    :host {\n      display: inline-block;\n    }\n    "],encapsulation:2}),t})(),A=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:S,useValue:e}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[s.ez]]}),t})();const z=["myquill"];function M(t,e){if(1&t){const t=h.EpF();h.TgZ(0,"ion-button",10),h.NdJ("click",function(){const e=h.CHM(t).$implicit;return h.oxw().changeEditor(e.action)}),h._UZ(1,"ion-icon",11),h._uU(2),h.qZA()}if(2&t){const t=e.$implicit,i=h.oxw();h.Q6J("disabled",t.action==i.currentEditFor),h.xp6(2),h.hij(" ",t.text," ")}}const F=[{path:"",component:(()=>{class t{constructor(t,e){this.router=t,this.hososervice=e,this.buttons=[{text:"Thay th\u1ebf",icon:"repeat-outline",action:"replace"},{text:"Front.html",icon:"logo-html5",action:"front"},{text:"Back.html",icon:"logo-html5",action:"back"},{text:"Style.css",icon:"sparkles-outline",action:"css"}],this.currentQuill=l,this.modules={toolbar:this.currentQuill.toolbar},this.ngOnInit()}ngOnInit(){if(this.router.getCurrentNavigation().extras.state){let t=this.router.getCurrentNavigation().extras.state;this.hoso=t.hoso,this.changeEditor("replace")}else this.router.navigate(["/t/ho-so"])}changeEditor(t){this.currentEditFor=t,this.quillresult=this.hoso[t],(["front","back"].indexOf(t)>-1||["replace","css"].indexOf(t)>-1)&&(this.currentQuill=l)}contentChanged(t){null!=this.quillresult&&(this.hoso[this.currentEditFor]=this.quillresult)}saveChinhSua(){this.hososervice.updateHoSo(this.hoso)}ionViewWillLeave(){this.saveChinhSua()}}return t.\u0275fac=function(e){return new(e||t)(h.Y36(r.F0),h.Y36(u.y))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-ho-so-editor"]],viewQuery:function(t,e){if(1&t&&h.Gf(z,5),2&t){let t;h.iGM(t=h.CRH())&&(e.myquill=t.first)}},decls:15,vars:6,consts:[["color","primary"],["slot","start"],[3,"text"],["slot","primary","color","secondary"],["shape","round",1,"taohoso",3,"click"],[1,"hide960"],["slot","end","name","save"],[3,"modules","ngModel","format","ngModelChange","onContentChanged"],["myquill",""],[3,"disabled","click",4,"ngFor","ngForOf"],[3,"disabled","click"],["slot","start","name","repeat-outline"]],template:function(t,e){1&t&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar",0),h.TgZ(2,"ion-buttons",1),h._UZ(3,"ion-back-button",2),h.qZA(),h.TgZ(4,"ion-title"),h._uU(5),h.qZA(),h.TgZ(6,"ion-buttons",3),h.TgZ(7,"ion-button",4),h.NdJ("click",function(){return e.saveChinhSua()}),h.TgZ(8,"span",5),h._uU(9,"L\u01b0u"),h.qZA(),h._UZ(10,"ion-icon",6),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(11,"ion-content"),h.TgZ(12,"quill-editor",7,8),h.NdJ("ngModelChange",function(t){return e.quillresult=t})("onContentChanged",function(t){return e.contentChanged(t)}),h.qZA(),h.YNc(14,M,3,2,"ion-button",9),h.qZA()),2&t&&(h.xp6(3),h.Q6J("text","Tr\u1edf v\u1ec1"),h.xp6(2),h.Oqu(null==e.hoso?null:e.hoso.name),h.xp6(7),h.Q6J("modules",e.modules)("ngModel",e.quillresult)("format",e.currentQuill.format),h.xp6(2),h.Q6J("ngForOf",e.buttons))},directives:[o.Gu,o.sr,o.Sm,o.oU,o.cs,o.wd,o.YG,o.gu,o.W2,L,n.JJ,n.On,s.sg],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[r.Bz.forChild(F)],r.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[s.ez,n.u5,o.Pc,Z,A.forRoot()]]}),t})()}}]);