"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8704],{38704:(r,d,l)=>{l.r(d),l.d(d,{previewWebStyleSymbol:()=>c});var o=l(84792),u=l(23841);function c(e,n,s){const i=e.thumbnail&&e.thumbnail.url;return i?(0,o.default)(i,{responseType:"image"}).then(h=>{const t=function m(e,n){const s=!/\\.svg$/i.test(e.src)&&n&&n.disableUpsampling,i=Math.max(e.width,e.height);let h=n&&null!=n.maxSize?(0,u.F2)(n.maxSize):120;s&&(h=Math.min(i,h));const t=Math.min(h,n&&null!=n.size?(0,u.F2)(n.size):i);if(t!==i){const a=0!==e.width&&0!==e.height?e.width/e.height:1;a>=1?(e.width=t,e.height=t/a):(e.width=t*a,e.height=t)}return e}(h.data,s);return s&&s.node?(s.node.appendChild(t),s.node):t}):e.fetchSymbol().then(h=>n(h,s))}}}]);