(self.webpackChunkexcel_to_anki=self.webpackChunkexcel_to_anki||[]).push([[3272],{53272:function(e,t,n){"use strict";n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(52377),a=n(39461);n(40960);var i=function(e,t,n,i,u){var c=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){i(e.deltaX/c.innerWidth)},onEnd:function(e){var t=c.innerWidth,n=e.deltaX/t,a=e.velocityX,i=a>=0&&(a>.2||e.deltaX>t/2),o=(i?1-n:n)*t,s=0;if(o>5){var l=o/Math.abs(a);s=Math.min(l,540)}u(i,n<=0?.01:(0,r.j)(0,n,.9999),s)}})}}}]);