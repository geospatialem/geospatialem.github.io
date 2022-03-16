"use strict";var _s=Object.defineProperty,ds=Object.defineProperties,vs=Object.getOwnPropertyDescriptors,es=Object.getOwnPropertySymbols,bs=Object.prototype.hasOwnProperty,Ms=Object.prototype.propertyIsEnumerable,ns=(x,g,a)=>g in x?_s(x,g,{enumerable:!0,configurable:!0,writable:!0,value:a}):x[g]=a,Y=(x,g)=>{for(var a in g||(g={}))bs.call(g,a)&&ns(x,a,g[a]);if(es)for(var a of es(g))Ms.call(g,a)&&ns(x,a,g[a]);return x},os=(x,g)=>ds(x,vs(g));(self.webpackChunksite=self.webpackChunksite||[]).push([[1407,3100],{83100:(x,g,a)=>{function W(m){return m=m||globalThis.location.hostname,S.some(D=>{var j;return null!=(null==(j=m)?void 0:j.match(D))})}function I(m,D){return m&&(D=D||globalThis.location.hostname)?null!=D.match(Z)||null!=D.match(R)?m.replace("static.arcgis.com","staticdev.arcgis.com"):null!=D.match(U)||null!=D.match(E)?m.replace("static.arcgis.com","staticqa.arcgis.com"):m:m}a.d(g,{pJ:()=>I,XO:()=>W});const Z=/^devext.arcgis.com$/,U=/^qaext.arcgis.com$/,R=/^[\w-]*\.mapsdevext.arcgis.com$/,E=/^[\w-]*\.mapsqa.arcgis.com$/,S=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,Z,U,/^jsapps.esri.com$/,R,E]},66960:(x,g,a)=>{a.r(g),a.d(g,{getPatternDescriptor:()=>q,getSymbolLayerFill:()=>i,previewSymbol3D:()=>ys});var W=a(15861),I=a(54346),F=a(78260),U=(a(8314),a(26584)),R=a(63290),E=a(62208),S=a(10699),m=a(23841),D=a(74741),j=a(33215),ls=a(48521),P=a(71131),z=a(6172),G=a(86606),as=a(50998);const k=22,A=120,rs=R.Z.getLogger("esri.symbols.support.previewSymbol3D");function w(s){const t=s.outline,o=(0,E.pC)(s.material)?s.material.color:null,e=(0,E.pC)(o)?o.toHex():null;if((0,E.Wi)(t)||"pattern"in t&&(0,E.pC)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===s.type&&"#ffffff"===e?{color:"#bdc3c7",width:.75}:null;const n=(0,m.F2)(t.size)||0;return{color:"rgba("+((0,E.pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,80),style:"pattern"in t&&(0,E.pC)(t.pattern)&&"style"===t.pattern.type?(0,D.Sp)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function J(s,t=1){const o=s.a,e=(0,F._Y)(s),n=e.h,l=e.s/t,r=100-(100-e.v)/t,{r:p,g:d,b:f}=(0,F.xr)({h:n,s:l,v:r});return[p,d,f,o]}function B(s){return"water"===s.type?(0,E.Wi)(s.color)?null:s.color:(0,E.Wi)(s.material)||(0,E.Wi)(s.material.color)?null:s.material.color}function i(s,t=0){const o=B(s);if(!o){if("fill"===s.type)return null;const l=(0,P.uH)(D.Ne.r,t);return[l,l,l,100]}const e=o.toRgba();for(let n=0;n<3;n++)e[n]=(0,P.uH)(e[n],t);return e}function q(s,t){return X.apply(this,arguments)}function X(){return(X=(0,W.Z)(function*(s,t){const o=s.style;return"none"===o?null:{type:"pattern",x:0,y:0,src:yield(0,D.Od)((0,I.V)(`esri/symbols/patterns/${o}.png`),t.toCss(!0)),width:5,height:5}})).apply(this,arguments)}function ss(s){return s.outline?w(s):{color:"rgba(0, 0, 0, 1)",width:1.5}}function ts(s,t){const o=B(s);if(!o)return null;let e="rgba(";return e+=(0,P.uH)(o.r,t)+",",e+=(0,P.uH)(o.g,t)+",",e+=(0,P.uH)(o.b,t)+",",e+o.a+");"}function N(s,t){const o=ts(s,t);return o?"pattern"in s&&(0,E.pC)(s.pattern)&&"style"===s.pattern.type&&"none"===s.pattern.style?null:{color:o,width:Math.min(s.size?(0,m.F2)(s.size):.75,80),style:"pattern"in s&&(0,E.pC)(s.pattern)&&"style"===s.pattern.type?(0,D.Sp)(s.pattern.style):null,cap:"cap"in s?s.cap:null,join:"join"in s?"miter"===s.join?(0,m.F2)(2):s.join:null}:{}}function K(s,t,o){const e=.75*o;return{type:"linear",x1:e?.25*e:0,y1:e?.5*e:0,x2:e||4,y2:e?.5*e:4,colors:[{color:s,offset:0},{color:t,offset:1}]}}function V(){return(V=(0,W.Z)(function*(s,t){const o="mesh-3d"===s.type,e=s.symbolLayers,n=t&&t.size?(0,m.F2)(t.size):null,l=t&&t.maxSize?(0,m.F2)(t.maxSize):null,r=n||k,p=[];let d=0,f=0,v=!1;for(let _=0;_<e.length;_++){const u=e.getItemAt(_),h=[];if(o&&"fill"!==u.type)continue;const O=P.JZ.fill[0];switch(u.type){case"fill":{const c=w(u),y=Math.min(r,l||A);d=Math.max(d,y),f=Math.max(f,y),v=!0;let b=i(u,0);const M="pattern"in u&&u.pattern,L=B(u);!o&&(0,E.pC)(M)&&"style"===M.type&&"solid"!==M.style&&L&&(b=yield q(M,L)),h.push({shape:O,fill:b,stroke:c});break}case"line":{const c=N(u,0);if((0,E.Wi)(c))break;const y={stroke:c,shape:O};d=Math.max(d,k),f=Math.max(f,k),h.push(y);break}case"extrude":{const c=Y({join:"round",width:1},N(u,-.4)),y=i(u,0),b=i(u,-.2),M=Math.min(r,l||A),L=(0,P.EV)(M);c.width=1,h.push({shape:L[0],fill:b,stroke:c}),h.push({shape:L[1],fill:b,stroke:c}),h.push({shape:L[2],fill:y,stroke:c});const T=.7*k+.5*M;d=Math.max(d,k),f=Math.max(f,T);break}case"water":{const c=B(u),y=J(c),b=J(c,2),M=J(c,3),L=(0,P.ht)();v=!0,h.push({shape:L[0],fill:y}),h.push({shape:L[1],fill:b}),h.push({shape:L[2],fill:M});const C=Math.min(r,l||A);d=Math.max(d,C),f=Math.max(f,C);break}}p.push(h)}return Promise.resolve((0,z.w)(p,[d,f],{node:t&&t.node,scale:v,opacity:t&&t.opacity}))})).apply(this,arguments)}function ys(s,t){if(0===s.symbolLayers.length)return Promise.reject(new U.Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(s.type){case"point-3d":return function hs(s,t){const o=t&&t.size?(0,m.F2)(t.size):null,e=t&&t.maxSize?(0,m.F2)(t.maxSize):null,n=t&&t.disableUpsampling,l=s.symbolLayers,r=[];let p=0,d=0;const f=l.getItemAt(l.length-1);let v;return f&&"icon"===f.type&&(v=f.size&&(0,m.F2)(f.size)),l.forEach(_=>{if("icon"!==_.type&&"object"!==_.type)return;const u="icon"===_.type?_.size&&(0,m.F2)(_.size):0,h=o||u?Math.ceil(Math.min(o||u,e||A)):k;if(_&&_.resource&&_.resource.href){const c=function is(s,t){const o=t&&t.resource,e=o&&o.href;if(s.thumbnail&&s.thumbnail.url)return Promise.resolve(s.thumbnail.url);if(e&&"object"!==t.type)return Promise.resolve((0,G.nf)(s,t));const n=(0,I.V)("esri/images/Legend/legend3dsymboldefault.png");return s.styleOrigin&&(s.styleOrigin.styleName||s.styleOrigin.styleUrl)?(0,as.resolveWebStyleSymbol)(s.styleOrigin,{portal:s.styleOrigin.portal},"webRef").catch(l=>l).then(l=>{var r;return(null==l||null==(r=l.thumbnail)?void 0:r.url)||n}):Promise.resolve(n)}(s,_).then(function(y){const b=_.get("material.color"),M=function ps(s){return"icon"===s.type?"multiply":"tint"}(_);return(0,z.r)(y,h,b,M,n)}).then(function(y){const b=y.width,M=y.height;return p=Math.max(p,b),d=Math.max(d,M),[{shape:{type:"image",x:0,y:0,width:b,height:M,src:y.url},fill:null,stroke:null}]});r.push(c)}else{var O;let c=h;"icon"===_.type&&v&&o&&(c=h*(u/v));const y="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(O=t.symbolConfig)?void 0:O.isTall)||"object"===_.type&&function cs(s){const t=s.depth,o=s.height,e=s.width;return e&&t&&o&&e===t&&e<o}(_);p=Math.max(p,y?20:c),d=Math.max(d,c),r.push(Promise.resolve(function us(s,t,o){const e=[];if(!s)return e;switch(s.type){case"icon":{const r=t,p=t;switch(s.resource&&s.resource.primitive||j.SI){case"circle":e.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:i(s,0),stroke:w(s)});break;case"square":e.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[0,0]},{command:"L",values:[r,0]},{command:"L",values:[r,p]},{command:"Z",values:[]}]},fill:i(s,0),stroke:w(s)});break;case"triangle":e.push({shape:{type:"path",path:[{command:"M",values:[0,p]},{command:"L",values:[.5*r,0]},{command:"L",values:[r,p]},{command:"Z",values:[]}]},fill:i(s,0),stroke:w(s)});break;case"cross":e.push({shape:{type:"path",path:[{command:"M",values:[.5*r,0]},{command:"L",values:[.5*r,p]},{command:"M",values:[0,.5*p]},{command:"L",values:[r,.5*p]}]},stroke:ss(s)});break;case"x":e.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[r,p]},{command:"M",values:[r,0]},{command:"L",values:[0,p]}]},stroke:ss(s)});break;case"kite":e.push({shape:{type:"path",path:[{command:"M",values:[0,.5*p]},{command:"L",values:[.5*r,0]},{command:"L",values:[r,.5*p]},{command:"L",values:[.5*r,p]},{command:"Z",values:[]}]},fill:i(s,0),stroke:w(s)})}break}case"object":switch(s.resource&&s.resource.primitive||ls.SI){case"cone":{const n=K(i(s,0),i(s,-.6),o?20:t),l=(0,P.TE)(t,o);e.push({shape:l[0],fill:n}),e.push({shape:l[1],fill:n});break}case"inverted-cone":{const n=i(s,0),l=K(n,i(s,-.6),t),r=(0,P.DY)(t);e.push({shape:r[0],fill:l}),e.push({shape:r[1],fill:n});break}case"cube":{const n=(0,P.Pc)(t,o);e.push({shape:n[0],fill:i(s,0)}),e.push({shape:n[1],fill:i(s,-.3)}),e.push({shape:n[2],fill:i(s,-.5)});break}case"cylinder":{const n=K(i(s,0),i(s,-.6),o?20:t),l=(0,P.EB)(t,o);e.push({shape:l[0],fill:n}),e.push({shape:l[1],fill:n}),e.push({shape:l[2],fill:i(s,0)});break}case"diamond":{const n=(0,P.XX)(t);e.push({shape:n[0],fill:i(s,-.3)}),e.push({shape:n[1],fill:i(s,0)}),e.push({shape:n[2],fill:i(s,-.3)}),e.push({shape:n[3],fill:i(s,-.7)});break}case"sphere":{const n=K(i(s,0),i(s,-.6));n.x1=0,n.y1=0,n.x2=.25*t,n.y2=.25*t,e.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:n});break}case"tetrahedron":{const n=(0,P.tp)(t);e.push({shape:n[0],fill:i(s,-.3)}),e.push({shape:n[1],fill:i(s,0)}),e.push({shape:n[2],fill:i(s,-.6)});break}}}return e}(_,c,y)))}}),(0,S.as)(r).then(function(_){const u=[];return _.forEach(function(h){h.value?u.push(h.value):h.error&&rs.warn("error while building swatchInfo!",h.error)}),(0,z.w)(u,[p,d],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})})}(s,t);case"line-3d":return function ms(s,t){const o=s.symbolLayers,e=[],n=(0,G.YW)(s),l=t&&t.size?(0,m.F2)(t.size):null,r=(t&&t.maxSize?(0,m.F2)(t.maxSize):null)||80;let p,d=0,f=0;return o.forEach((v,_)=>{if(!v||"line"!==v.type&&"path"!==v.type)return;const u=[];switch(v.type){case"line":{const h=N(v,0);if((0,E.Wi)(h))break;const O=h&&h.width||0;0===_&&(p=O);const c=Math.min(l||O,r),y=0===_?c:l?c*(O/p):c,b=y>20?2*y:40;f=Math.max(f,y),d=Math.max(d,b),h.width=y,u.push({shape:{type:"path",path:[{command:"M",values:[0,.5*f]},{command:"L",values:[d,.5*f]}]},stroke:h});break}case"path":{const h=Math.min(l||k,r),O=i(v,0),c=i(v,-.2),y=ts(v,-.4),b=y?{color:y,width:1}:{};if("quad"===v.profile){const M=v.width,L=v.height,C=(0,P.eb)(M&&L?M/L:1,0===L,0===M),T=os(Y({},b),{join:"bevel"});u.push({shape:C[0],fill:c,stroke:T}),u.push({shape:C[1],fill:c,stroke:T}),u.push({shape:C[2],fill:O,stroke:T})}else u.push({shape:P.JZ.pathSymbol3DLayer[0],fill:c,stroke:b}),u.push({shape:P.JZ.pathSymbol3DLayer[1],fill:O,stroke:b});f=Math.max(f,h),d=f}}e.push(u)}),Promise.resolve((0,z.w)(e,[d,f],{node:t&&t.node,scale:n,opacity:t&&t.opacity}))}(s,t);case"polygon-3d":case"mesh-3d":return function fs(s,t){return V.apply(this,arguments)}(s,t)}return Promise.reject(new U.Z("symbolPreview: swatchInfo3D","symbol not supported."))}}}]);