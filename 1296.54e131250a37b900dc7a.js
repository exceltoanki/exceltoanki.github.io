(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[1296],{1296:(e,t,i)=>{"use strict";i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>u,keyboardDidClose:()=>w,keyboardDidOpen:()=>g,keyboardDidResize:()=>l,resetKeyboardAssist:()=>r,setKeyboardClose:()=>b,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>y});const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},d={},n=!1;const r=()=>{a={},d={},n=!1},h=e=>{p(e),e.visualViewport&&(d=u(e.visualViewport),e.visualViewport.onresize=()=>{y(e),g()||l(e)?c(e):w(e)&&b(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>b(e))},c=(e,t)=>{f(e,t),n=!0},b=e=>{k(e),n=!1},g=()=>!n&&a.width===d.width&&(a.height-d.height)*d.scale>150,l=e=>n&&!w(e),w=e=>n&&d.height===e.innerHeight,f=(e,t)=>{const i=new CustomEvent(o,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},k=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},y=e=>{a=Object.assign({},d),d=u(e.visualViewport)},u=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);