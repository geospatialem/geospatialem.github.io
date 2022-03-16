"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6172],{78260:(ct,K,b)=>{function Y(r){return"h"in r&&"s"in r&&"v"in r}function E(r){return"l"in r&&"a"in r&&"b"in r}function L(r){return"l"in r&&"c"in r&&"h"in r}b.d(K,{_Y:()=>c,Y3:()=>H,sJ:()=>it,xr:()=>y});const ot=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],W=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function C(r,l){const s=[];let u,p;if(r[0].length!==l.length)throw"dimensions do not match";const x=r.length,w=r[0].length;let A=0;for(u=0;u<x;u++){for(A=0,p=0;p<w;p++)A+=r[u][p]*l[p];s.push(A)}return s}function D(r){const l=[r.r/255,r.g/255,r.b/255].map(u=>u<=.04045?u/12.92:((u+.055)/1.055)**2.4),s=C(ot,l);return{x:100*s[0],y:100*s[1],z:100*s[2]}}function M(r){const l=C(W,[r.x/100,r.y/100,r.z/100]).map(s=>Math.min(1,Math.max(s<=.0031308?12.92*s:1.055*s**.4166666666666667-.055,0)));return{r:Math.round(255*l[0]),g:Math.round(255*l[1]),b:Math.round(255*l[2])}}function X(r){const l=[r.x/95.047,r.y/100,r.z/108.883].map(s=>s>.008856451679035631?s**.3333333333333333:7.787037037037035*s+.13793103448275862);return{l:116*l[1]-16,a:500*(l[0]-l[1]),b:200*(l[1]-l[2])}}function q(r){const l=r.l,s=[(l+16)/116+r.a/500,(l+16)/116,(l+16)/116-r.b/200].map(u=>u>6/29?u**3:3*(6/29)**2*(u-4/29));return{x:95.047*s[0],y:100*s[1],z:108.883*s[2]}}function y(r){return function R(r){return"r"in r&&"g"in r&&"b"in r}(r)?r:L(r)?function tt(r){return M(q(function _(r){const s=r.c,u=r.h;return{l:r.l,a:s*Math.cos(u),b:s*Math.sin(u)}}(r)))}(r):E(r)?function P(r){return M(q(r))}(r):function B(r){return"x"in r&&"y"in r&&"z"in r}(r)?M(r):Y(r)?function et(r){const l=(r.h+360)%360/60,u=r.v/100*255,p=u*(r.s/100),x=p*(1-Math.abs(l%2-1));let w;switch(Math.floor(l)){case 0:w={r:p,g:x,b:0};break;case 1:w={r:x,g:p,b:0};break;case 2:w={r:0,g:p,b:x};break;case 3:w={r:0,g:x,b:p};break;case 4:w={r:x,g:0,b:p};break;case 5:case 6:w={r:p,g:0,b:x};break;default:w={r:0,g:0,b:0}}return w.r=Math.round(w.r+u-p),w.g=Math.round(w.g+u-p),w.b=Math.round(w.b+u-p),w}(r):r}function c(r){return Y(r)?r:function nt(r){const l=r.r,s=r.g,u=r.b,p=Math.max(l,s,u),x=p-Math.min(l,s,u);let w=p,A=0===x?0:p===l?(s-u)/x%6:p===s?(u-l)/x+2:(l-s)/x+4,Q=0===x?0:x/w;return A<0&&(A+=6),A*=60,Q*=100,w*=100/255,{h:A,s:Q,v:w}}(y(r))}function H(r){return E(r)?r:function O(r){return X(D(r))}(y(r))}function it(r){return L(r)?r:function J(r){return function d(r){const l=r.l,s=r.a,u=r.b,p=Math.sqrt(s*s+u*u);let x=Math.atan2(u,s);return x=x>0?x:x+2*Math.PI,{l,c:p,h:x}}(X(D(r)))}(y(r))}},6172:(ct,K,b)=>{b.d(K,{w:()=>wt,r:()=>jt});var R=b(24263),Y=b(84792),E=b(78260),L=b(26584),B=b(8314),W=(b(50645),b(62996)),C=b(91558),D=b(12225),M=b(31478),d=(b(38570),b(63290),b(94450));let O=0,P=0;const J=(0,B.Z)("android"),tt=(0,B.Z)("chrome")||J&&J>=4?"auto":"optimizeLegibility",nt={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},et=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let y={},c={};const H={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},it=Math.PI;let at=1;function N(t,n){const e=t*(it/180);return Math.abs(n*Math.sin(e))+Math.abs(n*Math.cos(e))}function r(t){return t.map(n=>`${n.command} ${n.values.join(" ")}`).join(" ").trim()}function l(t,n,e,i){if(t){if("circle"===t.type)return(0,d.u)("circle",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,d.u)("ellipse",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,d.u)("rect",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,d.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const a="string"!=typeof t.path?r(t.path):t.path;return(0,d.u)("path",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4",d:a})}if("text"===t.type)return(0,d.u)("text",{fill:n,"fill-rule":"evenodd",stroke:e.color,"stroke-width":e.width,"stroke-linecap":e.cap,"stroke-linejoin":e.join,"stroke-dasharray":e.dashArray,"stroke-miterlimit":"4","text-anchor":i.align,"text-decoration":i.decoration,kerning:i.kerning,rotate:i.rotate,"text-rendering":tt,"font-style":i.font.style,"font-variant":i.font.variant,"font-weight":i.font.weight,"font-size":i.font.size,"font-family":i.font.family,x:t.x,y:t.y},t.text)}return null}function s(t){const n={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const e="patternId-"+ ++O;n.fill=`url(#${e})`,n.pattern={id:e,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const e="linearGradientId-"+ ++P;n.fill=`url(#${e})`,n.linearGradient={id:e,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map(i=>({offset:i.offset,color:i.color&&new C.Z(i.color).toString()}))}}else if(t){const e=new C.Z(t);n.fill=e.toString()}return n}function u(t){const n={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(n.width=t.width),t.cap&&(n.cap=t.cap),t.join&&(n.join=t.join.toString()),t.color&&(n.color=new C.Z(t.color).toString()),t.style)){let e=null;if(t.style in H&&(e=H[t.style]),Array.isArray(e)){e=e.slice(0);for(let i=0;i<e.length;++i)e[i]*=t.width;if("butt"!==t.cap){for(let i=0;i<e.length;i+=2)e[i]-=t.width,e[i]<1&&(e[i]=1);for(let i=1;i<e.length;i+=2)e[i]+=t.width}e=e.join(",")}n.dashArray=e}return n}function p(t,n){const e={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(e.align=t.align,e.decoration=t.decoration,e.kerning=t.kerning?"auto":"0",e.rotate=t.rotated?"90":"0",e.font.style=n.style||"normal",e.font.variant=n.variant||"normal",e.font.weight=n.weight||"normal",e.font.size=n.size&&n.size.toString()||"10pt",e.font.family=n.family||"serif"),e}function x(t){const{pattern:n,linearGradient:e}=t;if(n)return(0,d.u)("pattern",{id:n.id,patternUnits:"userSpaceOnUse",x:n.x,y:n.y,width:n.width,height:n.height},(0,d.u)("image",{x:n.image.x,y:n.image.y,width:n.image.width,height:n.image.height,href:n.image.href}));if(e){const i=e.stops.map((a,o)=>(0,d.u)("stop",{key:`${o}-stop`,offset:a.offset,"stop-color":a.color}));return(0,d.u)("linearGradient",{id:e.id,gradientUnits:"userSpaceOnUse",x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2},i)}return null}function w(t,n,e){return(0,M.t)(t,(0,M.i)(t),[n,e])}function A(t,n,e,i,a){return(0,M.s)(t,(0,M.i)(t),[n,e]),t[4]=t[4]*n-i*n+i,t[5]=t[5]*e-a*e+a,t}function j(t,n){y&&"left"in y?(y.left>t&&(y.left=t),y.right<t&&(y.right=t),y.top>n&&(y.top=n),y.bottom<n&&(y.bottom=n)):y={left:t,bottom:n,right:t,top:n}}function st(t){const n=t.args,e=n.length;let i;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<e;i+=2)j(n[i],n[i+1]);c.x=n[e-2],c.y=n[e-1];break;case"H":for(i=0;i<e;++i)j(n[i],c.y);c.x=n[e-1];break;case"V":for(i=0;i<e;++i)j(c.x,n[i]);c.y=n[e-1];break;case"m":{let a=0;for(("x"in c||(j(c.x=n[0],c.y=n[1]),a=2),i=a);i<e;i+=2)j(c.x+=n[i],c.y+=n[i+1]);break}case"l":case"t":for(i=0;i<e;i+=2)j(c.x+=n[i],c.y+=n[i+1]);break;case"h":for(i=0;i<e;++i)j(c.x+=n[i],c.y);break;case"v":for(i=0;i<e;++i)j(c.x,c.y+=n[i]);break;case"c":for(i=0;i<e;i+=6)j(c.x+n[i],c.y+n[i+1]),j(c.x+n[i+2],c.y+n[i+3]),j(c.x+=n[i+4],c.y+=n[i+5]);break;case"s":case"q":for(i=0;i<e;i+=4)j(c.x+n[i],c.y+n[i+1]),j(c.x+=n[i+2],c.y+=n[i+3]);break;case"A":for(i=0;i<e;i+=7)j(n[i+5],n[i+6]);c.x=n[e-2],c.y=n[e-1];break;case"a":for(i=0;i<e;i+=7)j(c.x+=n[i+5],c.y+=n[i+6])}}function lt(t,n,e){const i=nt[t.toLowerCase()];let a;"number"==typeof i&&(i?n.length>=i&&(a={action:t,args:n.slice(0,n.length-n.length%i)},e.push(a),st(a)):(a={action:t,args:[]},e.push(a),st(a)))}function ft(t){const n={x:0,y:0,width:0,height:0};if("circle"===t.type)n.x=t.cx-t.r,n.y=t.cy-t.r,n.width=2*t.r,n.height=2*t.r;else if("ellipse"===t.type)n.x=t.cx-t.rx,n.y=t.cy-t.ry,n.width=2*t.rx,n.height=2*t.ry;else if("image"===t.type||"rect"===t.type)n.x=t.x,n.y=t.y,n.width=t.width,n.height=t.height;else if("path"===t.type){const e=function ut(t){const n=("string"!=typeof t.path?r(t.path):t.path).match(et),e=[];if(y={},c={},!n)return null;let i="",a=[];const o=n.length;for(let g=0;g<o;++g){const f=n[g],k=parseFloat(f);isNaN(k)?(i&&lt(i,a,e),a=[],i=f):a.push(k)}lt(i,a,e);const h={x:0,y:0,width:0,height:0};return y&&"left"in y&&(h.x=y.left,h.y=y.top,h.width=y.right-y.left,h.height=y.bottom-y.top),h}(t);n.x=e.x,n.y=e.y,n.width=e.width,n.height=e.height}return n}function dt(t){const n={x:0,y:0,width:0,height:0};let e=null,i=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(const o of t)e?(e.x=Math.min(e.x,o.x),e.y=Math.min(e.y,o.y),i=Math.max(i,o.x+o.width),a=Math.max(a,o.y+o.height)):(e=n,e.x=o.x,e.y=o.y,i=o.x+o.width,a=o.y+o.height);return e&&(e.width=i-e.x,e.height=a-e.y),e}function gt(t,n,e,i,a,o,h,g,f){let k=(h&&o?N(o,n):n)/2,$=(h&&o?N(o,e):e)/2;if(f){const I=f[0],U=f[1];k=(h&&o?N(o,I):I)/2,$=(h&&o?N(o,U):U)/2}const v=t.width+i,z=t.height+i,S=(0,D.c)(),m=(0,D.c)();let F=!1;if(a&&0!==v&&0!==z){const I=v/z,U=n>e?n:e;let G=1,Z=1;isNaN(U)||(I>1?(G=U/v,Z=U/I/z):(Z=U/z,G=U*I/v)),(0,M.m)(m,m,A(S,G,Z,k,$)),F=!0}const T=t.x+(v-i)/2,V=t.y+(z-i)/2;if((0,M.m)(m,m,w(S,k-T,$-V)),!F&&(v>n||z>e)){const I=v/n>z/e,U=(I?n:e)/(I?v:z);(0,M.m)(m,m,A(S,U,U,T,V))}return o&&(0,M.m)(m,m,function Q(t,n,e,i){const a=n%360*Math.PI/180;(0,M.r)(t,(0,M.i)(t),a);const o=Math.cos(a),h=Math.sin(a),g=t[4],f=t[5];return t[4]=g*o-f*h+i*h-e*o+e,t[5]=f*o+g*h-e*h-i*o+i,t}(S,o,T,V)),g&&(0,M.m)(m,m,w(S,g[0],g[1])),`matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`}function pt(t,n,e,i){const a=[],o=[],h=++at,g=function yt(t,n,e){const i=null==t?void 0:t.effects.find(k=>"bloom"===k.type);if(!i)return null;const{strength:a,radius:o}=i,h=a>0?o:0,g=(a+h)*n,f=4*a+1;return(0,d.u)("filter",{id:`bloom${e}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,d.u)("feMorphology",{operator:"dilate",radius:(a+.5*h)*(5**(n/100)*(.4+n/100)),in:"SourceGraphic",result:"dilate"}),(0,d.u)("feGaussianBlur",{in:"dilate",stdDeviation:g/25,result:"blur"}),(0,d.u)("feGaussianBlur",{in:"blur",stdDeviation:g/50,result:"intensityBlur"}),(0,d.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,d.u)("feFuncR",{type:"linear",slope:f}),(0,d.u)("feFuncG",{type:"linear",slope:f}),(0,d.u)("feFuncB",{type:"linear",slope:f})),(0,d.u)("feMerge",null,(0,d.u)("feMergeNode",{in:"intensityBlur"}),(0,d.u)("feMergeNode",{in:"intensityBrightness"}),(0,d.u)("feGaussianBlur",{stdDeviation:a/10})))}(null==i?void 0:i.effectView,n,h);let f=null;if(g){var k;const $=null==i||null==(k=i.effectView)?void 0:k.effects.find(m=>"bloom"===m.type),v=($.strength?$.strength+$.radius/2:0)/3,S=e+e*v;f=[Math.max(n+n*v,10),Math.max(S,10)]}for(const $ of t){const v=[],z=[];let S=0,m=0,F=0;for(const V of $){const{shape:I,fill:U,stroke:G,font:Z,offset:rt}=V;S+=G&&G.width||0;const ht=s(U),zt=u(G),$t="text"===I.type?p(I,Z):null;a.push(x(ht)),v.push(l(I,ht.fill,zt,$t)),z.push(ft(I)),rt&&(m+=rt[0],F+=rt[1])}const T=gt(dt(z),n,e,S,null==i?void 0:i.scale,null==i?void 0:i.rotation,null==i?void 0:i.useRotationSize,[m,F],f);o.push((0,d.u)("g",{transform:T},v))}return null!=i&&i.useRotationSize&&null!=i&&i.rotation&&(n=N(null==i?void 0:i.rotation,n),e=N(null==i?void 0:i.rotation,e)),g&&(n=f[0],e=f[1]),(0,d.u)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:e},g,(0,d.u)("defs",null,a),g?(0,d.u)("g",{filter:`url(#bloom${h})`},o):o)}var mt=b(86606);const xt=(0,W.E)();function wt(t,n,e){const i=Math.ceil(n[0]),a=Math.ceil(n[1]);if(!t.some(h=>!!h.length))return null;const o=e&&e.node||document.createElement("div");return null!=e.opacity&&(o.style.opacity=e.opacity.toString()),null!=e.effectView&&(o.style.filter=(0,mt.wJ)(e.effectView)),xt.append(o,pt.bind(null,t,i,a,e)),o}function Mt(t,n,e,i,a){switch(a){case"multiply":t[n+0]*=e[0],t[n+1]*=e[1],t[n+2]*=e[2],t[n+3]*=e[3];break;default:{const o=(0,E._Y)({r:t[n+0],g:t[n+1],b:t[n+2]});o.h=i.h,o.s=i.s,o.v=o.v/100*i.v;const h=(0,E.xr)(o);t[n+0]=h.r,t[n+1]=h.g,t[n+2]=h.b,t[n+3]*=e[3];break}}}function jt(t,n,e,i,a){return function vt(t,n,e){return t?(0,Y.default)(t,{responseType:"image"}).then(i=>{const a=i.data,o=a.width,h=a.height,g=o/h;let f=n;if(e){const k=Math.max(o,h);f=Math.min(f,k)}return{image:a,width:g<=1?Math.ceil(f*g):f,height:g<=1?f:Math.ceil(f/g)}}):Promise.reject(new L.Z("renderUtils: imageDataSize","href not provided."))}(t,n,a).then(o=>{const h=o.width?o.width:n,g=o.height?o.height:n;if(o.image&&function bt(t,n){return!(!t||"ignore"===n||"multiply"===n&&255===t.r&&255===t.g&&255===t.b&&1===t.a)}(e,i)){let f=o.image.width,k=o.image.height;(0,B.Z)("edge")&&/\.svg$/i.test(t)&&(f-=1,k-=1);const $=function kt(t,n){t=Math.ceil(t),n=Math.ceil(n);const e=document.createElement("canvas");e.width=t,e.height=n,e.style.width=t+"px",e.style.height=n+"px";const i=e.getContext("2d");return i.clearRect(0,0,t,n),i}(h,g);$.drawImage(o.image,0,0,f,k,0,0,h,g);const v=$.getImageData(0,0,h,g),z=[e.r/255,e.g/255,e.b/255,e.a],S=(0,E._Y)(e);for(let m=0;m<v.data.length;m+=4)Mt(v.data,m,z,S,i);$.putImageData(v,0,0),t=$.canvas.toDataURL("image/png")}else{const f=R.id&&R.id.findCredential(t);if(f&&f.token){const k=-1===t.indexOf("?")?"?":"&";t=`${t}${k}token=${f.token}`}}return{url:t,width:h,height:g}}).catch(function(){return{url:t,width:n,height:n}})}}}]);