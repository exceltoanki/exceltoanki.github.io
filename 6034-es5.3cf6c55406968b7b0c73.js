!function(){function i(i,n,d){return n in i?Object.defineProperty(i,n,{value:d,enumerable:!0,configurable:!0,writable:!0}):i[n]=d,i}function n(i,n){var a="undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(!a){if(Array.isArray(i)||(a=function(i,n){if(!i)return;if("string"==typeof i)return d(i,n);var a=Object.prototype.toString.call(i).slice(8,-1);"Object"===a&&i.constructor&&(a=i.constructor.name);if("Map"===a||"Set"===a)return Array.from(i);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(i,n)}(i))||n&&i&&"number"==typeof i.length){a&&(i=a);var r=0,g=function(){};return{s:g,n:function(){return r>=i.length?{done:!0}:{done:!1,value:i[r++]}},e:function(i){throw i},f:g}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t,o=!0,p=!1;return{s:function(){a=a.call(i)},n:function(){var i=a.next();return o=i.done,i},e:function(i){p=!0,t=i},f:function(){try{o||null==a.return||a.return()}finally{if(p)throw t}}}}function d(i,n){(null==n||n>i.length)&&(n=i.length);for(var d=0,a=new Array(n);d<n;d++)a[d]=i[d];return a}function a(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function r(i,n){for(var d=0;d<n.length;d++){var a=n[d];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}function g(i,n,d){return n&&r(i.prototype,n),d&&r(i,d),i}(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[6034],{2239:function(d,r,t){"use strict";t.r(r),t.d(r,{ion_col:function(){return v},ion_grid:function(){return c},ion_row:function(){return x}});var o=t(23150),p=t(97585),e={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"},l=function(i){return void 0===i||""===i||!!window.matchMedia&&window.matchMedia(e[i]).matches},s=window,u=!!(s.CSS&&s.CSS.supports&&s.CSS.supports("--a: 0")),m=["","xs","sm","md","lg","xl"],v=function(){function d(i){a(this,d),(0,o.r)(this,i)}return g(d,[{key:"onResize",value:function(){(0,o.j)(this)}},{key:"getColumns",value:function(i){var d,a,r=n(m);try{for(r.s();!(a=r.n()).done;){var g=a.value,t=l(g),o=this[i+g.charAt(0).toUpperCase()+g.slice(1)];t&&void 0!==o&&(d=o)}}catch(p){r.e(p)}finally{r.f()}return d}},{key:"calculateSize",value:function(){var i=this.getColumns("size");if(i&&""!==i){var n="auto"===i?"auto":u?"calc(calc(".concat(i," / var(--ion-grid-columns, 12)) * 100%)"):i/12*100+"%";return{flex:"0 0 ".concat(n),width:"".concat(n),"max-width":"".concat(n)}}}},{key:"calculatePosition",value:function(n,d){var a=this.getColumns(n);if(a)return i({},d,u?"calc(calc(".concat(a," / var(--ion-grid-columns, 12)) * 100%)"):a>0&&a<12?a/12*100+"%":"auto")}},{key:"calculateOffset",value:function(i){return this.calculatePosition("offset",i?"margin-right":"margin-left")}},{key:"calculatePull",value:function(i){return this.calculatePosition("pull",i?"left":"right")}},{key:"calculatePush",value:function(i){return this.calculatePosition("push",i?"right":"left")}},{key:"render",value:function(){var n="rtl"===document.dir,d=(0,p.b)(this);return(0,o.h)(o.H,{class:i({},d,!0),style:Object.assign(Object.assign(Object.assign(Object.assign({},this.calculateOffset(n)),this.calculatePull(n)),this.calculatePush(n)),this.calculateSize())},(0,o.h)("slot",null))}}]),d}();v.style=":host{padding-left:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-right:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-top:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-bottom:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-start:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));-webkit-padding-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px));padding-inline-end:var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px))}}}";var c=function(){function n(i){a(this,n),(0,o.r)(this,i),this.fixed=!1}return g(n,[{key:"render",value:function(){var n,d=(0,p.b)(this);return(0,o.h)(o.H,{class:(n={},i(n,d,!0),i(n,"grid-fixed",this.fixed),n)},(0,o.h)("slot",null))}}]),n}();c.style=":host{padding-left:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px))}}@media (min-width: 576px){:host{padding-left:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px))}}}@media (min-width: 768px){:host{padding-left:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-md, var(--ion-grid-padding, 5px))}}}@media (min-width: 992px){:host{padding-left:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px))}}}@media (min-width: 1200px){:host{padding-left:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-right:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-top:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-bottom:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-start:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));-webkit-padding-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px));padding-inline-end:var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px))}}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.grid-fixed){width:var(--ion-grid-width-xs, var(--ion-grid-width, 100%));max-width:100%}@media (min-width: 576px){:host(.grid-fixed){width:var(--ion-grid-width-sm, var(--ion-grid-width, 540px))}}@media (min-width: 768px){:host(.grid-fixed){width:var(--ion-grid-width-md, var(--ion-grid-width, 720px))}}@media (min-width: 992px){:host(.grid-fixed){width:var(--ion-grid-width-lg, var(--ion-grid-width, 960px))}}@media (min-width: 1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl, var(--ion-grid-width, 1140px))}}:host(.ion-no-padding){--ion-grid-column-padding:0;--ion-grid-column-padding-xs:0;--ion-grid-column-padding-sm:0;--ion-grid-column-padding-md:0;--ion-grid-column-padding-lg:0;--ion-grid-column-padding-xl:0}";var x=function(){function i(n){a(this,i),(0,o.r)(this,n)}return g(i,[{key:"render",value:function(){return(0,o.h)(o.H,{class:(0,p.b)(this)},(0,o.h)("slot",null))}}]),i}();x.style=":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"}}])}();