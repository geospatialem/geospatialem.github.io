"use strict";var Kn=Object.defineProperty,Ln=Object.defineProperties,Mn=Object.getOwnPropertyDescriptors,an=Object.getOwnPropertySymbols,Pn=Object.prototype.hasOwnProperty,Dn=Object.prototype.propertyIsEnumerable,cn=(L,Z,d)=>Z in L?Kn(L,Z,{enumerable:!0,configurable:!0,writable:!0,value:d}):L[Z]=d,j=(L,Z)=>{for(var d in Z||(Z={}))Pn.call(Z,d)&&cn(L,d,Z[d]);if(an)for(var d of an(Z))Dn.call(Z,d)&&cn(L,d,Z[d]);return L},T=(L,Z)=>Ln(L,Mn(Z));(self.webpackChunksite=self.webpackChunksite||[]).push([[8302],{38302:(L,Z,d)=>{d.r(Z),d.d(Z,{registerFunctions:()=>S});var x=d(24263),h=d(27187),r=d(47562),P=d(85692),N=d(10699),p=d(2004),m=d(21674),c=d(87215),U=d(72854),D=d(49672),M=d(37118),O=d(55214),_=d(91179),C=d(16730);function W(u){return 0===x.i8.indexOf("4.")?M.Z.fromExtent(u):new M.Z({spatialReference:u.spatialReference,rings:[[[u.xmin,u.ymin],[u.xmin,u.ymax],[u.xmax,u.ymax],[u.xmax,u.ymin],[u.xmin,u.ymin]]]})}function K(u){if((0,r.p)(u,2,2),!(u[0]instanceof m.Z&&u[1]instanceof m.Z||u[0]instanceof m.Z&&null===u[1]||u[1]instanceof m.Z&&null===u[0]||null===u[0]&&null===u[1]))throw new Error("Illegal Argument")}function v(u,s){if("polygon"!==u.type&&"polyline"!==u.type&&"extent"!==u.type)return(0,N.DB)(0);let a=1;(u.spatialReference.vcsWkid||u.spatialReference.latestVcsWkid)&&(a=(0,P._R)(u.spatialReference)/(0,C.c9)(u.spatialReference));let g=0;if("polyline"===u.type)for(const n of u.paths)for(let i=1;i<n.length;i++)g+=(0,P.AW)(n[i],n[i-1],a);else if("polygon"===u.type)for(const n of u.rings){for(let i=1;i<n.length;i++)g+=(0,P.AW)(n[i],n[i-1],a);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||void 0!==n[0][2]&&n[0][2]!==n[n.length-1][2])&&(g+=(0,P.AW)(n[0],n[n.length-1],a))}else"extent"===u.type&&(g+=2*(0,P.AW)([u.xmin,u.ymin,0],[u.xmax,u.ymin,0],a),g+=2*(0,P.AW)([u.xmin,u.ymin,0],[u.xmin,u.ymax,0],a),g*=2,g+=4*Math.abs((0,r.E)(u.zmax,0)*a-(0,r.E)(u.zmin,0)*a));const y=new O.Z({hasZ:!1,hasM:!1,spatialReference:u.spatialReference,paths:[[0,0],[0,g]]});return(0,c.sz)(y,s)}function S(u){"async"===u.mode&&(u.functions.disjoint=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null===n[0]||null===n[1]||(0,c.ED)(n[0],n[1])})},u.functions.intersects=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.kK)(n[0],n[1])})},u.functions.touches=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.W4)(n[0],n[1])})},u.functions.crosses=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.jU)(n[0],n[1])})},u.functions.within=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.uh)(n[0],n[1])})},u.functions.contains=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.r3)(n[0],n[1])})},u.functions.overlaps=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null!==n[1]&&(0,c.Nm)(n[0],n[1])})},u.functions.equals=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return(0,r.p)(n,2,2),n[0]===n[1]||(n[0]instanceof m.Z&&n[1]instanceof m.Z?(0,c.fS)(n[0],n[1]):!(!(0,r.n)(n[0])||!(0,r.n)(n[1]))&&n[0].getTime()===n[1].getTime())})},u.functions.relate=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,3,3),n[0]instanceof m.Z&&n[1]instanceof m.Z)return(0,c.LV)(n[0],n[1],(0,r.d)(n[2]));if(n[0]instanceof m.Z&&null===n[1]||n[1]instanceof m.Z&&null===n[0]||null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")})},u.functions.intersection=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null===n[0]||null===n[1]?null:(0,c.wf)(n[0],n[1])})},u.functions.union=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){const i=[];if(0===(n=(0,r.K)(n)).length)throw new Error("Function called with wrong number of Parameters");if(1===n.length)if((0,r.a)(n[0])){const l=(0,r.K)(n[0]);for(let E=0;E<l.length;E++)if(null!==l[E]){if(!(l[E]instanceof m.Z))throw new Error("Illegal Argument");i.push(l[E])}}else{if(!(0,r.b)(n[0])){if(n[0]instanceof m.Z)return(0,r.r)((0,h.r1)(n[0]),s.spatialReference);if(null===n[0])return null;throw new Error("Illegal Argument")}{const l=(0,r.K)(n[0].toArray());for(let E=0;E<l.length;E++)if(null!==l[E]){if(!(l[E]instanceof m.Z))throw new Error("Illegal Argument");i.push(l[E])}}}else for(let l=0;l<n.length;l++)if(null!==n[l]){if(!(n[l]instanceof m.Z))throw new Error("Illegal Argument");i.push(n[l])}return 0===i.length?null:(0,c.G0)(i)})},u.functions.difference=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null!==n[0]&&null===n[1]?(0,h.r1)(n[0]):null===n[0]?null:(0,c.e5)(n[0],n[1])})},u.functions.symmetricdifference=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){return K(n=(0,r.K)(n)),null===n[0]&&null===n[1]?null:null===n[0]?(0,h.r1)(n[1]):null===n[1]?(0,h.r1)(n[0]):(0,c.Sp)(n[0],n[1])})},u.functions.clip=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,2),!(n[1]instanceof p.Z)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return null===n[1]?null:(0,c.oq)(n[0],n[1])})},u.functions.cut=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,2),!(n[1]instanceof O.Z)&&null!==n[1])throw new Error("Illegal Argument");if(null===n[0])return[];if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return null===n[1]?[(0,h.r1)(n[0])]:(0,c.z7)(n[0],n[1])})},u.functions.area=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if((0,r.p)(n,1,2),null===(n=(0,r.K)(n))[0])return 0;if((0,r.o)(n[0]))return n[0].sumArea((0,h.EI)((0,r.E)(n[1],-1)),!1,s.abortSignal).then(i=>{if(s.abortSignal.aborted)throw new Error("Operation has been cancelled.");return i});if((0,r.a)(n[0])||(0,r.b)(n[0])){const i=(0,r.M)(n[0],s.spatialReference);return null===i?0:(0,c.CJ)(i,(0,h.EI)((0,r.E)(n[1],-1)))}if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.CJ)(n[0],(0,h.EI)((0,r.E)(n[1],-1)))})},u.functions.areageodetic=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if((0,r.p)(n,1,2),null===(n=(0,r.K)(n))[0])return 0;if((0,r.o)(n[0]))return n[0].sumArea((0,h.EI)((0,r.E)(n[1],-1)),!0,s.abortSignal).then(i=>{if(s.abortSignal.aborted)throw new Error("Operation has been cancelled.");return i});if((0,r.a)(n[0])||(0,r.b)(n[0])){const i=(0,r.M)(n[0],s.spatialReference);return null===i?0:(0,c.Y4)(i,(0,h.EI)((0,r.E)(n[1],-1)))}if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.Y4)(n[0],(0,h.EI)((0,r.E)(n[1],-1)))})},u.functions.length=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if((0,r.p)(n,1,2),null===(n=(0,r.K)(n))[0])return 0;if((0,r.o)(n[0]))return n[0].sumLength((0,h.Lz)((0,r.E)(n[1],-1)),!1,s.abortSignal).then(i=>{if(s.abortSignal.aborted)throw new Error("Operation has been cancelled.");return i});if((0,r.a)(n[0])||(0,r.b)(n[0])){const i=(0,r.L)(n[0],s.spatialReference);return null===i?0:(0,c.sz)(i,(0,h.Lz)((0,r.E)(n[1],-1)))}if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.sz)(n[0],(0,h.Lz)((0,r.E)(n[1],-1)))})},u.functions.length3d=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if((0,r.p)(n,1,2),null===(n=(0,r.K)(n))[0])return 0;if((0,r.a)(n[0])||(0,r.b)(n[0])){const i=(0,r.L)(n[0],s.spatialReference);return null===i?0:!0===i.hasZ?v(i,(0,h.Lz)((0,r.E)(n[1],-1))):(0,c.sz)(i,(0,h.Lz)((0,r.E)(n[1],-1)))}if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return!0===n[0].hasZ?v(n[0],(0,h.Lz)((0,r.E)(n[1],-1))):(0,c.sz)(n[0],(0,h.Lz)((0,r.E)(n[1],-1)))})},u.functions.lengthgeodetic=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if((0,r.p)(n,1,2),null===(n=(0,r.K)(n))[0])return 0;if((0,r.o)(n[0]))return n[0].sumLength((0,h.Lz)((0,r.E)(n[1],-1)),!0,s.abortSignal).then(i=>{if(s.abortSignal.aborted)throw new Error("Operation has been cancelled.");return i});if((0,r.a)(n[0])||(0,r.b)(n[0])){const i=(0,r.L)(n[0],s.spatialReference);return null===i?0:(0,c.kQ)(i,(0,h.Lz)((0,r.E)(n[1],-1)))}if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.kQ)(n[0],(0,h.Lz)((0,r.E)(n[1],-1)))})},u.functions.distance=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){n=(0,r.K)(n),(0,r.p)(n,2,3);let i=n[0];((0,r.a)(n[0])||(0,r.b)(n[0]))&&(i=(0,r.O)(n[0],s.spatialReference));let l=n[1];if(((0,r.a)(n[1])||(0,r.b)(n[1]))&&(l=(0,r.O)(n[1],s.spatialReference)),!(i instanceof m.Z))throw new Error("Illegal Argument");if(!(l instanceof m.Z))throw new Error("Illegal Argument");return(0,c.TE)(i,l,(0,h.Lz)((0,r.E)(n[2],-1)))})},u.functions.distancegeodetic=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){n=(0,r.K)(n),(0,r.p)(n,2,3);const i=n[0],l=n[1];if(!(i instanceof D.Z))throw new Error("Illegal Argument");if(!(l instanceof D.Z))throw new Error("Illegal Argument");const E=new O.Z({paths:[],spatialReference:i.spatialReference});return E.addPath([i,l]),(0,c.kQ)(E,(0,h.Lz)((0,r.E)(n[2],-1)))})},u.functions.densify=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return n[0]instanceof M.Z||n[0]instanceof O.Z?(0,c.Cz)(n[0],i,(0,h.Lz)((0,r.E)(n[2],-1))):n[0]instanceof p.Z?(0,c.Cz)(W(n[0]),i,(0,h.Lz)((0,r.E)(n[2],-1))):n[0]})},u.functions.densifygeodetic=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");if(i<=0)throw new Error("Illegal Argument");return n[0]instanceof M.Z||n[0]instanceof O.Z?(0,c.j2)(n[0],i,(0,h.Lz)((0,r.E)(n[2],-1))):n[0]instanceof p.Z?(0,c.j2)(W(n[0]),i,(0,h.Lz)((0,r.E)(n[2],-1))):n[0]})},u.functions.generalize=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,4),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");return(0,c.D$)(n[0],i,(0,r.y)((0,r.E)(n[2],!0)),(0,h.Lz)((0,r.E)(n[3],-1)))})},u.functions.buffer=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?(0,h.r1)(n[0]):(0,c.f3)(n[0],i,(0,h.Lz)((0,r.E)(n[2],-1)))})},u.functions.buffergeodetic=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,3),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");return 0===i?(0,h.r1)(n[0]):(0,c.rd)(n[0],i,(0,h.Lz)((0,r.E)(n[2],-1)))})},u.functions.offset=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,2,6),null===n[0])return null;if(!(n[0]instanceof M.Z||n[0]instanceof O.Z))throw new Error("Illegal Argument");const i=(0,r.t)(n[1]);if(isNaN(i))throw new Error("Illegal Argument");const l=(0,r.t)((0,r.E)(n[4],10));if(isNaN(l))throw new Error("Illegal Argument");const E=(0,r.t)((0,r.E)(n[5],0));if(isNaN(E))throw new Error("Illegal Argument");return(0,c.cv)(n[0],i,(0,h.Lz)((0,r.E)(n[2],-1)),(0,r.d)((0,r.E)(n[3],"round")).toLowerCase(),l,E)})},u.functions.rotate=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){n=(0,r.K)(n),(0,r.p)(n,2,3);let i=n[0];if(null===i)return null;if(!(i instanceof m.Z))throw new Error("Illegal Argument");i instanceof p.Z&&(i=M.Z.fromExtent(i));const l=(0,r.t)(n[1]);if(isNaN(l))throw new Error("Illegal Argument");const E=(0,r.E)(n[2],null);if(null===E)return(0,c.U1)(i,l);if(E instanceof D.Z)return(0,c.U1)(i,l,E);throw new Error("Illegal Argument")})},u.functions.centroid=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,1,1),null===n[0])return null;let i=n[0];if(((0,r.a)(n[0])||(0,r.b)(n[0]))&&(i=(0,r.O)(n[0],s.spatialReference)),null===i)return null;if(!(i instanceof m.Z))throw new Error("Illegal Argument");return i instanceof D.Z?(0,r.r)((0,h.r1)(n[0]),s.spatialReference):i instanceof M.Z?i.centroid:i instanceof O.Z?(0,P.s9)(i):i instanceof U.Z?(0,P.Ay)(i):i instanceof p.Z?i.center:null})},u.functions.multiparttosinglepart=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){n=(0,r.K)(n),(0,r.p)(n,1,1);const i=[];if(null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return n[0]instanceof D.Z||n[0]instanceof p.Z?[(0,r.r)((0,h.r1)(n[0]),s.spatialReference)]:(0,c.og)(n[0]).then(l=>{if(l instanceof M.Z){const E=[],R=[];for(let I=0;I<l.rings.length;I++)if(l.isClockwise(l.rings[I])){const z=(0,_.im)({rings:[l.rings[I]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});E.push(z)}else R.push({ring:l.rings[I],pt:l.getPoint(I,0)});for(let I=0;I<R.length;I++)for(let z=0;z<E.length;z++)if(E[z].contains(R[I].pt)){E[z].addRing(R[I].ring);break}return E}if(l instanceof O.Z){const E=[];for(let R=0;R<l.paths.length;R++){const I=(0,_.im)({paths:[l.paths[R]],hasZ:!0===l.hasZ,hazM:!0===l.hasM,spatialReference:l.spatialReference.toJSON()});E.push(I)}return E}if(n[0]instanceof U.Z){const E=(0,r.r)((0,h.r1)(n[0]),s.spatialReference);for(let R=0;R<E.points.length;R++)i.push(E.getPoint(R));return i}return null})})},u.functions.issimple=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,1,1),null===n[0])return!0;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.Gg)(n[0])})},u.functions.simplify=function(s,a){return u.standardFunctionAsync(s,a,function(g,y,n){if(n=(0,r.K)(n),(0,r.p)(n,1,1),null===n[0])return null;if(!(n[0]instanceof m.Z))throw new Error("Illegal Argument");return(0,c.og)(n[0])})})}},87215:(L,Z,d)=>{d.d(Z,{f3:()=>mn,oq:()=>K,r3:()=>s,jU:()=>a,z7:()=>S,Cz:()=>An,e5:()=>ln,ED:()=>E,TE:()=>g,fS:()=>y,D$:()=>dn,Y4:()=>In,rd:()=>yn,j2:()=>wn,kQ:()=>Rn,wf:()=>pn,kK:()=>n,Gg:()=>z,cv:()=>hn,Nm:()=>R,CJ:()=>xn,sz:()=>Zn,LV:()=>I,U1:()=>En,og:()=>fn,Sp:()=>gn,W4:()=>i,G0:()=>_n,uh:()=>l});var x=d(15861),r=(d(29132),d(59289)),N=(d(49672),d(91179));function p(e){var o;return Array.isArray(e)?null==(o=e[0])?void 0:o.spatialReference:null==e?void 0:e.spatialReference}function m(e){return e&&(Array.isArray(e)?e.map(m):e.toJSON?e.toJSON():e)}function c(e){return Array.isArray(e)?e.map(o=>(0,N.im)(o)):(0,N.im)(e)}function U(e,o){let f;return Array.isArray(e)?f=e:(f=[],f.push(e),null!=o&&f.push(o)),f}let D;function M(){return O.apply(this,arguments)}function O(){return(O=(0,x.Z)(function*(){return D||(D=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),D})).apply(this,arguments)}function _(e,o){return C.apply(this,arguments)}function C(){return(C=(0,x.Z)(function*(e,o){return(yield M()).invoke("executeGEOperation",{operation:e,parameters:m(o)})})).apply(this,arguments)}function K(e,o){return v.apply(this,arguments)}function v(){return(v=(0,x.Z)(function*(e,o){return c(yield _("clip",[p(e),e,o]))})).apply(this,arguments)}function S(e,o){return u.apply(this,arguments)}function u(){return(u=(0,x.Z)(function*(e,o){return c(yield _("cut",[p(e),e,o]))})).apply(this,arguments)}function s(e,o){return _("contains",[p(e),e,o])}function a(e,o){return _("crosses",[p(e),e,o])}function g(e,o,f){return _("distance",[p(e),e,o,f])}function y(e,o){return _("equals",[p(e),e,o])}function n(e,o){return _("intersects",[p(e),e,o])}function i(e,o){return _("touches",[p(e),e,o])}function l(e,o){return _("within",[p(e),e,o])}function E(e,o){return _("disjoint",[p(e),e,o])}function R(e,o){return _("overlaps",[p(e),e,o])}function I(e,o,f){return _("relate",[p(e),e,o,f])}function z(e){return _("isSimple",[p(e),e])}function fn(e){return b.apply(this,arguments)}function b(){return(b=(0,x.Z)(function*(e){return c(yield _("simplify",[p(e),e]))})).apply(this,arguments)}function ln(e,o){return G.apply(this,arguments)}function G(){return(G=(0,x.Z)(function*(e,o){return c(yield _("difference",[p(e),e,o]))})).apply(this,arguments)}function gn(e,o){return J.apply(this,arguments)}function J(){return(J=(0,x.Z)(function*(e,o){return c(yield _("symmetricDifference",[p(e),e,o]))})).apply(this,arguments)}function pn(e,o){return V.apply(this,arguments)}function V(){return(V=(0,x.Z)(function*(e,o){return c(yield _("intersect",[p(e),e,o]))})).apply(this,arguments)}function _n(e){return k.apply(this,arguments)}function k(){return(k=(0,x.Z)(function*(e,o=null){const f=U(e,o);return c(yield _("union",[p(f),f]))})).apply(this,arguments)}function hn(e,o,f,A,w,F){return H.apply(this,arguments)}function H(){return(H=(0,x.Z)(function*(e,o,f,A,w,F){return c(yield _("offset",[p(e),e,o,f,A,w,F]))})).apply(this,arguments)}function mn(e,o,f){return Q.apply(this,arguments)}function Q(){return(Q=(0,x.Z)(function*(e,o,f,A=!1){const w=[p(e),e,o,f,A];return c(yield _("buffer",w))})).apply(this,arguments)}function yn(e,o,f,A,w,F){return Y.apply(this,arguments)}function Y(){return(Y=(0,x.Z)(function*(e,o,f,A,w,F){const On=[p(e),e,o,f,A,w,F];return c(yield _("geodesicBuffer",On))})).apply(this,arguments)}function nn(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}function En(e,o,f){return tn.apply(this,arguments)}function tn(){return(tn=(0,x.Z)(function*(e,o,f){var A;if(null==e)throw new Error("Illegal Argument Exception");const w=e.spatialReference;f=null!=(A=f)?A:nn(e);const F=e.constructor.fromJSON(yield _("rotate",[w,e,o,f]));return F.spatialReference=w,F})).apply(this,arguments)}function dn(e,o,f,A){return un.apply(this,arguments)}function un(){return(un=(0,x.Z)(function*(e,o,f,A){return c(yield _("generalize",[p(e),e,o,f,A]))})).apply(this,arguments)}function An(e,o,f){return on.apply(this,arguments)}function on(){return(on=(0,x.Z)(function*(e,o,f){return c(yield _("densify",[p(e),e,o,f]))})).apply(this,arguments)}function wn(e,o,f){return sn.apply(this,arguments)}function sn(){return(sn=(0,x.Z)(function*(e,o,f,A=0){return c(yield _("geodesicDensify",[p(e),e,o,f,A]))})).apply(this,arguments)}function xn(e,o){return _("planarArea",[p(e),e,o])}function Zn(e,o){return _("planarLength",[p(e),e,o])}function In(e,o,f){return _("geodesicArea",[p(e),e,o,f])}function Rn(e,o,f){return _("geodesicLength",[p(e),e,o,f])}}}]);