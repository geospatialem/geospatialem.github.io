"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9185],{29185:(it,W,s)=>{s.r(W),s.d(W,{loadGLTFMesh:()=>J});var y=s(15861),R=s(91558),F=s(84792),L=s(88159),e=s(62208),U=s(30217),K=s(550),w=s(28093),Z=s(4794),$=s(61751),b=s(27530),V=s(1607),z=s(92529),E=s(60479),p=s(79800),x=s(63657),v=s(60490),G=s(60853),N=s(9160),X=s(31365),A=s(96170),Q=s(73825),H=s(79331),I=s(9554),P=s(63470),j=s(35995);function J(t,n,r){return T.apply(this,arguments)}function T(){return(T=(0,y.Z)(function*(t,n,r){const _=new N.C(Y(r)),o=(yield(0,X.z)(_,n,r,!0)).model,c=o.lods.shift(),i=new Map,u=new Map;o.textures.forEach((O,B)=>i.set(B,tt(O))),o.materials.forEach((O,B)=>u.set(B,nt(O,i)));const l=q(c);for(const O of l.parts)et(l,O,u);const{position:m,normal:f,tangent:a,color:M,texCoord0:C}=l.vertexAttributes,D={position:m.typedBuffer,normal:(0,e.pC)(f)?f.typedBuffer:null,tangent:(0,e.pC)(a)?a.typedBuffer:null,uv:(0,e.pC)(C)?C.typedBuffer:null,color:(0,e.pC)(M)?M.typedBuffer:null},h=(0,G.w1)(D,t,r);return{transform:h.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new z.ZP({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:D.color,uv:D.uv})}})).apply(this,arguments)}function Y(t){return null!=t&&t.resolveFile?{busy:!1,request:(n=(0,y.Z)(function*(r,_,o){const c=t.resolveFile(r),i="image"===_?"image":"binary"===_?"array-buffer":"json";return(yield(0,F.default)(c,{responseType:i,signal:(0,e.pC)(o)?o.signal:null})).data}),function(_,o,c){return n.apply(this,arguments)})}:null;var n}function d(t,n){if((0,e.Wi)(t))return"-";const r=t.typedBuffer;return`${(0,L.s1)(n,r.buffer,()=>n.size)}/${r.byteOffset}/${r.byteLength}`}function k(t){return(0,e.pC)(t)?t.toString():"-"}function q(t){let n=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},_=new Map,o=new Map,c=[];for(const i of t.parts){const{attributes:{position:u,normal:l,color:m,tangent:f,texCoord0:a}}=i,M=`\n      ${d(u,_)}/\n      ${d(l,_)}/\n      ${d(m,_)}/\n      ${d(f,_)}/\n      ${d(a,_)}/\n      ${k(i.transform)}\n    `;let C=!1;const D=(0,L.s1)(o,M,()=>(C=!0,{start:n,length:u.count}));C&&(n+=u.count),l&&(r.normal=!0),m&&(r.color=!0),f&&(r.tangent=!0),a&&(r.texCoord0=!0),c.push({gltf:i,writeVertices:C,region:D})}return{vertexAttributes:{position:(0,v.gS)(E.fP,n),normal:r.normal?(0,v.gS)(E.ct,n):null,tangent:r.tangent?(0,v.gS)(E.ek,n):null,color:r.color?(0,v.gS)(E.mc,n):null,texCoord0:r.texCoord0?(0,v.gS)(E.Eu,n):null},parts:c,components:[]}}function tt(t){return new V.Z({data:t.data,wrap:_t(t.parameters.wrap)})}function nt(t,n){const r=new R.Z(function at(t,n){return(0,Z.f)(g(t[0]),g(t[1]),g(t[2]),n)}(t.color,t.opacity)),_=t.emissiveFactor?new R.Z(function lt(t){return(0,w.f)(g(t[0]),g(t[1]),g(t[2]))}(t.emissiveFactor)):null;return new b.Z({color:r,colorTexture:(0,e.Wg)((0,e.yw)(t.textureColor,o=>n.get(o))),normalTexture:(0,e.Wg)((0,e.yw)(t.textureNormal,o=>n.get(o))),emissiveColor:_,emissiveTexture:(0,e.Wg)((0,e.yw)(t.textureEmissive,o=>n.get(o))),occlusionTexture:(0,e.Wg)((0,e.yw)(t.textureOcclusion,o=>n.get(o))),alphaMode:rt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:(0,e.Wg)((0,e.yw)(t.textureMetallicRoughness,o=>n.get(o)))})}function et(t,n,r){n.writeVertices&&function st(t,n){const{position:r,normal:_,tangent:o,color:c,texCoord0:i}=t.vertexAttributes,u=n.region.start,{attributes:l,transform:m}=n.gltf,f=l.position.count;if((0,p.t)(r.slice(u,f),l.position,m),(0,e.pC)(l.normal)&&(0,e.pC)(_)){const a=(0,U.a)((0,K.c)(),m);(0,p.a)(_.slice(u,f),l.normal,a)}else(0,e.pC)(_)&&(0,I.f)(_,0,0,1,{dstIndex:u,count:f});if((0,e.pC)(l.tangent)&&(0,e.pC)(o)){const a=(0,U.a)((0,K.c)(),m);(0,x.t)(o.slice(u,f),l.tangent,a)}else(0,e.pC)(o)&&(0,P.f)(o,0,0,1,1,{dstIndex:u,count:f});if((0,e.pC)(l.texCoord0)&&(0,e.pC)(i)?(0,j.n)(i.slice(u,f),l.texCoord0):(0,e.pC)(i)&&(0,j.f)(i,0,0,{dstIndex:u,count:f}),(0,e.pC)(l.color)&&(0,e.pC)(c)){const a=l.color,M=c.slice(u,f);if(4===a.elementCount)a instanceof E.ek?(0,x.s)(M,a,255):a instanceof E.mc?(0,P.c)(M,a):a instanceof E.v6&&(0,x.a)(M,a,8);else{(0,P.f)(M,255,255,255,255);const C=E.ne.fromTypedArray(M.typedBuffer,M.typedBufferStride);a instanceof E.ct?(0,p.s)(C,a,255):a instanceof E.ne?(0,I.c)(C,a):a instanceof E.mw&&(0,p.b)(C,a,8)}}else(0,e.pC)(c)&&(0,P.f)(c.slice(u,f),255,255,255,255)}(t,n);const _=n.gltf,o=function ot(t,n){switch(n){case 4:return(0,A.nh)(t,Q.DX);case 5:return(0,A.DA)(t);case 6:return(0,A.jX)(t)}}(_.indices||_.attributes.position.count,_.primitiveType),c=n.region.start;if(c)for(let i=0;i<o.length;i++)o[i]+=c;t.components.push(new $.Z({faces:o,material:r.get(_.material),trustSourceNormals:!0}))}function rt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function _t(t){return{horizontal:S(t.s),vertical:S(t.t)}}function S(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function g(t){return t**(1/H.K)*255}}}]);