"use strict";var yo=Object.defineProperty,Co=Object.defineProperties,So=Object.getOwnPropertyDescriptors,$r=Object.getOwnPropertySymbols,Eo=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable,Zr=(de,V,p)=>V in de?yo(de,V,{enumerable:!0,configurable:!0,writable:!0,value:p}):de[V]=p,It=(de,V)=>{for(var p in V||(V={}))Eo.call(V,p)&&Zr(de,p,V[p]);if($r)for(var p of $r(V))Po.call(V,p)&&Zr(de,p,V[p]);return de},tr=(de,V)=>Co(de,So(V));(self.webpackChunksite=self.webpackChunksite||[]).push([[5476,3100],{96160:(de,V,p)=>{p.d(V,{D:()=>dt,b:()=>ct});var C=p(52382),B=p(73132),M=p(78925),A=p(24255),R=p(60355),I=p(26859),O=p(84833),S=p(72326),P=p(36603),b=p(58173),T=p(85305),N=p(52071),Z=p(5105),W=p(47923),X=p(29052),J=p(54662),k=p(22792),oe=p(10109),xe=p(96395),We=p(98898),Ie=p(92724),Ge=p(8507),ye=p(92836),ft=p(93609),lt=p(411),Be=p(49974),q=p(17625),ae=p(22355);function ct(te){const ue=new ae.kG,ut=ue.vertex.code,St=ue.fragment.code;return ue.include(lt.a,{name:"Default Material Shader",output:te.output}),ue.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),ue.include(O.f),ue.varyings.add("vpos","vec3"),ue.include(ye.kl,te),ue.include(R.f,te),ue.include(N.LC,te),0!==te.output&&7!==te.output||(ue.include(I.O,te),ue.include(A.w,{linearDepth:!1}),0===te.normalType&&te.offsetBackfaces&&ue.include(B.w),ue.include(X.Q,te),ue.include(T.B,te),te.instancedColor&&ue.attributes.add("instanceColor","vec4"),ue.varyings.add("localvpos","vec3"),ue.include(P.D,te),ue.include(C.q,te),ue.include(S.R,te),ue.include(b.c,te),ue.vertex.uniforms.add("externalColor","vec4"),ue.varyings.add("vcolorExt","vec4"),te.multipassTerrainEnabled&&ue.varyings.add("depth","float"),ut.add(q.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${te.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${q.H.float(ft.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===te.normalType?q.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${te.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===te.normalType&&te.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${te.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===te.output&&(ue.include(M.p2,te),ue.include(ft.sj,te),te.multipassTerrainEnabled&&(ue.fragment.include(W.S),ue.include(oe.l,te)),ue.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),te.hasColorTexture&&ue.fragment.uniforms.add("tex","sampler2D"),ue.fragment.include(Be.y),St.add(q.H`
      void main() {
        discardBySlice(vpos);
        ${te.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${te.hasColorTexture?q.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${te.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:q.H`vec4 texColor = vec4(1.0);`}
        ${te.attributeColor?q.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:q.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===te.output&&(ue.include(M.p2,te),ue.include(k.X,te),ue.include(J.K,te),ue.include(ft.sj,te),te.receiveShadows&&ue.include(Ge.hX,te),te.multipassTerrainEnabled&&(ue.fragment.include(W.S),ue.include(oe.l,te)),ue.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),te.hasColorTexture&&ue.fragment.uniforms.add("tex","sampler2D"),ue.include(Ie.jV,te),ue.include(We.T,te),ue.fragment.include(Be.y),ue.include(xe.k,te),St.add(q.H`
      void main() {
        discardBySlice(vpos);
        ${te.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${te.hasColorTexture?q.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${te.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:q.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===te.normalType?q.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:q.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===te.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${te.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===te.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${te.attributeColor?q.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:q.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${te.hasNormalTexture?q.H`
              mat3 tangentSpace = ${te.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===te.pbrMode||2===te.pbrMode?1===te.viewingMode?q.H`vec3 normalGround = normalize(vpos + localOrigin);`:q.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:q.H``}
        ${1===te.pbrMode||2===te.pbrMode?q.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${te.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),ue.include(Z.s,te),ue}const dt=Object.freeze({__proto__:null,build:ct})},77133:(de,V,p)=>{p.d(V,{R:()=>Be,b:()=>lt});var C=p(52382),B=p(73132),M=p(78925),A=p(24255),R=p(60355),I=p(26859),O=p(84833),S=p(72326),P=p(36603),b=p(58173),T=p(52071),N=p(5105),Z=p(47923),W=p(54662),X=p(22792),J=p(10109),k=p(98898),oe=p(92724),xe=p(8507),We=p(92836),Ie=p(93609),Ge=p(49974),ye=p(17625),ft=p(22355);function lt(q){const ae=new ft.kG,ct=ae.vertex.code,dt=ae.fragment.code;return ae.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),ae.include(O.f),ae.varyings.add("vpos","vec3"),ae.include(We.kl,q),ae.include(R.f,q),ae.include(T.LC,q),0!==q.output&&7!==q.output||(ae.include(I.O,q),ae.include(A.w,{linearDepth:!1}),q.offsetBackfaces&&ae.include(B.w),q.instancedColor&&ae.attributes.add("instanceColor","vec4"),ae.varyings.add("vNormalWorld","vec3"),ae.varyings.add("localvpos","vec3"),q.multipassTerrainEnabled&&ae.varyings.add("depth","float"),ae.include(P.D,q),ae.include(C.q,q),ae.include(S.R,q),ae.include(b.c,q),ae.vertex.uniforms.add("externalColor","vec4"),ae.varyings.add("vcolorExt","vec4"),ct.add(ye.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${q.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${ye.H.float(Ie.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${q.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${q.multipassTerrainEnabled?ye.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===q.output&&(ae.include(M.p2,q),ae.include(Ie.sj,q),q.multipassTerrainEnabled&&(ae.fragment.include(Z.S),ae.include(J.l,q)),ae.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),ae.fragment.uniforms.add("view","mat4"),q.hasColorTexture&&ae.fragment.uniforms.add("tex","sampler2D"),ae.fragment.include(Ge.y),dt.add(ye.H`
      void main() {
        discardBySlice(vpos);
        ${q.multipassTerrainEnabled?ye.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${q.hasColorTexture?ye.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ye.H`vec4 texColor = vec4(1.0);`}
        ${q.attributeColor?ye.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ye.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===q.output&&(ae.include(M.p2,q),ae.include(X.X,q),ae.include(W.K,q),ae.include(Ie.sj,q),q.receiveShadows&&ae.include(xe.hX,q),q.multipassTerrainEnabled&&(ae.fragment.include(Z.S),ae.include(J.l,q)),ae.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),ae.fragment.uniforms.add("view","mat4"),q.hasColorTexture&&ae.fragment.uniforms.add("tex","sampler2D"),ae.include(oe.jV,q),ae.include(k.T,q),ae.fragment.include(Ge.y),dt.add(ye.H`
      void main() {
        discardBySlice(vpos);
        ${q.multipassTerrainEnabled?ye.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${q.hasColorTexture?ye.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:ye.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===q.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${q.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===q.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${q.attributeColor?ye.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:ye.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${ye.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===q.pbrMode||2===q.pbrMode?1===q.viewingMode?ye.H`vec3 normalGround = normalize(vpos + localOrigin);`:ye.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:ye.H``}
        ${1===q.pbrMode||2===q.pbrMode?ye.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${q.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),ae.include(N.s,q),ae}const Be=Object.freeze({__proto__:null,build:lt})},550:(de,V,p)=>{function C(){return[1,0,0,0,1,0,0,0,1]}function A(I,O){return new Float64Array(I,O,9)}p.d(V,{a:()=>A,c:()=>C}),Object.freeze({__proto__:null,create:C,clone:function B(I){return[I[0],I[1],I[2],I[3],I[4],I[5],I[6],I[7],I[8]]},fromValues:function M(I,O,S,P,b,T,N,Z,W){return[I,O,S,P,b,T,N,Z,W]},createView:A})},43703:(de,V,p)=>{function C(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function B(O){return[O[0],O[1],O[2],O[3],O[4],O[5],O[6],O[7],O[8],O[9],O[10],O[11],O[12],O[13],O[14],O[15]]}function A(O,S){return new Float64Array(O,S,16)}p.d(V,{I:()=>R,a:()=>A,b:()=>B,c:()=>C});const R=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:C,clone:B,fromValues:function M(O,S,P,b,T,N,Z,W,X,J,k,oe,xe,We,Ie,Ge){return[O,S,P,b,T,N,Z,W,X,J,k,oe,xe,We,Ie,Ge]},createView:A,IDENTITY:R})},48977:(de,V,p)=>{p.d(V,{c:()=>oe,g:()=>P,j:()=>St,k:()=>We,m:()=>b,s:()=>S});var C=p(550),B=p(78451),M=p(28093),A=p(39863),R=p(84161),I=p(993);function S(F,j,se){se*=.5;const re=Math.sin(se);return F[0]=re*j[0],F[1]=re*j[1],F[2]=re*j[2],F[3]=Math.cos(se),F}function P(F,j){const se=2*Math.acos(j[3]),re=Math.sin(se/2);return re>A.E?(F[0]=j[0]/re,F[1]=j[1]/re,F[2]=j[2]/re):(F[0]=1,F[1]=0,F[2]=0),se}function b(F,j,se){const re=j[0],ne=j[1],me=j[2],Me=j[3],Te=se[0],Se=se[1],Qe=se[2],U=se[3];return F[0]=re*U+Me*Te+ne*Qe-me*Se,F[1]=ne*U+Me*Se+me*Te-re*Qe,F[2]=me*U+Me*Qe+re*Se-ne*Te,F[3]=Me*U-re*Te-ne*Se-me*Qe,F}function X(F,j,se,re){const ne=j[0],me=j[1],Me=j[2],Te=j[3];let Se,Qe,U,H,G,K=se[0],ie=se[1],pe=se[2],be=se[3];return Qe=ne*K+me*ie+Me*pe+Te*be,Qe<0&&(Qe=-Qe,K=-K,ie=-ie,pe=-pe,be=-be),1-Qe>A.E?(Se=Math.acos(Qe),U=Math.sin(Se),H=Math.sin((1-re)*Se)/U,G=Math.sin(re*Se)/U):(H=1-re,G=re),F[0]=H*ne+G*K,F[1]=H*me+G*ie,F[2]=H*Me+G*pe,F[3]=H*Te+G*be,F}function oe(F,j){return F[0]=-j[0],F[1]=-j[1],F[2]=-j[2],F[3]=j[3],F}function xe(F,j){const se=j[0]+j[4]+j[8];let re;if(se>0)re=Math.sqrt(se+1),F[3]=.5*re,re=.5/re,F[0]=(j[5]-j[7])*re,F[1]=(j[6]-j[2])*re,F[2]=(j[1]-j[3])*re;else{let ne=0;j[4]>j[0]&&(ne=1),j[8]>j[3*ne+ne]&&(ne=2);const me=(ne+1)%3,Me=(ne+2)%3;re=Math.sqrt(j[3*ne+ne]-j[3*me+me]-j[3*Me+Me]+1),F[ne]=.5*re,re=.5/re,F[3]=(j[3*me+Me]-j[3*Me+me])*re,F[me]=(j[3*me+ne]+j[3*ne+me])*re,F[Me]=(j[3*Me+ne]+j[3*ne+Me])*re}return F}function We(F,j,se,re){const ne=.5*Math.PI/180;j*=ne,se*=ne,re*=ne;const me=Math.sin(j),Me=Math.cos(j),Te=Math.sin(se),Se=Math.cos(se),Qe=Math.sin(re),U=Math.cos(re);return F[0]=me*Se*U-Me*Te*Qe,F[1]=Me*Te*U+me*Se*Qe,F[2]=Me*Se*Qe-me*Te*U,F[3]=Me*Se*U+me*Te*Qe,F}const Ge=I.c,ye=I.s,ft=I.a,lt=b,Be=I.b,q=I.d,ae=I.l,ct=I.e,dt=ct,te=I.f,ue=te,ut=I.n,St=I.g,zt=I.h,z=(0,M.c)(),Y=(0,M.f)(1,0,0),he=(0,M.f)(0,1,0),fe=(0,B.a)(),_e=(0,B.a)(),He=(0,C.c)();Object.freeze({__proto__:null,identity:function O(F){return F[0]=0,F[1]=0,F[2]=0,F[3]=1,F},setAxisAngle:S,getAxisAngle:P,multiply:b,rotateX:function T(F,j,se){se*=.5;const re=j[0],ne=j[1],me=j[2],Me=j[3],Te=Math.sin(se),Se=Math.cos(se);return F[0]=re*Se+Me*Te,F[1]=ne*Se+me*Te,F[2]=me*Se-ne*Te,F[3]=Me*Se-re*Te,F},rotateY:function N(F,j,se){se*=.5;const re=j[0],ne=j[1],me=j[2],Me=j[3],Te=Math.sin(se),Se=Math.cos(se);return F[0]=re*Se-me*Te,F[1]=ne*Se+Me*Te,F[2]=me*Se+re*Te,F[3]=Me*Se-ne*Te,F},rotateZ:function Z(F,j,se){se*=.5;const re=j[0],ne=j[1],me=j[2],Me=j[3],Te=Math.sin(se),Se=Math.cos(se);return F[0]=re*Se+ne*Te,F[1]=ne*Se-re*Te,F[2]=me*Se+Me*Te,F[3]=Me*Se-me*Te,F},calculateW:function W(F,j){const se=j[0],re=j[1],ne=j[2];return F[0]=se,F[1]=re,F[2]=ne,F[3]=Math.sqrt(Math.abs(1-se*se-re*re-ne*ne)),F},slerp:X,random:function J(F){const j=(0,A.R)(),se=(0,A.R)(),re=(0,A.R)(),ne=Math.sqrt(1-j),me=Math.sqrt(j);return F[0]=ne*Math.sin(2*Math.PI*se),F[1]=ne*Math.cos(2*Math.PI*se),F[2]=me*Math.sin(2*Math.PI*re),F[3]=me*Math.cos(2*Math.PI*re),F},invert:function k(F,j){const se=j[0],re=j[1],ne=j[2],me=j[3],Me=se*se+re*re+ne*ne+me*me,Te=Me?1/Me:0;return F[0]=-se*Te,F[1]=-re*Te,F[2]=-ne*Te,F[3]=me*Te,F},conjugate:oe,fromMat3:xe,fromEuler:We,str:function Ie(F){return"quat("+F[0]+", "+F[1]+", "+F[2]+", "+F[3]+")"},copy:Ge,set:ye,add:ft,mul:lt,scale:Be,dot:q,lerp:ae,length:ct,len:dt,squaredLength:te,sqrLen:ue,normalize:ut,exactEquals:St,equals:zt,rotationTo:function kt(F,j,se){const re=(0,R.d)(j,se);return re<-.999999?((0,R.c)(z,Y,j),(0,R.u)(z)<1e-6&&(0,R.c)(z,he,j),(0,R.n)(z,z),S(F,z,Math.PI),F):re>.999999?(F[0]=0,F[1]=0,F[2]=0,F[3]=1,F):((0,R.c)(z,j,se),F[0]=z[0],F[1]=z[1],F[2]=z[2],F[3]=1+re,ut(F,F))},sqlerp:function Ce(F,j,se,re,ne,me){return X(fe,j,ne,me),X(_e,se,re,me),X(F,fe,_e,2*me*(1-me)),F},setAxes:function Ve(F,j,se,re){const ne=He;return ne[0]=se[0],ne[3]=se[1],ne[6]=se[2],ne[1]=re[0],ne[4]=re[1],ne[7]=re[2],ne[2]=-j[0],ne[5]=-j[1],ne[8]=-j[2],ut(F,xe(F,ne))}})},78451:(de,V,p)=>{function C(){return[0,0,0,1]}function B(O){return[O[0],O[1],O[2],O[3]]}function A(O,S){return new Float64Array(O,S,4)}p.d(V,{I:()=>R,a:()=>C,b:()=>B,c:()=>A});const R=[0,0,0,1];Object.freeze({__proto__:null,create:C,clone:B,fromValues:function M(O,S,P,b){return[O,S,P,b]},createView:A,IDENTITY:R})},79800:(de,V,p)=>{p.d(V,{a:()=>M,b:()=>I,n:()=>R,s:()=>A,t:()=>B});var C=p(96286);function B(S,P,b){if(S.count!==P.count)return void C.k.error("source and destination buffers need to have the same number of elements");const T=S.count,N=b[0],Z=b[1],W=b[2],X=b[4],J=b[5],k=b[6],oe=b[8],xe=b[9],We=b[10],Ie=b[12],Ge=b[13],ye=b[14],ft=S.typedBuffer,lt=S.typedBufferStride,Be=P.typedBuffer,q=P.typedBufferStride;for(let ae=0;ae<T;ae++){const ct=ae*lt,dt=ae*q,te=Be[dt],ue=Be[dt+1],ut=Be[dt+2];ft[ct]=N*te+X*ue+oe*ut+Ie,ft[ct+1]=Z*te+J*ue+xe*ut+Ge,ft[ct+2]=W*te+k*ue+We*ut+ye}}function M(S,P,b){if(S.count!==P.count)return void C.k.error("source and destination buffers need to have the same number of elements");const T=S.count,N=b[0],Z=b[1],W=b[2],X=b[3],J=b[4],k=b[5],oe=b[6],xe=b[7],We=b[8],Ie=S.typedBuffer,Ge=S.typedBufferStride,ye=P.typedBuffer,ft=P.typedBufferStride;for(let lt=0;lt<T;lt++){const Be=lt*Ge,q=lt*ft,ae=ye[q],ct=ye[q+1],dt=ye[q+2];Ie[Be]=N*ae+X*ct+oe*dt,Ie[Be+1]=Z*ae+J*ct+xe*dt,Ie[Be+2]=W*ae+k*ct+We*dt}}function A(S,P,b){const T=Math.min(S.count,P.count),N=S.typedBuffer,Z=S.typedBufferStride,W=P.typedBuffer,X=P.typedBufferStride;for(let J=0;J<T;J++){const k=J*Z,oe=J*X;N[k]=b*W[oe],N[k+1]=b*W[oe+1],N[k+2]=b*W[oe+2]}}function R(S,P){const b=Math.min(S.count,P.count),T=S.typedBuffer,N=S.typedBufferStride,Z=P.typedBuffer,W=P.typedBufferStride;for(let X=0;X<b;X++){const J=X*N,k=X*W,oe=Z[k],xe=Z[k+1],We=Z[k+2],Ie=Math.sqrt(oe*oe+xe*xe+We*We);if(Ie>0){const Ge=1/Ie;T[J]=Ge*oe,T[J+1]=Ge*xe,T[J+2]=Ge*We}}}function I(S,P,b){const T=Math.min(S.count,P.count),N=S.typedBuffer,Z=S.typedBufferStride,W=P.typedBuffer,X=P.typedBufferStride;for(let J=0;J<T;J++){const k=J*Z,oe=J*X;N[k]=W[oe]>>b,N[k+1]=W[oe+1]>>b,N[k+2]=W[oe+2]>>b}}Object.freeze({__proto__:null,transformMat4:B,transformMat3:M,scale:A,normalize:R,shiftRight:I})},9554:(de,V,p)=>{function C(A,R,I){const O=A.typedBuffer,S=A.typedBufferStride,P=R.typedBuffer,b=R.typedBufferStride,T=I?I.count:R.count;let N=(I&&I.dstIndex?I.dstIndex:0)*S,Z=(I&&I.srcIndex?I.srcIndex:0)*b;for(let W=0;W<T;++W)O[N]=P[Z],O[N+1]=P[Z+1],O[N+2]=P[Z+2],N+=S,Z+=b}function B(A,R,I,O,S){var P,b;const T=A.typedBuffer,N=A.typedBufferStride,Z=null!=(P=null==S?void 0:S.count)?P:A.count;let W=(null!=(b=null==S?void 0:S.dstIndex)?b:0)*N;for(let X=0;X<Z;++X)T[W]=R,T[W+1]=I,T[W+2]=O,W+=N}p.d(V,{c:()=>C,f:()=>B}),Object.freeze({__proto__:null,copy:C,fill:B})},14658:(de,V,p)=>{function C(){return new Float32Array(3)}function M(J,k,oe){const xe=new Float32Array(3);return xe[0]=J,xe[1]=k,xe[2]=oe,xe}function R(){return C()}function I(){return M(1,1,1)}function O(){return M(1,0,0)}function S(){return M(0,1,0)}function P(){return M(0,0,1)}p.d(V,{c:()=>C,f:()=>M});const b=R(),T=I(),N=O(),Z=S(),W=P();Object.freeze({__proto__:null,create:C,clone:function B(J){const k=new Float32Array(3);return k[0]=J[0],k[1]=J[1],k[2]=J[2],k},fromValues:M,createView:function A(J,k){return new Float32Array(J,k,3)},zeros:R,ones:I,unitX:O,unitY:S,unitZ:P,ZEROS:b,ONES:T,UNIT_X:N,UNIT_Y:Z,UNIT_Z:W})},83100:(de,V,p)=>{function C(P){return P=P||globalThis.location.hostname,S.some(b=>{var T;return null!=(null==(T=P)?void 0:T.match(b))})}function B(P,b){return P&&(b=b||globalThis.location.hostname)?null!=b.match(A)||null!=b.match(I)?P.replace("static.arcgis.com","staticdev.arcgis.com"):null!=b.match(R)||null!=b.match(O)?P.replace("static.arcgis.com","staticqa.arcgis.com"):P:P}p.d(V,{pJ:()=>B,XO:()=>C});const A=/^devext.arcgis.com$/,R=/^qaext.arcgis.com$/,I=/^[\w-]*\.mapsdevext.arcgis.com$/,O=/^[\w-]*\.mapsqa.arcgis.com$/,S=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,A,R,/^jsapps.esri.com$/,I,O]},96286:(de,V,p)=>{p.d(V,{k:()=>B});const B=p(63290).Z.getLogger("esri.views.3d.support.buffer.math")},95476:(de,V,p)=>{p.r(V),p.d(V,{fetch:()=>_o,gltfToEngineResources:()=>cr,parseUrl:()=>Kr});var C=p(15861),B=p(83100),M=p(62208),A=p(30217),R=p(550),I=p(28347),O=p(43703),S=p(84161),P=p(28093),b=p(5548),T=p(60479),N=p(79800),Z=p(63657),W=p(60490),X=p(9160),J=p(31365),k=p(96170),oe=p(84792),xe=p(59213),We=p(26584),Ie=p(63290),Ge=p(10699),ye=p(10349),ft=p(70026),lt=p(77029),Be=p(2282);class q{constructor(l,d,v,x){this.primitiveIndices=l,this._numIndexPerPrimitive=d,this.indices=v,this.position=x,this.center=(0,P.c)(),(0,Be.hu)(l.length>=1),(0,Be.hu)(v.length%this._numIndexPerPrimitive==0),(0,Be.hu)(v.length>=l.length*this._numIndexPerPrimitive),(0,Be.hu)(3===x.size||4===x.size);const{data:y,size:E}=x,D=l.length;let L=E*v[this._numIndexPerPrimitive*l[0]];ae.clear(),ae.push(L),this.bbMin=(0,P.f)(y[L],y[L+1],y[L+2]),this.bbMax=(0,P.a)(this.bbMin);for(let $=0;$<D;++$){const le=this._numIndexPerPrimitive*l[$];for(let ee=0;ee<this._numIndexPerPrimitive;++ee){L=E*v[le+ee],ae.push(L);let ve=y[L];this.bbMin[0]=Math.min(ve,this.bbMin[0]),this.bbMax[0]=Math.max(ve,this.bbMax[0]),ve=y[L+1],this.bbMin[1]=Math.min(ve,this.bbMin[1]),this.bbMax[1]=Math.max(ve,this.bbMax[1]),ve=y[L+2],this.bbMin[2]=Math.min(ve,this.bbMin[2]),this.bbMax[2]=Math.max(ve,this.bbMax[2])}}(0,S.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let w=this.radius*this.radius;for(let $=0;$<ae.length;++$){L=ae.getItemAt($);const le=y[L]-this.center[0],ee=y[L+1]-this.center[1],ve=y[L+2]-this.center[2],Q=le*le+ee*ee+ve*ve;if(Q<=w)continue;const Pe=Math.sqrt(Q),we=.5*(Pe-this.radius);this.radius=this.radius+we,w=this.radius*this.radius;const Fe=we/Pe;this.center[0]+=le*Fe,this.center[1]+=ee*Fe,this.center[2]+=ve*Fe}ae.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,S.h)(this.bbMin,this.bbMax)>1){const l=(0,S.e)((0,P.c)(),this.bbMin,this.bbMax,.5),d=this.primitiveIndices.length,v=new Uint8Array(d),x=new Array(8);for(let w=0;w<8;++w)x[w]=0;const{data:y,size:E}=this.position;for(let w=0;w<d;++w){let $=0;const le=this._numIndexPerPrimitive*this.primitiveIndices[w];let ee=E*this.indices[le],ve=y[ee],Q=y[ee+1],Pe=y[ee+2];for(let we=1;we<this._numIndexPerPrimitive;++we){ee=E*this.indices[le+we];const Fe=y[ee],mt=y[ee+1],qe=y[ee+2];Fe<ve&&(ve=Fe),mt<Q&&(Q=mt),qe<Pe&&(Pe=qe)}ve<l[0]&&($|=1),Q<l[1]&&($|=2),Pe<l[2]&&($|=4),v[w]=$,++x[$]}let D=0;for(let w=0;w<8;++w)x[w]>0&&++D;if(D<2)return;const L=new Array(8);for(let w=0;w<8;++w)L[w]=x[w]>0?new Uint32Array(x[w]):void 0;for(let w=0;w<8;++w)x[w]=0;for(let w=0;w<d;++w){const $=v[w];L[$][x[$]++]=this.primitiveIndices[w]}this._children=new Array(8);for(let w=0;w<8;++w)void 0!==L[w]&&(this._children[w]=new q(L[w],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){ae.prune()}}const ae=new lt.Z({deallocator:null});var ct=p(86236);class dt{constructor(){this.id=(0,ct.D)()}unload(){}}var te=p(73825);class ue extends dt{constructor(l,d=[],v=0,x=-1){super(),this._primitiveType=v,this.edgeIndicesLength=x,this.type=2,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[y,E]of l)E&&this._vertexAttributes.set(y,It({},E));if(null==d||0===d.length){const y=function ut(_){const l=_.values().next().value;return null==l?0:l.data.length/l.size}(this._vertexAttributes),E=(0,te.p)(y);this.edgeIndicesLength=this.edgeIndicesLength<0?y:this.edgeIndicesLength;for(const D of this._vertexAttributes.keys())this._indices.set(D,E)}else for(const[y,E]of d)E&&(this._indices.set(y,St(E)),"position"===y&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(y).length:this.edgeIndicesLength))}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(l){const d=this._vertexAttributes.get(l);return d&&!d.exclusive&&(d.data=Array.from(d.data),d.exclusive=!0),d}get indices(){return this._indices}get indexCount(){const l=this._indices.values().next().value;return l?l.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,M.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(l){return 0===this.primitiveType?this.computeAttachmentOriginTriangles(l):this.computeAttachmentOriginPoints(l)}computeAttachmentOriginTriangles(l){const d=this.indices.get("position"),v=this.vertexAttributes.get("position");return(0,te.cM)(v,d,l)}computeAttachmentOriginPoints(l){const d=this.indices.get("position"),v=this.vertexAttributes.get("position");return(0,te.NO)(v,d,l)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const l=this.indices.get("position");if(0===l.length)return null;const d=0===this.primitiveType?3:1;(0,Be.hu)(l.length%d==0,"Indexing error: "+l.length+" not divisible by "+d);const v=(0,te.p)(l.length/d),x=this.vertexAttributes.get("position");return new q(v,d,l,x)}}function St(_){if(_.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return _;for(const l of _)if(l>=65536)return _;return new Uint16Array(_)}var zt=p(94573),kt=p(61885),z=p(21286),Y=p(55713),he=p(21726),Ce=p(33899),fe=p(54346);function _e(){if((0,M.Wi)(Ve)){const _=l=>(0,fe.V)(`esri/libs/basisu/${l}`);Ve=p.e(2405).then(p.bind(p,52405)).then(l=>l.b).then(({default:l})=>l({locateFile:_}).then(d=>(d.initializeBasis(),delete d.then,d)))}return Ve}let Ve;var He=p(55086),ke=p(26906);let F=null,j=null;function se(){return re.apply(this,arguments)}function re(){return(re=(0,C.Z)(function*(){return(0,M.Wi)(j)&&(j=_e(),F=yield j),j})).apply(this,arguments)}function Me(_,l,d,v,x){const y=(0,ke.RG)(l?37496:37492);return Math.ceil(d*v*y*(x&&_>1?(4**_-1)/(3*4**(_-1)):1))}function Te(_){return _.getNumImages()>=1&&!_.isUASTC()}function Se(_){return _.getFaces()>=1&&_.isETC1S()}function U(){return(U=(0,C.Z)(function*(_,l,d){(0,M.Wi)(F)&&(F=yield se());const v=new F.BasisFile(new Uint8Array(d));if(!Te(v))return null;v.startTranscoding();const x=K(_,l,v.getNumLevels(0),v.getHasAlpha(),v.getImageWidth(0,0),v.getImageHeight(0,0),(y,E)=>v.getImageTranscodedSizeInBytes(0,y,E),(y,E,D)=>v.transcodeImage(D,0,y,E,0,0));return v.close(),v.delete(),x})).apply(this,arguments)}function G(){return(G=(0,C.Z)(function*(_,l,d){(0,M.Wi)(F)&&(F=yield se());const v=new F.KTX2File(new Uint8Array(d));if(!Se(v))return null;v.startTranscoding();const x=K(_,l,v.getLevels(),v.getHasAlpha(),v.getWidth(),v.getHeight(),(y,E)=>v.getImageTranscodedSizeInBytes(y,0,0,E),(y,E,D)=>v.transcodeImage(D,y,0,0,E,0,-1,-1));return v.close(),v.delete(),x})).apply(this,arguments)}function K(_,l,d,v,x,y,E,D){const{compressedTextureETC:L,compressedTextureS3TC:w}=_.capabilities,[$,le]=L?v?[1,37496]:[0,37492]:w?v?[3,33779]:[2,33776]:[13,6408],ee=l.hasMipmap?d:Math.min(1,d),ve=[];for(let Fe=0;Fe<ee;Fe++)ve.push(new Uint8Array(E(Fe,$))),D(Fe,$,ve[Fe]);const Q=ve.length>1,Pe=Q?9987:9729,we=tr(It({},l),{samplingMode:Pe,hasMipmap:Q,internalFormat:le,width:x,height:y});return new He.Z(_,we,{type:"compressed",levels:ve})}const ie=Ie.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function Ue(_){return _.charCodeAt(0)+(_.charCodeAt(1)<<8)+(_.charCodeAt(2)<<16)+(_.charCodeAt(3)<<24)}const $e=Ue("DXT1"),Je=Ue("DXT3"),rt=Ue("DXT5");const _t=new Map([["position",0],["normal",1],["uv0",2],["color",3],["size",4],["tangent",4],["auxpos1",5],["symbolColor",5],["auxpos2",6],["featureAttribute",6],["instanceFeatureAttribute",6],["instanceColor",7],["model",8],["modelNormal",12],["modelOriginHi",11],["modelOriginLo",15]]),Rt=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],Ot=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];var wt=p(83994),Dt=p(49353),Tt=p(85775),Bt=p(38210);class Ke extends dt{constructor(l,d){super(),this.data=l,this.type=4,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new kt.Z,this.params=d||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=Ke.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const l=this.data;(0,M.Wi)(l)||(l instanceof HTMLVideoElement?this.startPreloadVideoElement(l):l instanceof HTMLImageElement&&this.startPreloadImageElement(l))}startPreloadVideoElement(l){(0,he.jc)(l.src)||"auto"===l.preload&&l.crossOrigin||(l.preload="auto",l.crossOrigin="anonymous",l.src=l.src)}startPreloadImageElement(l){(0,he.HK)(l.src)||(0,he.jc)(l.src)||l.crossOrigin||(l.crossOrigin="anonymous",l.src=l.src)}static getDataDimensions(l){return l instanceof HTMLVideoElement?{width:l.videoWidth,height:l.videoHeight}:l}static estimateTexMemRequired(l,d){if((0,M.Wi)(l))return 0;if((0,Y.eP)(l)||(0,Y.lq)(l))return d.encoding===Ke.KTX2_ENCODING?function me(_,l){if((0,M.Wi)(F))return _.byteLength;const d=new F.KTX2File(new Uint8Array(_)),v=Se(d)?Me(d.getLevels(),d.getHasAlpha(),d.getWidth(),d.getHeight(),l):0;return d.close(),d.delete(),v}(l,d.mipmap):d.encoding===Ke.BASIS_ENCODING?function ne(_,l){if((0,M.Wi)(F))return _.byteLength;const d=new F.BasisFile(new Uint8Array(_)),v=Te(d)?Me(d.getNumLevels(0),d.getHasAlpha(),d.getImageWidth(0,0),d.getImageHeight(0,0),l):0;return d.close(),d.delete(),v}(l,d.mipmap):l.byteLength;const{width:v,height:x}=l instanceof Image||l instanceof ImageData||l instanceof HTMLCanvasElement||l instanceof HTMLVideoElement?Ke.getDataDimensions(l):d;return(d.mipmap?4/3:1)*v*x*(d.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(l){var d;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(d=this.params.maxAnisotropy)?d:this.params.mipmap?l.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(l,d){if((0,M.pC)(this._glTexture))return this._glTexture;if((0,M.pC)(this._loadingPromise))return this._loadingPromise;const v=this.data;return(0,M.Wi)(v)?(this._glTexture=new He.Z(l,this.createDescriptor(l),null),this._glTexture):"string"==typeof v?this.loadFromURL(l,d,v):v instanceof Image?this.loadFromImageElement(l,d,v):v instanceof HTMLVideoElement?this.loadFromVideoElement(l,d,v):v instanceof ImageData||v instanceof HTMLCanvasElement?this.loadFromImage(l,v,d):((0,Y.eP)(v)||(0,Y.lq)(v))&&this.params.encoding===Ke.DDS_ENCODING?this.loadFromDDSData(l,v):((0,Y.eP)(v)||(0,Y.lq)(v))&&this.params.encoding===Ke.KTX2_ENCODING?this.loadFromKTX2(l,v):((0,Y.eP)(v)||(0,Y.lq)(v))&&this.params.encoding===Ke.BASIS_ENCODING?this.loadFromBasis(l,v):(0,Y.lq)(v)?this.loadFromPixelData(l,v):(0,Y.eP)(v)?this.loadFromPixelData(l,new Uint8Array(v)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(l,d,v){if(!(this.data instanceof HTMLVideoElement)||(0,M.Wi)(this._glTexture)||this.data.readyState<2||v===this.data.currentTime)return v;if((0,M.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:x,vao:y,sourceTexture:E}=this._powerOfTwoStretchInfo;E.setData(this.data),this.drawStretchedTexture(l,d,x,y,E,this._glTexture)}else{const{width:x,height:y}=this.data,{width:E,height:D}=this._glTexture.descriptor;x!==E||y!==D?this._glTexture.updateData(0,0,0,Math.min(x,E),Math.min(y,D),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(l,d){return this._glTexture=function pt(_,l,d){const{textureData:v,internalFormat:x,width:y,height:E}=function Mt(_,l){const d=new Int32Array(_,0,31);if(542327876!==d[0])return ie.error("Invalid magic number in DDS header"),null;if(!(4&d[20]))return ie.error("Unsupported format, must contain a FourCC code"),null;const v=d[21];let x,y;switch(v){case $e:x=8,y=33776;break;case Je:x=16,y=33778;break;case rt:x=16,y=33779;break;default:return ie.error("Unsupported FourCC code:",function Ee(_){return String.fromCharCode(255&_,_>>8&255,_>>16&255,_>>24&255)}(v)),null}let E=1,D=d[4],L=d[3];0==(3&D)&&0==(3&L)||(ie.warn("Rounding up compressed texture size to nearest multiple of 4."),D=D+3&-4,L=L+3&-4);const w=D,$=L;let le,ee;131072&d[2]&&!1!==l&&(E=Math.max(1,d[7])),1===E||(0,z.wt)(D)&&(0,z.wt)(L)||(ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),E=1);let ve=d[1]+4;const Q=[];for(let Pe=0;Pe<E;++Pe)ee=(D+3>>2)*(L+3>>2)*x,le=new Uint8Array(_,ve,ee),Q.push(le),ve+=ee,D=Math.max(1,D>>1),L=Math.max(1,L>>1);return{textureData:{type:"compressed",levels:Q},internalFormat:y,width:w,height:$}}(d,l.hasMipmap);return l.samplingMode=v.levels.length>1?9987:9729,l.hasMipmap=v.levels.length>1,l.internalFormat=x,l.width=y,l.height=E,new He.Z(_,l,v)}(l,this.createDescriptor(l),d),this._glTexture}loadFromKTX2(l,d){return this.loadAsync(()=>function H(_,l,d){return G.apply(this,arguments)}(l,this.createDescriptor(l),d).then(v=>(this._glTexture=v,v)))}loadFromBasis(l,d){return this.loadAsync(()=>function Qe(_,l,d){return U.apply(this,arguments)}(l,this.createDescriptor(l),d).then(v=>(this._glTexture=v,v)))}loadFromPixelData(l,d){(0,Be.hu)(this.params.width>0&&this.params.height>0);const v=this.createDescriptor(l);return v.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,v.width=this.params.width,v.height=this.params.height,this._glTexture=new He.Z(l,v,d),this._glTexture}loadFromURL(l,d,v){var x=this;return this.loadAsync(function(){var y=(0,C.Z)(function*(E){const D=yield(0,ft.t)(v,{signal:E});return x.loadFromImage(l,D,d)});return function(E){return y.apply(this,arguments)}}())}loadFromImageElement(l,d,v){var x=this;return v.complete?this.loadFromImage(l,v,d):this.loadAsync(function(){var y=(0,C.Z)(function*(E){const D=yield(0,Ce.f)(v,v.src,!1,E);return x.loadFromImage(l,D,d)});return function(E){return y.apply(this,arguments)}}())}loadFromVideoElement(l,d,v){return v.readyState>=2?this.loadFromImage(l,v,d):this.loadFromVideoElementAsync(l,d,v)}loadFromVideoElementAsync(l,d,v){return this.loadAsync(x=>new Promise((y,E)=>{const D=()=>{v.removeEventListener("loadeddata",L),v.removeEventListener("error",w),(0,M.hw)($)},L=()=>{v.readyState>=2&&(D(),y(this.loadFromImage(l,v,d)))},w=le=>{D(),E(le||new We.Z("Failed to load video"))};v.addEventListener("loadeddata",L),v.addEventListener("error",w);const $=(0,Ge.fu)(x,()=>w((0,Ge.zE)()))}))}loadFromImage(l,d,v){const x=Ke.getDataDimensions(d);this.params.width=x.width,this.params.height=x.height;const y=this.createDescriptor(l);return y.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(l,y)||(0,z.wt)(x.width)&&(0,z.wt)(x.height)?(y.width=x.width,y.height=x.height,this._glTexture=new He.Z(l,y,d),this._glTexture):(this._glTexture=this.makePowerOfTwoTexture(l,d,x,y,v),this._glTexture)}loadAsync(l){const d=new AbortController;this._loadingController=d;const v=l(d.signal);this._loadingPromise=v;const x=()=>{this._loadingController===d&&(this._loadingController=null),this._loadingPromise===v&&(this._loadingPromise=null)};return v.then(x,x),v}requiresPowerOfTwo(l,d){const x="number"==typeof d.wrapMode?33071===d.wrapMode:33071===d.wrapMode.s&&33071===d.wrapMode.t;return!(0,Bt.Z)(l.gl)&&(d.hasMipmap||!x)}makePowerOfTwoTexture(l,d,v,x,y){const{width:E,height:D}=v,L=(0,z.Sf)(E),w=(0,z.Sf)(D);let $;switch(x.width=L,x.height=w,this.params.powerOfTwoResizeMode){case 2:x.textureCoordinateScaleFactor=[E/L,D/w],$=new He.Z(l,x),$.updateData(0,0,0,E,D,d);break;case 1:case null:case void 0:$=this.stretchToPowerOfTwo(l,d,x,y());break;default:(0,zt.Bg)(this.params.powerOfTwoResizeMode)}return x.hasMipmap&&$.generateMipmap(),$}stretchToPowerOfTwo(l,d,v,x){const y=new He.Z(l,v),E=new Tt.Z(l,{colorTarget:0,depthStencilTarget:0},y),D=new He.Z(l,{target:3553,pixelFormat:v.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!v.flipped,maxAnisotropy:8,preMultiplyAlpha:v.preMultiplyAlpha},d),L=function At(_,l=Rt,d=_t,v=-1,x=1){let y=null;return y=l===Ot?new Float32Array([v,v,0,0,x,v,1,0,v,x,0,1,x,x,1,1]):new Float32Array([v,v,x,v,v,x,x,x]),new Dt.Z(_,d,{geometry:l},{geometry:wt.Z.createVertex(_,35044,y)})}(l),w=l.getBoundFramebufferObject();return this.drawStretchedTexture(l,x,E,L,D,y),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:L,sourceTexture:D,framebuffer:E}:(L.dispose(!0),D.dispose(),E.detachColorTexture(),E.dispose()),l.bindFramebuffer(w),y}drawStretchedTexture(l,d,v,x,y,E){l.bindFramebuffer(v);const D=l.getViewport();l.setViewport(0,0,E.descriptor.width,E.descriptor.height);const L=d.program;l.useProgram(L),L.setUniform4f("color",1,1,1,1),L.bindTexture(y,"tex"),l.bindVAO(x),d.bindPipelineState(l),l.drawArrays(5,0,(0,ke._V)(x,"geometry")),l.bindFramebuffer(null),l.setViewport(D.x,D.y,D.width,D.height)}unload(){if((0,M.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:l,vao:d,sourceTexture:v}=this._powerOfTwoStretchInfo;d.dispose(!0),v.dispose(),l.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,M.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,M.pC)(this._loadingController)){const l=this._loadingController;this._loadingController=null,this._loadingPromise=null,l.abort()}this.events.emit("unloaded")}}Ke.DDS_ENCODING="image/vnd-ms.dds",Ke.KTX2_ENCODING="image/ktx2",Ke.BASIS_ENCODING="image/x.basis";var Ct=p(19625),Lt=p(93609),xt=p(50229);class Ht extends dt{constructor(l,d){super(),this.type=3,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=_t,this._parameters=(0,xt.Uf)(l,d),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(l){return!1}setParameters(l){(0,xt.LO)(this._parameters,l)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(l){}get visible(){return this._visible}set visible(l){l!==this._visible&&(this._visible=l,this.parametersChanged())}shouldRender(l){return this.isVisible()&&this.isVisibleInPass(l.pass)&&0!=(this.renderOccluded&l.renderOccludedMask)}isVisibleInPass(l){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(l){l!==this._renderPriority&&(this._renderPriority=l,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(l){l!==this._insertOrder&&(this._insertOrder=l,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,M.pC)(this.repository)&&this.repository.materialChanged(this)}}var qt=p(88569),Xr=p(48977),kr=p(78451),Yr=p(14658),ir=p(4794),Qr=(p(8314),p(993)),Jr=(p(85931),p(97535)),Kt=p(26242);new Jr.x(function ri(){return{origin:null,direction:null}}),(0,P.c)(),(0,P.c)();const ai=Ie.Z.getLogger("esri.geometry.support.sphere");function hr(){return(0,ir.c)()}function yr(_,l=hr()){return(0,Qr.c)(l,_)}function mr(_){return Array.isArray(_)?_[3]:_}function $t(_){return Array.isArray(_)?_:xi}function ar(_,l,d){if((0,M.Wi)(l))return!1;const{origin:v,direction:x}=l,y=mi;y[0]=v[0]-_[0],y[1]=v[1]-_[1],y[2]=v[2]-_[2];const E=x[0]*x[0]+x[1]*x[1]+x[2]*x[2],D=2*(x[0]*y[0]+x[1]*y[1]+x[2]*y[2]),L=D*D-4*E*(y[0]*y[0]+y[1]*y[1]+y[2]*y[2]-_[3]*_[3]);if(L<0)return!1;const w=Math.sqrt(L);let $=(-D-w)/(2*E);const le=(-D+w)/(2*E);return($<0||le<$&&le>0)&&($=le),!($<0||(d&&(d[0]=v[0]+x[0]*$,d[1]=v[1]+x[1]*$,d[2]=v[2]+x[2]*$),0))}const mi=(0,P.c)();function Cr(_,l,d){const v=Kt.WM.get(),x=Kt.MP.get();(0,S.c)(v,l.origin,l.direction);const y=mr(_);(0,S.c)(d,v,l.origin),(0,S.a)(d,d,1/(0,S.l)(d)*y);const E=Er(_,l.origin),D=function oi(_,l){const d=(0,S.d)(_,l)/((0,S.l)(_)*(0,S.l)(l));return-(0,z.ZF)(d)}(l.origin,d);return(0,I.i)(x),(0,I.e)(x,x,D+E,v),(0,S.m)(d,d,x),d}function Sr(_,l,d){const v=(0,S.f)(Kt.WM.get(),l,$t(_)),x=(0,S.a)(Kt.WM.get(),v,_[3]/(0,S.l)(v));return(0,S.b)(d,x,$t(_))}function Er(_,l){const d=(0,S.f)(Kt.WM.get(),l,$t(_)),v=(0,S.l)(d),x=mr(_),y=x+Math.abs(x-v);return(0,z.ZF)(x/y)}const fr=(0,P.c)();function Pr(_,l,d,v){const x=(0,S.f)(fr,l,$t(_));switch(d){case 0:{const y=(0,z.jE)(x,fr)[2];return(0,S.s)(v,-Math.sin(y),Math.cos(y),0)}case 1:{const y=(0,z.jE)(x,fr),E=y[1],D=y[2],L=Math.sin(E);return(0,S.s)(v,-L*Math.cos(D),-L*Math.sin(D),Math.cos(E))}case 2:return(0,S.n)(v,x);default:return}}function Or(_,l){const d=(0,S.f)(vr,l,$t(_));return(0,S.l)(d)-_[3]}const xi=(0,P.c)(),vr=(0,P.c)();Object.freeze({__proto__:null,create:hr,copy:yr,fromCenterAndRadius:function ni(_,l){return(0,ir.f)(_[0],_[1],_[2],l)},wrap:function si(_){return _},clear:function li(_){_[0]=_[1]=_[2]=_[3]=0},fromRadius:function ci(_){return _},getRadius:mr,getCenter:$t,fromValues:function di(_,l,d,v){return(0,ir.f)(_,l,d,v)},elevate:function ui(_,l,d){return _!==d&&(0,S.g)(d,_),d[3]=_[3]+l,d},setExtent:function hi(_,l,d){return ai.error("sphere.setExtent is not yet supported"),_===d?d:yr(_,d)},intersectRay:ar,intersectsRay:function fi(_,l){return ar(_,l,null)},intersectRayClosestSilhouette:function vi(_,l,d){if(ar(_,l,d))return d;const v=Cr(_,l,Kt.WM.get());return(0,S.b)(d,l.origin,(0,S.a)(Kt.WM.get(),l.direction,(0,S.i)(l.origin,v)/(0,S.l)(l.direction))),d},closestPointOnSilhouette:Cr,closestPoint:function pi(_,l,d){return ar(_,l,d)?d:(function ti(_,l,d){const v=(0,S.d)(_.direction,(0,S.f)(d,l,_.origin));(0,S.b)(d,_.origin,(0,S.a)(d,_.direction,v))}(l,$t(_),d),Sr(_,d,d))},projectPoint:Sr,distanceToSilhouette:function gi(_,l){const d=(0,S.f)(Kt.WM.get(),l,$t(_)),v=(0,S.p)(d);return Math.sqrt(Math.abs(v-_[3]*_[3]))},angleToSilhouette:Er,axisAt:Pr,altitudeAt:Or,setAltitudeAt:function _i(_,l,d,v){const x=Or(_,l),y=Pr(_,l,2,vr),E=(0,S.a)(vr,y,d-x);return(0,S.b)(v,l,E)}});const wr=new class Ti{constructor(l=0){this.offset=l,this.sphere=hr(),this.tmpVertex=(0,P.c)()}applyToVertex(l,d,v){const x=this.objectTransform.transform;let y=x[0]*l+x[4]*d+x[8]*v+x[12],E=x[1]*l+x[5]*d+x[9]*v+x[13],D=x[2]*l+x[6]*d+x[10]*v+x[14];const L=this.offset/Math.sqrt(y*y+E*E+D*D);y+=y*L,E+=E*L,D+=D*L;const w=this.objectTransform.inverse;return this.tmpVertex[0]=w[0]*y+w[4]*E+w[8]*D+w[12],this.tmpVertex[1]=w[1]*y+w[5]*E+w[9]*D+w[13],this.tmpVertex[2]=w[2]*y+w[6]*E+w[10]*D+w[14],this.tmpVertex}applyToMinMax(l,d){const v=this.offset/Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]);l[0]+=l[0]*v,l[1]+=l[1]*v,l[2]+=l[2]*v;const x=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);d[0]+=d[0]*x,d[1]+=d[1]*x,d[2]+=d[2]*x}applyToAabb(l){const d=this.offset/Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]);l[0]+=l[0]*d,l[1]+=l[1]*d,l[2]+=l[2]*d;const v=this.offset/Math.sqrt(l[3]*l[3]+l[4]*l[4]+l[5]*l[5]);return l[3]+=l[3]*v,l[4]+=l[4]*v,l[5]+=l[5]*v,l}applyToBoundingSphere(l){const d=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),v=this.offset/d;return this.sphere[0]=l[0]+l[0]*v,this.sphere[1]=l[1]+l[1]*v,this.sphere[2]=l[2]+l[2]*v,this.sphere[3]=l[3]+l[3]*this.offset/d,this.sphere}};new class Mi{constructor(l=0){this.offset=l,this.componentLocalOriginLength=0,this.tmpVertex=(0,P.c)(),this.mbs=(0,ir.c)(),this.obb={center:(0,P.c)(),halfSize:(0,Yr.c)(),quaternion:null}}set localOrigin(l){this.componentLocalOriginLength=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2])}applyToVertex(l,d,v){const x=l,y=d,E=v+this.componentLocalOriginLength,D=this.offset/Math.sqrt(x*x+y*y+E*E);return this.tmpVertex[0]=l+x*D,this.tmpVertex[1]=d+y*D,this.tmpVertex[2]=v+E*D,this.tmpVertex}applyToAabb(l){const d=l[0],v=l[1],x=l[2]+this.componentLocalOriginLength,y=l[3],E=l[4],D=l[5]+this.componentLocalOriginLength,L=this.offset/Math.sqrt(d*d+v*v+x*x);l[0]+=d*L,l[1]+=v*L,l[2]+=x*L;const w=this.offset/Math.sqrt(y*y+E*E+D*D);return l[3]+=y*w,l[4]+=E*w,l[5]+=D*w,l}applyToMbs(l){const d=Math.sqrt(l[0]*l[0]+l[1]*l[1]+l[2]*l[2]),v=this.offset/d;return this.mbs[0]=l[0]+l[0]*v,this.mbs[1]=l[1]+l[1]*v,this.mbs[2]=l[2]+l[2]*v,this.mbs[3]=l[3]+l[3]*this.offset/d,this.mbs}applyToObb(l){const d=l.center,v=this.offset/Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.obb.center[0]=d[0]+d[0]*v,this.obb.center[1]=d[1]+d[1]*v,this.obb.center[2]=d[2]+d[2]*v,(0,S.q)(this.obb.halfSize,l.halfSize,l.quaternion),(0,S.b)(this.obb.halfSize,this.obb.halfSize,l.center);const x=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*x,this.obb.halfSize[1]+=this.obb.halfSize[1]*x,this.obb.halfSize[2]+=this.obb.halfSize[2]*x,(0,S.f)(this.obb.halfSize,this.obb.halfSize,l.center),(0,Xr.c)(Lr,l.quaternion),(0,S.q)(this.obb.halfSize,this.obb.halfSize,Lr),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=l.quaternion,this.obb}},new class bi{constructor(l=0){this.offset=l,this.tmpVertex=(0,P.c)()}applyToVertex(l,d,v){const x=l+this.localOrigin[0],y=d+this.localOrigin[1],E=v+this.localOrigin[2],D=this.offset/Math.sqrt(x*x+y*y+E*E);return this.tmpVertex[0]=l+x*D,this.tmpVertex[1]=d+y*D,this.tmpVertex[2]=v+E*D,this.tmpVertex}applyToAabb(l){const d=l[0]+this.localOrigin[0],v=l[1]+this.localOrigin[1],x=l[2]+this.localOrigin[2],y=l[3]+this.localOrigin[0],E=l[4]+this.localOrigin[1],D=l[5]+this.localOrigin[2],L=this.offset/Math.sqrt(d*d+v*v+x*x);l[0]+=d*L,l[1]+=v*L,l[2]+=x*L;const w=this.offset/Math.sqrt(y*y+E*E+D*D);return l[3]+=y*w,l[4]+=E*w,l[5]+=D*w,l}};const Lr=(0,kr.a)();function Ci(_,l,d,v){const x=d.typedBuffer,y=d.typedBufferStride,E=_.length;v*=y;for(let D=0;D<E;++D){const L=2*_[D];x[v]=l[L],x[v+1]=l[L+1],v+=y}}function Ir(_,l,d,v,x){const y=d.typedBuffer,E=d.typedBufferStride,D=_.length;if(v*=E,null==x||1===x)for(let L=0;L<D;++L){const w=3*_[L];y[v]=l[w],y[v+1]=l[w+1],y[v+2]=l[w+2],v+=E}else for(let L=0;L<D;++L){const w=3*_[L];for(let $=0;$<x;++$)y[v]=l[w],y[v+1]=l[w+1],y[v+2]=l[w+2],v+=E}}function Ei(_,l,d,v,x,y=1){if(!d)return void Ir(_,l,v,x,y);const E=v.typedBuffer,D=v.typedBufferStride,L=_.length,w=d[0],$=d[1],le=d[2],ee=d[4],ve=d[5],Q=d[6],Pe=d[8],we=d[9],Fe=d[10],mt=d[12],qe=d[13],et=d[14];if(x*=D,1===y)for(let ot=0;ot<L;++ot){const ze=3*_[ot],Re=l[ze],Ne=l[ze+1],ce=l[ze+2];E[x]=w*Re+ee*Ne+Pe*ce+mt,E[x+1]=$*Re+ve*Ne+we*ce+qe,E[x+2]=le*Re+Q*Ne+Fe*ce+et,x+=D}else for(let ot=0;ot<L;++ot){const ze=3*_[ot],Re=l[ze],Ne=l[ze+1],ce=l[ze+2],Le=w*Re+ee*Ne+Pe*ce+mt,Ze=$*Re+ve*Ne+we*ce+qe,Xe=le*Re+Q*Ne+Fe*ce+et;for(let je=0;je<y;++je)E[x]=Le,E[x+1]=Ze,E[x+2]=Xe,x+=D}}function Pi(_,l,d,v,x,y=1){if(!d)return void Ir(_,l,v,x,y);const D=v.typedBuffer,L=v.typedBufferStride,w=_.length,$=d[0],le=d[1],ee=d[2],ve=d[4],Q=d[5],Pe=d[6],we=d[8],Fe=d[9],mt=d[10],qe=!(0,I.k)(d);if(x*=L,1===y)for(let ze=0;ze<w;++ze){const Re=3*_[ze],Ne=l[Re],ce=l[Re+1],Le=l[Re+2];let Ze=$*Ne+ve*ce+we*Le,Xe=le*Ne+Q*ce+Fe*Le,je=ee*Ne+Pe*ce+mt*Le;if(qe){const at=Ze*Ze+Xe*Xe+je*je;if(at<.999999&&at>1e-6){const tt=1/Math.sqrt(at);Ze*=tt,Xe*=tt,je*=tt}}D[x+0]=Ze,D[x+1]=Xe,D[x+2]=je,x+=L}else for(let ze=0;ze<w;++ze){const Re=3*_[ze],Ne=l[Re],ce=l[Re+1],Le=l[Re+2];let Ze=$*Ne+ve*ce+we*Le,Xe=le*Ne+Q*ce+Fe*Le,je=ee*Ne+Pe*ce+mt*Le;if(qe){const at=Ze*Ze+Xe*Xe+je*je;if(at<.999999&&at>1e-6){const tt=1/Math.sqrt(at);Ze*=tt,Xe*=tt,je*=tt}}for(let at=0;at<y;++at)D[x+0]=Ze,D[x+1]=Xe,D[x+2]=je,x+=L}}function Oi(_,l,d,v,x,y=1){if(!d)return void function Si(_,l,d,v,x=1){const y=d.typedBuffer,E=d.typedBufferStride,D=_.length;if(v*=E,1===x)for(let L=0;L<D;++L){const w=4*_[L];y[v]=l[w],y[v+1]=l[w+1],y[v+2]=l[w+2],y[v+3]=l[w+3],v+=E}else for(let L=0;L<D;++L){const w=4*_[L];for(let $=0;$<x;++$)y[v]=l[w],y[v+1]=l[w+1],y[v+2]=l[w+2],y[v+3]=l[w+3],v+=E}}(_,l,v,x,y);const D=v.typedBuffer,L=v.typedBufferStride,w=_.length,$=d[0],le=d[1],ee=d[2],ve=d[4],Q=d[5],Pe=d[6],we=d[8],Fe=d[9],mt=d[10],qe=!(0,I.k)(d);if(x*=L,1===y)for(let ze=0;ze<w;++ze){const Re=4*_[ze],Ne=l[Re],ce=l[Re+1],Le=l[Re+2],Ze=l[Re+3];let Xe=$*Ne+ve*ce+we*Le,je=le*Ne+Q*ce+Fe*Le,at=ee*Ne+Pe*ce+mt*Le;if(qe){const tt=Xe*Xe+je*je+at*at;if(tt<.999999&&tt>1e-6){const nt=1/Math.sqrt(tt);Xe*=nt,je*=nt,at*=nt}}D[x+0]=Xe,D[x+1]=je,D[x+2]=at,D[x+3]=Ze,x+=L}else for(let ze=0;ze<w;++ze){const Re=4*_[ze],Ne=l[Re],ce=l[Re+1],Le=l[Re+2],Ze=l[Re+3];let Xe=$*Ne+ve*ce+we*Le,je=le*Ne+Q*ce+Fe*Le,at=ee*Ne+Pe*ce+mt*Le;if(qe){const tt=Xe*Xe+je*je+at*at;if(tt<.999999&&tt>1e-6){const nt=1/Math.sqrt(tt);Xe*=nt,je*=nt,at*=nt}}for(let tt=0;tt<y;++tt)D[x+0]=Xe,D[x+1]=je,D[x+2]=at,D[x+3]=Ze,x+=L}}function Rr(_,l,d,v,x,y=1){const E=v.typedBuffer,D=v.typedBufferStride,L=_.length;if(x*=D,1===y){if(4===d)for(let w=0;w<L;++w){const $=4*_[w];E[x]=l[$],E[x+1]=l[$+1],E[x+2]=l[$+2],E[x+3]=l[$+3],x+=D}else if(3===d)for(let w=0;w<L;++w){const $=3*_[w];E[x]=l[$],E[x+1]=l[$+1],E[x+2]=l[$+2],E[x+3]=255,x+=D}}else if(4===d)for(let w=0;w<L;++w){const $=4*_[w];for(let le=0;le<y;++le)E[x]=l[$],E[x+1]=l[$+1],E[x+2]=l[$+2],E[x+3]=l[$+3],x+=D}else if(3===d)for(let w=0;w<L;++w){const $=3*_[w];for(let le=0;le<y;++le)E[x]=l[$],E[x+1]=l[$+1],E[x+2]=l[$+2],E[x+3]=255,x+=D}}var De=p(17626),Di=p(78925),Ai=p(60355),Li=p(52071),Ii=p(62952),Ri=p(10109),Fi=p(92724),Ui=p(8507),zi=p(92836),Fr=p(7228);const zr=(0,p(55494).c)();class Br{constructor(l,d){this._module=l,this._loadModule=d}get(){return this._module}reload(){var l=this;return(0,C.Z)(function*(){return l._module=yield l._loadModule(),l._module})()}}function Ae(_={}){return(l,d)=>{var v,x;l._parameterNames=null!=(v=l._parameterNames)?v:[],l._parameterNames.push(d);const y=l._parameterNames.length-1,D=Math.ceil(Math.log2(_.count||2)),L=null!=(x=l._parameterBits)?x:[0];let w=0;for(;L[w]+D>16;)w++,w>=L.length&&L.push(0);l._parameterBits=L;const $=L[w],le=(1<<D)-1<<$;L[w]+=D,Object.defineProperty(l,d,{get(){return this[y]},set(ee){if(this[y]!==ee&&(this[y]=ee,this._keyDirty=!0,this._parameterBits[w]=this._parameterBits[w]&~le|+ee<<$&le,"number"!=typeof ee&&"boolean"!=typeof ee))throw"Configuration value for "+d+" must be boolean or number, got "+typeof ee}})}}var Gi=p(81653),ji=p(92118);class Hr extends ji.${constructor(l,d,v){super(l,d.generateSource("vertex"),d.generateSource("fragment"),v),this._textures=new Map,this._freeTextureUnits=new lt.Z({deallocator:null}),this._fragmentUniforms=(0,Gi.hZ)()?d.fragmentUniforms.entries:null}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(l,d){if((0,M.Wi)(l)||null==l.glName){const x=this._textures.get(d);return x&&(this._context.bindTexture(null,x.unit),this._freeTextureUnit(x),this._textures.delete(d)),null}let v=this._textures.get(d);return null==v?(v=this._allocTextureUnit(l),this._textures.set(d,v)):v.texture=l,this._context.useProgram(this),this.setUniform1i(d,v.unit),this._context.bindTexture(l,v.unit),v.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((l,d)=>{this._context.bindTexture(l.texture,l.unit),this.setUniform1i(d,l.unit)}),(0,M.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach(l=>{if(("sampler2D"===l.type||"samplerCube"===l.type)&&!this._textures.has(l.name))throw new Error(`Texture sampler ${l.name} has no bound texture`)})}_allocTextureUnit(l){return{texture:l,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(l){this._freeTextureUnits.push(l.unit)}}const Ki={mask:255},$i={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},Zi={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}};var Xi=p(96160),sr=p(2078);class er extends class Wi{constructor(l,d,v=(()=>this.dispose())){this.release=v,d&&(this._config=d.snapshot()),this._program=this.initializeProgram(l),this._pipeline=this.initializePipeline(l)}dispose(){this._program=(0,M.O3)(this._program),this._pipeline=this._config=null}reload(l){(0,M.O3)(this._program),this._program=this.initializeProgram(l)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(l,d){}bindMaterial(l,d){}bindDraw(l){}bindPipelineState(l,d=null,v){l.setPipelineState(this.getPipelineState(d,v))}ensureAttributeLocations(l){this.program.assertCompatibleVertexAttributeLocations(l)}get primitiveType(){return 4}getPipelineState(l,d){return this._pipeline}}{initializeProgram(l){const d=er.shader.get(),v=this.configuration,x=d.build({OITEnabled:0===v.transparencyPassType,output:v.output,viewingMode:l.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?v.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:v.hasMetalnessAndRoughnessTexture,hasEmissionTexture:v.hasEmissionTexture,hasOcclusionTexture:v.hasOcclusionTexture,hasNormalTexture:v.hasNormalTexture,hasColorTexture:v.hasColorTexture,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:v.normalsTypeDerivate?3:0,doubleSidedMode:v.doubleSidedMode,vertexTangents:v.vertexTangents,attributeTextureCoordinates:v.hasMetalnessAndRoughnessTexture||v.hasEmissionTexture||v.hasOcclusionTexture||v.hasNormalTexture||v.hasColorTexture?1:0,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Fr.I)(l.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new Hr(l.rctx,x,_t)}bindPass(l,d){var v,x;!function Ni(_,l){_.setUniformMatrix4fv("proj",l)}(this.program,d.camera.projectionMatrix);const y=this.configuration.output;(1===this.configuration.output||d.multipassTerrainEnabled||3===y)&&this.program.setUniform2fv("cameraNearFar",d.camera.nearFar),d.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",d.inverseViewport),(0,Ri.p)(this.program,d)),7===y&&(this.program.setUniform1f("opacity",l.opacity),this.program.setUniform1f("layerOpacity",l.layerOpacity),this.program.setUniform4fv("externalColor",l.externalColor),this.program.setUniform1i("colorMixMode",xt.FZ[l.colorMixMode])),0===y?(d.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",l.ambient),this.program.setUniform3fv("diffuse",l.diffuse),this.program.setUniform4fv("externalColor",l.externalColor),this.program.setUniform1i("colorMixMode",xt.FZ[l.colorMixMode]),this.program.setUniform1f("opacity",l.opacity),this.program.setUniform1f("layerOpacity",l.layerOpacity),this.configuration.usePBR&&(0,Fi.nW)(this.program,l,this.configuration.isSchematic)):4===y&&(0,Ii.wW)(this.program,d),(0,zi.uj)(this.program,l),(0,Li.Mo)(this.program,l,d),(0,xt.bj)(l.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==l.textureAlphaMode&&3!==l.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",l.textureAlphaCutoff),null==(v=d.shadowMap)||v.bind(this.program),null==(x=d.ssaoHelper)||x.bind(this.program,d.camera)}bindDraw(l){const d=this.configuration.instancedDoublePrecision?(0,P.f)(l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]):l.origin;(function Ur(_,l,d){(0,I.a)(zr,d,l),_.setUniform3fv("localOrigin",l),_.setUniformMatrix4fv("view",zr)})(this.program,d,l.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&function Hi(_,l,d){_.setUniform3f("camPos",d[3]-l[0],d[7]-l[1],d[11]-l[2])}(this.program,d,l.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",l.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&Ai.f.bindCustomOrigin(this.program,d),(0,Di.Vv)(this.program,this.configuration,l.slicePlane,d),0===this.configuration.output&&(0,Ui.vL)(this.program,l,d)}setPipeline(l,d){const v=this.configuration,x=3===l,y=2===l;return(0,sr.sm)({blending:0!==v.output&&7!==v.output||!v.transparent?null:x?qt.wu:(0,qt.$L)(l),culling:(_=v,(_.cullFace?0!==_.cullFace:!_.slicePlaneEnabled&&!_.transparent&&!_.doubleSidedMode)&&(0,sr.zp)(v.cullFace)),depthTest:{func:(0,qt.$x)(l)},depthWrite:x||y?v.writeDepth&&sr.LZ:null,colorWrite:sr.BK,stencilWrite:v.sceneHasOcludees?Ki:null,stencilTest:v.sceneHasOcludees?d?Zi:$i:null,polygonOffset:x||y?null:(0,qt.je)(v.enableOffset)});var _}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(l,d){return d?this._occludeePipelineState:super.getPipelineState(l,d)}}er.shader=new Br(Xi.D,()=>p.e(3907).then(p.bind(p,83907)));class Oe extends class Vi{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const l=this._parameterNames,d={key:this.key};for(const v of l)d[v]=this[v];return d}}{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}(0,De._)([Ae({count:8})],Oe.prototype,"output",void 0),(0,De._)([Ae({count:4})],Oe.prototype,"alphaDiscardMode",void 0),(0,De._)([Ae({count:3})],Oe.prototype,"doubleSidedMode",void 0),(0,De._)([Ae()],Oe.prototype,"isSchematic",void 0),(0,De._)([Ae()],Oe.prototype,"vertexColors",void 0),(0,De._)([Ae()],Oe.prototype,"offsetBackfaces",void 0),(0,De._)([Ae()],Oe.prototype,"symbolColors",void 0),(0,De._)([Ae()],Oe.prototype,"vvSize",void 0),(0,De._)([Ae()],Oe.prototype,"vvColor",void 0),(0,De._)([Ae()],Oe.prototype,"verticalOffset",void 0),(0,De._)([Ae()],Oe.prototype,"receiveShadows",void 0),(0,De._)([Ae()],Oe.prototype,"slicePlaneEnabled",void 0),(0,De._)([Ae()],Oe.prototype,"sliceHighlightDisabled",void 0),(0,De._)([Ae()],Oe.prototype,"receiveAmbientOcclusion",void 0),(0,De._)([Ae()],Oe.prototype,"screenSizePerspective",void 0),(0,De._)([Ae()],Oe.prototype,"textureAlphaPremultiplied",void 0),(0,De._)([Ae()],Oe.prototype,"hasColorTexture",void 0),(0,De._)([Ae()],Oe.prototype,"usePBR",void 0),(0,De._)([Ae()],Oe.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,De._)([Ae()],Oe.prototype,"hasEmissionTexture",void 0),(0,De._)([Ae()],Oe.prototype,"hasOcclusionTexture",void 0),(0,De._)([Ae()],Oe.prototype,"hasNormalTexture",void 0),(0,De._)([Ae()],Oe.prototype,"instanced",void 0),(0,De._)([Ae()],Oe.prototype,"instancedColor",void 0),(0,De._)([Ae()],Oe.prototype,"instancedDoublePrecision",void 0),(0,De._)([Ae()],Oe.prototype,"vertexTangents",void 0),(0,De._)([Ae()],Oe.prototype,"normalsTypeDerivate",void 0),(0,De._)([Ae()],Oe.prototype,"writeDepth",void 0),(0,De._)([Ae()],Oe.prototype,"sceneHasOcludees",void 0),(0,De._)([Ae()],Oe.prototype,"transparent",void 0),(0,De._)([Ae()],Oe.prototype,"enableOffset",void 0),(0,De._)([Ae({count:3})],Oe.prototype,"cullFace",void 0),(0,De._)([Ae({count:4})],Oe.prototype,"transparencyPassType",void 0),(0,De._)([Ae()],Oe.prototype,"multipassTerrainEnabled",void 0),(0,De._)([Ae()],Oe.prototype,"cullAboveGround",void 0);var Yi=p(77133);class lr extends er{initializeProgram(l){const d=lr.shader.get(),v=this.configuration,x=d.build({OITEnabled:0===v.transparencyPassType,output:v.output,viewingMode:l.viewingMode,receiveShadows:v.receiveShadows,slicePlaneEnabled:v.slicePlaneEnabled,sliceHighlightDisabled:v.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:v.symbolColors,vvSize:v.vvSize,vvColor:v.vvColor,vvInstancingEnabled:!0,instanced:v.instanced,instancedColor:v.instancedColor,instancedDoublePrecision:v.instancedDoublePrecision,pbrMode:v.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:v.hasColorTexture,receiveAmbientOcclusion:v.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:v.hasColorTexture?1:0,textureAlphaPremultiplied:v.textureAlphaPremultiplied,attributeColor:v.vertexColors,screenSizePerspectiveEnabled:v.screenSizePerspective,verticalOffsetEnabled:v.verticalOffset,offsetBackfaces:v.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,Fr.I)(l.rctx),alphaDiscardMode:v.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:v.multipassTerrainEnabled,cullAboveGround:v.cullAboveGround});return new Hr(l.rctx,x,_t)}}lr.shader=new Br(Yi.R,()=>p.e(6919).then(p.bind(p,96919)));class Nr extends Ht{constructor(l){super(l,Ji),this.supportsEdges=!0,this.techniqueConfig=new Oe,this.vertexBufferLayout=function eo(_){const l=_.textureId||_.normalTextureId||_.metallicRoughnessTextureId||_.emissiveTextureId||_.occlusionTextureId,d=(0,Ct.U$)().vec3f("position").vec3f("normal");return _.vertexTangents&&d.vec4f("tangent"),l&&d.vec2f("uv0"),_.vertexColors&&d.vec4u8("color"),_.symbolColors&&d.vec4u8("symbolColor"),d}(this.parameters),this.instanceBufferLayout=l.instanced?function to(_){let l=(0,Ct.U$)();return l=_.instancedDoublePrecision?l.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):l.mat4f("model").mat4f("modelNormal"),_.instanced&&_.instanced.indexOf("color")>-1&&(l=l.vec4f("instanceColor")),_.instanced&&_.instanced.indexOf("featureAttribute")>-1&&(l=l.vec4f("instanceFeatureAttribute")),l}(this.parameters):null}isVisibleInPass(l){return 4!==l&&6!==l&&7!==l||this.parameters.castShadows}isVisible(){const l=this.parameters;if(!super.isVisible()||0===l.layerOpacity)return!1;const d=l.instanced,v=l.vertexColors,x=l.symbolColors,y=!!d&&d.indexOf("color")>-1,E=l.vvColorEnabled,D="replace"===l.colorMixMode,L=l.opacity>0,w=l.externalColor&&l.externalColor[3]>0;return v&&(y||E||x)?!!D||L:v?D?w:L:y||E||x?!!D||L:D?w:L}getTechniqueConfig(l,d){return this.techniqueConfig.output=l,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=d.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=d.cullAboveGround,0!==l&&7!==l||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.techniqueConfig.doubleSidedMode=this.parameters.treeRendering?2:this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!d.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=d.transparencyPassType,this.techniqueConfig.enableOffset=d.camera.relativeElevation<qt.ve),this.techniqueConfig}intersect(l,d,v,x,y,E,D){if(null!==this.parameters.verticalOffset){const L=x.camera;(0,S.s)(gr,v[12],v[13],v[14]);let w=null;switch(x.viewingMode){case 1:w=(0,S.n)(Wr,gr);break;case 2:w=(0,S.g)(Wr,oo)}let $=0;if(null!==this.parameters.verticalOffset){const le=(0,S.f)(ao,gr,L.eye),ee=(0,S.l)(le),ve=(0,S.a)(le,le,1/ee);let Q=null;this.parameters.screenSizePerspective&&(Q=(0,S.d)(w,ve)),$+=(0,xt.Hx)(L,ee,this.parameters.verticalOffset,Q,this.parameters.screenSizePerspective)}(0,S.a)(w,w,$),(0,S.t)(pr,w,x.transform.inverseRotation),y=(0,S.f)(ro,y,pr),E=(0,S.f)(io,E,pr)}(0,xt.Bw)(l,d,x,y,E,function yi(_){return(0,M.pC)(_)?(wr.offset=_,wr):null}(x.verticalOffset),D)}requiresSlot(l){return l===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===l}createGLMaterial(l){return 0===l.output||7===l.output||1===l.output||2===l.output||3===l.output||4===l.output?new Qi(l):null}createBufferWriter(){return new qi(this.vertexBufferLayout,this.instanceBufferLayout)}}class Qi extends class Xt extends class Zt{constructor(l){this._material=l.material,this._techniqueRep=l.techniqueRep,this._output=l.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(l,d,v=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(l,this._material.getTechniqueConfig(v,d),this._technique),this._technique}ensureResources(l){return 2}}{constructor(l){super(l),this._numLoading=0,this._disposed=!1,this._textureRepository=l.textureRep,this._textureId=l.textureId,this._acquire(l.textureId).then(d=>this._texture=d),this._acquire(l.normalTextureId).then(d=>this._textureNormal=d),this._acquire(l.emissiveTextureId).then(d=>this._textureEmissive=d),this._acquire(l.occlusionTextureId).then(d=>this._textureOcclusion=d),this._acquire(l.metallicRoughnessTextureId).then(d=>this._textureMetallicRoughness=d)}dispose(){this._texture=(0,M.RY)(this._texture),this._textureNormal=(0,M.RY)(this._textureNormal),this._textureEmissive=(0,M.RY)(this._textureEmissive),this._textureOcclusion=(0,M.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,M.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(l){return 0===this._numLoading?2:1}updateTexture(l){((0,M.Wi)(this._texture)||l!==this._texture.id)&&(this._texture=(0,M.RY)(this._texture),this._textureId=l,this._acquire(this._textureId).then(d=>this._texture=d))}bindTextures(l){(0,M.pC)(this._texture)&&l.bindTexture(this._texture.glTexture,"tex"),(0,M.pC)(this._textureNormal)&&l.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,M.pC)(this._textureEmissive)&&l.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,M.pC)(this._textureOcclusion)&&l.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,M.pC)(this._textureMetallicRoughness)&&l.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(l){const d=(0,M.pC)(this._texture)?this._texture.glTexture:null;(0,M.pC)(d)&&d.descriptor.textureCoordinateScaleFactor?l.setUniform2fv("textureCoordinateScaleFactor",d.descriptor.textureCoordinateScaleFactor):l.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(l){return(0,M.Wi)(l)?Promise.resolve(null):(++this._numLoading,this._textureRepository.acquire(l).then(d=>this._disposed?((0,M.RY)(d),null):d).finally(()=>--this._numLoading))}}{constructor(l){super(It(It({},l),l.material.parameters))}updateParameters(l){const d=this._material.parameters;return this.updateTexture(d.textureId),this.ensureTechnique(d.treeRendering?lr:er,l)}_updateShadowState(l){l.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:l.shadowMappingEnabled})}_updateOccludeeState(l){l.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:l.hasOccludees})}beginSlot(l){return 0!==this._output&&7!==this._output||(this._updateShadowState(l),this._updateOccludeeState(l)),this.updateParameters(l)}bind(l,d){d.bindPass(this._material.parameters,l),this.bindTextures(d.program)}}const Ji=It({textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,R.c)(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:Lt.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},{renderOccluded:1});class qi{constructor(l,d){this.vertexBufferLayout=l,this.instanceBufferLayout=d}allocate(l){return this.vertexBufferLayout.createBuffer(l)}elementCount(l){return l.indices.get("position").length}write(l,d,v,x){!function wi(_,l,d,v,x,y){for(const E of l.fieldNames){const D=_.vertexAttributes.get(E),L=_.indices.get(E);if(D&&L)switch(E){case"position":{(0,Be.hu)(3===D.size);const w=x.getField(E,T.ct);w&&Ei(L,D.data,d,w,y);break}case"normal":{(0,Be.hu)(3===D.size);const w=x.getField(E,T.ct);w&&Pi(L,D.data,v,w,y);break}case"uv0":{(0,Be.hu)(2===D.size);const w=x.getField(E,T.Eu);w&&Ci(L,D.data,w,y);break}case"color":{(0,Be.hu)(3===D.size||4===D.size);const w=x.getField(E,T.mc);w&&Rr(L,D.data,D.size,w,y);break}case"symbolColor":{(0,Be.hu)(3===D.size||4===D.size);const w=x.getField(E,T.mc);w&&Rr(L,D.data,D.size,w,y);break}case"tangent":{(0,Be.hu)(4===D.size);const w=x.getField(E,T.ek);w&&Oi(L,D.data,v,w,y);break}}}}(d,this.vertexBufferLayout,l.transformation,l.invTranspTransformation,v,x)}}const ro=(0,P.c)(),io=(0,P.c)(),oo=(0,P.f)(0,0,1),Wr=(0,P.c)(),pr=(0,P.c)(),gr=(0,P.c)(),ao=(0,P.c)(),Nt=Ie.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function no(_,l){return _r.apply(this,arguments)}function _r(){return(_r=(0,C.Z)(function*(_,l){const d=yield so(_,l);return{resource:d,textures:yield mo(d.textureDefinitions,l)}})).apply(this,arguments)}function so(_,l){return xr.apply(this,arguments)}function xr(){return(xr=(0,C.Z)(function*(_,l){const d=(0,M.pC)(l)&&l.streamDataRequester;if(d)return lo(_,d,l);const v=yield(0,xe.q6)((0,oe.default)(_,(0,M.Wg)(l)));if(!0===v.ok)return v.value.data;(0,Ge.r9)(v.error),Vr(v.error)})).apply(this,arguments)}function lo(_,l,d){return br.apply(this,arguments)}function br(){return(br=(0,C.Z)(function*(_,l,d){const v=yield(0,xe.q6)(l.request(_,"json",d));if(!0===v.ok)return v.value;(0,Ge.r9)(v.error),Vr(v.error.details.url)})).apply(this,arguments)}function Vr(_){throw new We.Z("",`Request for object resource failed: ${_}`)}function co(_){const l=_.params,d=l.topology;let v=!0;switch(l.vertexAttributes||(Nt.warn("Geometry must specify vertex attributes"),v=!1),l.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const y=l.faces;if(y){if(l.vertexAttributes)for(const E in l.vertexAttributes){const D=y[E];D&&D.values?(null!=D.valueType&&"UInt32"!==D.valueType&&(Nt.warn(`Unsupported indexed geometry indices type '${D.valueType}', only UInt32 is currently supported`),v=!1),null!=D.valuesPerElement&&1!==D.valuesPerElement&&(Nt.warn(`Unsupported indexed geometry values per element '${D.valuesPerElement}', only 1 is currently supported`),v=!1)):(Nt.warn(`Indexed geometry does not specify face indices for '${E}' attribute`),v=!1)}}else Nt.warn("Indexed geometries must specify faces"),v=!1;break}default:Nt.warn(`Unsupported topology '${d}'`),v=!1}_.params.material||(Nt.warn("Geometry requires material"),v=!1);const x=_.params.vertexAttributes;for(const y in x)x[y].values||(Nt.warn("Geometries with externally defined attributes are not yet supported"),v=!1);return v}function uo(_,l){const d=[],v=[],x=[],y=[],E=_.resource,D=ye.G.parse(E.version||"1.0","wosr");vo.validate(D);const L=E.model.name,w=E.model.geometries,$=E.materialDefinitions,le=_.textures;let ee=0;const ve=new Map;for(let Q=0;Q<w.length;Q++){const Pe=w[Q];if(!co(Pe))continue;const we=fo(Pe),Fe=Pe.params.vertexAttributes,mt=[];for(const ce in Fe){const Le=Fe[ce];mt.push([ce,{data:Le.values,size:Le.valuesPerElement,exclusive:!0}])}const qe=[];if("PerAttributeArray"!==Pe.params.topology){const ce=Pe.params.faces;for(const Le in ce)qe.push([Le,new Uint32Array(ce[Le].values)])}const et=le&&le[we.texture];if(et&&!ve.has(we.texture)){const{image:ce,params:Le}=et,Ze=new Ke(ce,Le);y.push(Ze),ve.set(we.texture,Ze)}const ot=ve.get(we.texture),ze=ot?ot.id:void 0;let Re=x[we.material]?x[we.material][we.texture]:null;if(!Re){const ce=$[we.material.substring(we.material.lastIndexOf("/")+1)].params;1===ce.transparency&&(ce.transparency=0);const Le=et&&et.alphaChannelUsage,Ze=ce.transparency>0||"transparency"===Le||"maskAndTransparency"===Le,Xe=et?Gr(et.alphaChannelUsage):void 0,je={ambient:(0,P.d)(ce.diffuse),diffuse:(0,P.d)(ce.diffuse),opacity:1-(ce.transparency||0),transparent:Ze,textureAlphaMode:Xe,textureAlphaCutoff:.33,textureId:ze,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:ce.externalColorMixMode||"tint",textureAlphaPremultiplied:!!et&&!!et.params.preMultiplyAlpha};(0,M.pC)(l)&&l.materialParamsMixin&&Object.assign(je,l.materialParamsMixin),Re=new Nr(je),x[we.material]||(x[we.material]={}),x[we.material][we.texture]=Re}v.push(Re);const Ne=new ue(mt,qe);ee+=qe.position?qe.position.length:0,d.push(Ne)}return{name:L,stageResources:{textures:y,materials:v,geometries:d},pivotOffset:E.model.pivotOffset,boundingBox:ho(d),numberOfVertices:ee,lodThreshold:null}}function ho(_){const l=(0,b.cS)();return _.forEach(d=>{const v=d.boundingInfo;(0,M.pC)(v)&&((0,b.pp)(l,v.getBBMin()),(0,b.pp)(l,v.getBBMax()))}),l}function mo(_,l){return Mr.apply(this,arguments)}function Mr(){return(Mr=(0,C.Z)(function*(_,l){const d=[];for(const y in _){const E=_[y],D=E.images[0].data;if(!D){Nt.warn("Externally referenced texture data is not yet supported");continue}const L=E.encoding+";base64,"+D,w="/textureDefinitions/"+y,$="rgba"===E.channels?E.alphaChannelUsage||"transparency":"none",le={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==Gr($)},ee=(0,M.pC)(l)&&l.disableTextures?Promise.resolve(null):(0,ft.t)(L,l);d.push(ee.then(ve=>({refId:w,image:ve,params:le,alphaChannelUsage:$})))}const v=yield Promise.all(d),x={};for(const y of v)x[y.refId]=y;return x})).apply(this,arguments)}function Gr(_){switch(_){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function fo(_){const l=_.params;return{id:1,material:l.material,texture:l.texture,region:l.texture}}const vo=new ye.G(1,2,"wosr");var Jt=p(79331),po=p(35995),jr=p(63470),go=p(9554);function _o(_,l){return Tr.apply(this,arguments)}function Tr(){return(Tr=(0,C.Z)(function*(_,l){const d=Kr((0,B.pJ)(_));if("wosr"===d.fileType){const L=yield l.cache?l.cache.loadWOSR(d.url,l):no(d.url,l),w=uo(L,l);return{lods:[w],referenceBoundingBox:w.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:L.remove}}const v=yield l.cache?l.cache.loadGLTF(d.url,l,l.usePBR):(0,J.z)(new X.C(l.streamDataRequester),d.url,l,l.usePBR),x=(0,M.U2)(v.model.meta,"ESRI_proxyEllipsoid");v.meta.isEsriSymbolResource&&(0,M.pC)(x)&&-1!==v.meta.uri.indexOf("/RealisticTrees/")&&Mo(v,x);const y=v.meta.isEsriSymbolResource?{usePBR:l.usePBR,isSchematic:!1,treeRendering:v.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:l.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},E=tr(It({},l.materialParamsMixin),{treeRendering:v.customMeta.esriTreeRendering});if(null!=d.specifiedLodIndex){const L=cr(v,y,E,d.specifiedLodIndex);let w=L[0].boundingBox;return 0!==d.specifiedLodIndex&&(w=cr(v,y,E,0)[0].boundingBox),{lods:L,referenceBoundingBox:w,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}}const D=cr(v,y,E);return{lods:D,referenceBoundingBox:D[0].boundingBox,isEsriSymbolResource:v.meta.isEsriSymbolResource,isWosr:!1,remove:v.remove}})).apply(this,arguments)}function Kr(_){const l=_.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return l?{fileType:"gltf",url:l[1],specifiedLodIndex:null!=l[4]?Number(l[4]):null}:_.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:_,specifiedLodIndex:null}:{fileType:"unknown",url:_,specifiedLodIndex:null}}function cr(_,l,d,v){const x=_.model,y=(0,R.c)(),E=new Array,D=new Map,L=new Map;return x.lods.forEach((w,$)=>{if(void 0!==v&&$!==v)return;const le={name:w.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,M.pC)(w.lodThreshold)?w.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,b.cS)()};E.push(le),w.parts.forEach(ee=>{const ve=ee.material+(ee.attributes.normal?"_normal":"")+(ee.attributes.color?"_color":"")+(ee.attributes.texCoord0?"_texCoord0":"")+(ee.attributes.tangent?"_tangent":""),Q=x.materials.get(ee.material),Pe=(0,M.pC)(ee.attributes.texCoord0),we=(0,M.pC)(ee.attributes.normal),Fe=function xo(_){switch(_){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}(Q.alphaMode);if(!D.has(ve)){if(Pe){if((0,M.pC)(Q.textureColor)&&!L.has(Q.textureColor)){const nt=x.textures.get(Q.textureColor),To=tr(It({},nt.parameters),{preMultiplyAlpha:1!==Fe});L.set(Q.textureColor,new Ke(nt.data,To))}if((0,M.pC)(Q.textureNormal)&&!L.has(Q.textureNormal)){const nt=x.textures.get(Q.textureNormal);L.set(Q.textureNormal,new Ke(nt.data,nt.parameters))}if((0,M.pC)(Q.textureOcclusion)&&!L.has(Q.textureOcclusion)){const nt=x.textures.get(Q.textureOcclusion);L.set(Q.textureOcclusion,new Ke(nt.data,nt.parameters))}if((0,M.pC)(Q.textureEmissive)&&!L.has(Q.textureEmissive)){const nt=x.textures.get(Q.textureEmissive);L.set(Q.textureEmissive,new Ke(nt.data,nt.parameters))}if((0,M.pC)(Q.textureMetallicRoughness)&&!L.has(Q.textureMetallicRoughness)){const nt=x.textures.get(Q.textureMetallicRoughness);L.set(Q.textureMetallicRoughness,new Ke(nt.data,nt.parameters))}}const ce=Q.color[0]**(1/Jt.K),Le=Q.color[1]**(1/Jt.K),Ze=Q.color[2]**(1/Jt.K),Xe=Q.emissiveFactor[0]**(1/Jt.K),je=Q.emissiveFactor[1]**(1/Jt.K),at=Q.emissiveFactor[2]**(1/Jt.K),tt=(0,M.pC)(Q.textureColor)&&Pe?L.get(Q.textureColor):null;D.set(ve,new Nr(It(tr(It({},l),{transparent:0===Fe,textureAlphaMode:Fe,textureAlphaCutoff:Q.alphaCutoff,diffuse:[ce,Le,Ze],ambient:[ce,Le,Ze],opacity:Q.opacity,doubleSided:Q.doubleSided,doubleSidedType:"winding-order",cullFace:Q.doubleSided?0:2,vertexColors:!!ee.attributes.color,vertexTangents:!!ee.attributes.tangent,normals:we?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,M.pC)(tt)?tt.id:void 0,colorMixMode:Q.colorMixMode,normalTextureId:(0,M.pC)(Q.textureNormal)&&Pe?L.get(Q.textureNormal).id:void 0,textureAlphaPremultiplied:(0,M.pC)(tt)&&!!tt.params.preMultiplyAlpha,occlusionTextureId:(0,M.pC)(Q.textureOcclusion)&&Pe?L.get(Q.textureOcclusion).id:void 0,emissiveTextureId:(0,M.pC)(Q.textureEmissive)&&Pe?L.get(Q.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,M.pC)(Q.textureMetallicRoughness)&&Pe?L.get(Q.textureMetallicRoughness).id:void 0,emissiveFactor:[Xe,je,at],mrrFactors:[Q.metallicFactor,Q.roughnessFactor,l.mrrFactors[2]],isSchematic:!1}),d)))}const mt=function bo(_,l){switch(l){case 4:return(0,k.nh)(_);case 5:return(0,k.DA)(_);case 6:return(0,k.jX)(_)}}(ee.indices||ee.attributes.position.count,ee.primitiveType),qe=ee.attributes.position.count,et=(0,W.gS)(T.ct,qe);(0,N.t)(et,ee.attributes.position,ee.transform);const ot=[["position",{data:et.typedBuffer,size:et.elementCount,exclusive:!0}]],ze=[["position",mt]];if((0,M.pC)(ee.attributes.normal)){const ce=(0,W.gS)(T.ct,qe);(0,A.a)(y,ee.transform),(0,N.a)(ce,ee.attributes.normal,y),ot.push(["normal",{data:ce.typedBuffer,size:ce.elementCount,exclusive:!0}]),ze.push(["normal",mt])}if((0,M.pC)(ee.attributes.tangent)){const ce=(0,W.gS)(T.ek,qe);(0,A.a)(y,ee.transform),(0,Z.t)(ce,ee.attributes.tangent,y),ot.push(["tangent",{data:ce.typedBuffer,size:ce.elementCount,exclusive:!0}]),ze.push(["tangent",mt])}if((0,M.pC)(ee.attributes.texCoord0)){const ce=(0,W.gS)(T.Eu,qe);(0,po.n)(ce,ee.attributes.texCoord0),ot.push(["uv0",{data:ce.typedBuffer,size:ce.elementCount,exclusive:!0}]),ze.push(["uv0",mt])}if((0,M.pC)(ee.attributes.color)){const ce=(0,W.gS)(T.mc,qe);if(4===ee.attributes.color.elementCount)ee.attributes.color instanceof T.ek?(0,Z.s)(ce,ee.attributes.color,255):ee.attributes.color instanceof T.mc?(0,jr.c)(ce,ee.attributes.color):ee.attributes.color instanceof T.v6&&(0,Z.s)(ce,ee.attributes.color,1/256);else{(0,jr.f)(ce,255,255,255,255);const Le=new T.ne(ce.buffer,0,4);ee.attributes.color instanceof T.ct?(0,N.s)(Le,ee.attributes.color,255):ee.attributes.color instanceof T.ne?(0,go.c)(Le,ee.attributes.color):ee.attributes.color instanceof T.mw&&(0,N.s)(Le,ee.attributes.color,1/256)}ot.push(["color",{data:ce.typedBuffer,size:ce.elementCount,exclusive:!0}]),ze.push(["color",mt])}const Re=new ue(ot,ze);le.stageResources.geometries.push(Re),le.stageResources.materials.push(D.get(ve)),Pe&&((0,M.pC)(Q.textureColor)&&le.stageResources.textures.push(L.get(Q.textureColor)),(0,M.pC)(Q.textureNormal)&&le.stageResources.textures.push(L.get(Q.textureNormal)),(0,M.pC)(Q.textureOcclusion)&&le.stageResources.textures.push(L.get(Q.textureOcclusion)),(0,M.pC)(Q.textureEmissive)&&le.stageResources.textures.push(L.get(Q.textureEmissive)),(0,M.pC)(Q.textureMetallicRoughness)&&le.stageResources.textures.push(L.get(Q.textureMetallicRoughness))),le.numberOfVertices+=qe;const Ne=Re.boundingInfo;(0,M.pC)(Ne)&&((0,b.pp)(le.boundingBox,Ne.getBBMin()),(0,b.pp)(le.boundingBox,Ne.getBBMax()))})}),E}function Mo(_,l){for(let d=0;d<_.model.lods.length;++d){const v=_.model.lods[d];_.customMeta.esriTreeRendering=!0;for(const x of v.parts){const y=x.attributes.normal;if((0,M.Wi)(y))return;const E=x.attributes.position,D=E.count,L=(0,P.c)(),w=(0,P.c)(),$=(0,P.c)(),le=(0,W.gS)(T.mc,D),ee=(0,W.gS)(T.ct,D),ve=(0,I.b)((0,O.c)(),x.transform);for(let Q=0;Q<D;Q++){E.getVec(Q,w),y.getVec(Q,L),(0,S.m)(w,w,x.transform),(0,S.f)($,w,l.center),(0,S.E)($,$,l.radius);const Pe=$[2],we=(0,S.l)($),Fe=Math.min(.45+.55*we*we,1);(0,S.E)($,$,l.radius),(0,S.m)($,$,ve),(0,S.n)($,$),d+1!==_.model.lods.length&&_.model.lods.length>1&&(0,S.e)($,$,L,Pe>-1?.2:Math.min(-4*Pe-3.8,1)),ee.setVec(Q,$),le.set(Q,0,255*Fe),le.set(Q,1,255*Fe),le.set(Q,2,255*Fe),le.set(Q,3,255)}x.attributes.normal=ee,x.attributes.color=le}}}},52382:(de,V,p)=>{p.d(V,{q:()=>B});var C=p(17625);function B(M,A){0===A.output&&A.receiveShadows?(M.varyings.add("linearDepth","float"),M.vertex.code.add(C.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):1===A.output||3===A.output?(M.varyings.add("linearDepth","float"),M.vertex.uniforms.add("cameraNearFar","vec2"),M.vertex.code.add(C.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
}`)):M.vertex.code.add(C.H`void forwardLinearDepth() {}`)}},73132:(de,V,p)=>{p.d(V,{w:()=>B});var C=p(17625);function B(M){M.vertex.code.add(C.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},78925:(de,V,p)=>{p.d(V,{p2:()=>R,Vv:()=>O});var C=p(62208),B=p(84161),M=p(28093),A=p(17625);function R(P,b){if(b.slicePlaneEnabled){P.extensions.add("GL_OES_standard_derivatives"),b.sliceEnabledForVertexPrograms&&(P.vertex.uniforms.add("slicePlaneOrigin","vec3"),P.vertex.uniforms.add("slicePlaneBasis1","vec3"),P.vertex.uniforms.add("slicePlaneBasis2","vec3")),P.fragment.uniforms.add("slicePlaneOrigin","vec3"),P.fragment.uniforms.add("slicePlaneBasis1","vec3"),P.fragment.uniforms.add("slicePlaneBasis2","vec3");const T=A.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,N=A.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
if (sliceByFactors(factors)) {
return color;
}
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,Z=b.sliceHighlightDisabled?A.H`#define highlightSlice(_color_, _pos_) (_color_)`:A.H`
        ${N}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;b.sliceEnabledForVertexPrograms&&P.vertex.code.add(T),P.fragment.code.add(T),P.fragment.code.add(Z)}else{const T=A.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;b.sliceEnabledForVertexPrograms&&P.vertex.code.add(T),P.fragment.code.add(T)}}function O(P,b,T,N){b.slicePlaneEnabled&&((0,C.pC)(T)?(N?((0,B.f)(S,T.origin,N),P.setUniform3fv("slicePlaneOrigin",S)):P.setUniform3fv("slicePlaneOrigin",T.origin),P.setUniform3fv("slicePlaneBasis1",T.basis1),P.setUniform3fv("slicePlaneBasis2",T.basis2)):(P.setUniform3fv("slicePlaneBasis1",M.Z),P.setUniform3fv("slicePlaneBasis2",M.Z),P.setUniform3fv("slicePlaneOrigin",M.Z)))}const S=(0,M.c)()},24255:(de,V,p)=>{p.d(V,{w:()=>B});var C=p(17625);function B(M,A){M.vertex.code.add(A.linearDepth?C.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`:C.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},60355:(de,V,p)=>{p.d(V,{f:()=>R});var S,C=p(28093),B=p(7228),M=p(17625),A=p(2757);function R(S,P){P.instanced&&P.instancedDoublePrecision&&(S.attributes.add("modelOriginHi","vec3"),S.attributes.add("modelOriginLo","vec3"),S.attributes.add("model","mat3"),S.attributes.add("modelNormal","mat3")),P.instancedDoublePrecision&&(S.vertex.include(B.$,P),S.vertex.uniforms.add("viewOriginHi","vec3"),S.vertex.uniforms.add("viewOriginLo","vec3"));const b=[M.H`
    vec3 calculateVPos() {
      ${P.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,M.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${P.instancedDoublePrecision?M.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,M.H`
    vec3 dpNormal(vec4 _normal) {
      ${P.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,M.H`
    vec3 dpNormalView(vec4 _normal) {
      ${P.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,P.vertexTangents?M.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${P.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:M.H``];S.vertex.code.add(b[0]),S.vertex.code.add(b[1]),S.vertex.code.add(b[2]),2===P.output&&S.vertex.code.add(b[3]),S.vertex.code.add(b[4])}(S=R||(R={})).Uniforms=class P{},S.bindCustomOrigin=function b(T,N){(0,A.po)(N,I,O,3),T.setUniform3fv("viewOriginHi",I),T.setUniform3fv("viewOriginLo",O)};const I=(0,C.c)(),O=(0,C.c)()},26859:(de,V,p)=>{p.d(V,{O:()=>M});var C=p(17625);function B(A){const R=C.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;A.fragment.code.add(R),A.vertex.code.add(R)}function M(A,R){0===R.normalType&&(A.attributes.add("normal","vec3"),A.vertex.code.add(C.H`vec3 normalModel() {
return normal;
}`)),1===R.normalType&&(A.include(B),A.attributes.add("normalCompressed","vec2"),A.vertex.code.add(C.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===R.normalType&&(A.extensions.add("GL_OES_standard_derivatives"),A.fragment.code.add(C.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},84833:(de,V,p)=>{p.d(V,{f:()=>B});var C=p(17625);function B(M){M.attributes.add("position","vec3"),M.vertex.code.add(C.H`vec3 positionModel() { return position; }`)}},72326:(de,V,p)=>{p.d(V,{R:()=>M});var C=p(17625);function B(A){A.vertex.code.add(C.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${C.H.int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${C.H.int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${C.H.int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${C.H.int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function M(A,R){R.symbolColor?(A.include(B),A.attributes.add("symbolColor","vec4"),A.varyings.add("colorMixMode","mediump float")):A.fragment.uniforms.add("colorMixMode","int"),A.vertex.code.add(R.symbolColor?C.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`:C.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},36603:(de,V,p)=>{p.d(V,{D:()=>B});var C=p(17625);function B(M,A){1===A.attributeTextureCoordinates&&(M.attributes.add("uv0","vec2"),M.varyings.add("vuv0","vec2"),M.vertex.code.add(C.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===A.attributeTextureCoordinates&&(M.attributes.add("uv0","vec2"),M.varyings.add("vuv0","vec2"),M.attributes.add("uvRegion","vec4"),M.varyings.add("vuvRegion","vec4"),M.vertex.code.add(C.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===A.attributeTextureCoordinates&&M.vertex.code.add(C.H`void forwardTextureCoordinates() {}`)}},58173:(de,V,p)=>{p.d(V,{c:()=>B});var C=p(17625);function B(M,A){A.attributeColor?(M.attributes.add("color","vec4"),M.varyings.add("vColor","vec4"),M.vertex.code.add(C.H`void forwardVertexColor() { vColor = color; }`),M.vertex.code.add(C.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):M.vertex.code.add(C.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},85305:(de,V,p)=>{p.d(V,{B:()=>P});var b,C=p(26859),B=p(550),M=p(43703),A=p(28093),R=p(84833),I=p(7228),O=p(17625);function S(b,T){b.include(R.f),b.vertex.include(I.$,T),b.varyings.add("vPositionWorldCameraRelative","vec3"),b.varyings.add("vPosition_view","vec3"),b.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),b.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),b.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),b.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),b.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),b.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),b.vertex.uniforms.add("uTransform_ProjFromView","mat4"),b.vertex.code.add(O.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),b.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),b.fragment.code.add(O.H`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}function P(b,T){0===T.normalType||1===T.normalType?(b.include(C.O,T),b.varyings.add("vNormalWorld","vec3"),b.varyings.add("vNormalView","vec3"),b.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),b.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),b.vertex.code.add(O.H`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===T.normalType?(b.include(S,T),b.varyings.add("vNormalWorld","vec3"),b.vertex.code.add(O.H`
    void forwardNormal() {
      vNormalWorld = ${1===T.viewingMode?O.H`normalize(vPositionWorldCameraRelative);`:O.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):b.vertex.code.add(O.H`void forwardNormal() {}`)}(b=S||(S={})).ModelTransform=class T{constructor(){this.worldFromModel_RS=(0,B.c)(),this.worldFromModel_TH=(0,A.c)(),this.worldFromModel_TL=(0,A.c)()}},b.ViewProjectionTransform=class N{constructor(){this.worldFromView_TH=(0,A.c)(),this.worldFromView_TL=(0,A.c)(),this.viewFromCameraRelative_RS=(0,B.c)(),this.projFromView=(0,M.c)()}},b.bindModelTransform=function Z(X,J){X.setUniformMatrix3fv("uTransform_WorldFromModel_RS",J.worldFromModel_RS),X.setUniform3fv("uTransform_WorldFromModel_TH",J.worldFromModel_TH),X.setUniform3fv("uTransform_WorldFromModel_TL",J.worldFromModel_TL)},b.bindViewProjTransform=function W(X,J){X.setUniform3fv("uTransform_WorldFromView_TH",J.worldFromView_TH),X.setUniform3fv("uTransform_WorldFromView_TL",J.worldFromView_TL),X.setUniformMatrix4fv("uTransform_ProjFromView",J.projFromView),X.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",J.viewFromCameraRelative_RS)},(P||(P={})).bindUniforms=function T(N,Z){N.setUniformMatrix4fv("viewNormal",Z)}},85982:(de,V,p)=>{p.d(V,{i:()=>A});var C=p(36603),B=p(17625);function M(R){R.extensions.add("GL_EXT_shader_texture_lod"),R.extensions.add("GL_OES_standard_derivatives"),R.fragment.code.add(B.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function A(R,I){R.include(C.D,I),R.fragment.code.add(B.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${I.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===I.attributeTextureCoordinates&&R.fragment.code.add(B.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===I.attributeTextureCoordinates&&(R.include(M),R.fragment.code.add(B.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},52071:(de,V,p)=>{p.d(V,{LC:()=>R,Mo:()=>I});var C=p(17625);function M(P){P.vertex.code.add(C.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),P.vertex.code.add(C.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),P.vertex.code.add(C.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),P.vertex.code.add(C.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),P.vertex.code.add(C.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),P.vertex.code.add(C.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}`),P.vertex.code.add(C.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function R(P,b){const T=P.vertex.code;b.verticalOffsetEnabled?(P.vertex.uniforms.add("verticalOffset","vec4"),b.screenSizePerspectiveEnabled&&(P.include(M),P.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),T.add(C.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===b.viewingMode?C.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:C.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${b.screenSizePerspectiveEnabled?C.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:C.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):T.add(C.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function I(P,b,T){if(!b.verticalOffset)return;const N=function O(P,b,T,N=S){return N.screenLength=P.screenLength,N.perDistance=Math.tan(.5*b)/(.5*T),N.minWorldLength=P.minWorldLength,N.maxWorldLength=P.maxWorldLength,N}(b.verticalOffset,T.camera.fovY,T.camera.fullViewport[3]);P.setUniform4f("verticalOffset",N.screenLength*(T.camera.pixelRatio||1),N.perDistance,N.minWorldLength,N.maxWorldLength)}p(50229);const S={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},5105:(de,V,p)=>{p.d(V,{s:()=>N});var C=p(78925),B=p(24255),M=p(26859),A=p(36603),R=p(85305),I=p(19278),O=p(17625);function S(Z,W){Z.fragment.include(I.n),3===W.output?(Z.extensions.add("GL_OES_standard_derivatives"),Z.fragment.code.add(O.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===W.output&&Z.fragment.code.add(O.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var P=p(62952),b=p(92836),T=p(93609);function N(Z,W){const X=Z.vertex.code,J=Z.fragment.code;1!==W.output&&3!==W.output||(Z.include(B.w,{linearDepth:!0}),Z.include(A.D,W),Z.include(b.kl,W),Z.include(S,W),Z.include(C.p2,W),Z.vertex.uniforms.add("cameraNearFar","vec2"),Z.varyings.add("depth","float"),W.hasColorTexture&&Z.fragment.uniforms.add("tex","sampler2D"),X.add(O.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),Z.include(T.sj,W),J.add(O.H`
      void main(void) {
        discardBySlice(vpos);
        ${W.hasColorTexture?O.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===W.output&&(Z.include(B.w,{linearDepth:!1}),Z.include(M.O,W),Z.include(R.B,W),Z.include(A.D,W),Z.include(b.kl,W),W.hasColorTexture&&Z.fragment.uniforms.add("tex","sampler2D"),Z.vertex.uniforms.add("viewNormal","mat4"),Z.varyings.add("vPositionView","vec3"),X.add(O.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===W.normalType?O.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),Z.include(C.p2,W),Z.include(T.sj,W),J.add(O.H`
      void main() {
        discardBySlice(vpos);
        ${W.hasColorTexture?O.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===W.normalType?O.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:O.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===W.output&&(Z.include(B.w,{linearDepth:!1}),Z.include(A.D,W),Z.include(b.kl,W),W.hasColorTexture&&Z.fragment.uniforms.add("tex","sampler2D"),X.add(O.H`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),Z.include(C.p2,W),Z.include(T.sj,W),Z.include(P.bA),J.add(O.H`
      void main() {
        discardBySlice(vpos);
        ${W.hasColorTexture?O.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},62952:(de,V,p)=>{p.d(V,{bA:()=>R,wW:()=>I});var C=p(4794),B=p(17625);const M=(0,C.f)(1,1,0,1),A=(0,C.f)(1,0,1,1);function R(O){O.fragment.uniforms.add("depthTex","sampler2D"),O.fragment.uniforms.add("highlightViewportPixelSz","vec4"),O.fragment.constants.add("occludedHighlightFlag","vec4",M).add("unoccludedHighlightFlag","vec4",A),O.fragment.code.add(B.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function I(O,S){O.bindTexture(S.highlightDepthTexture,"depthTex"),O.setUniform4f("highlightViewportPixelSz",0,0,S.inverseViewport[0],S.inverseViewport[1])}},47923:(de,V,p)=>{p.d(V,{S:()=>M});var C=p(19278),B=p(17625);function M(A){A.include(C.n),A.code.add(B.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},29052:(de,V,p)=>{p.d(V,{Q:()=>M});var C=p(85982),B=p(17625);function M(A,R){const I=A.fragment;R.vertexTangents?(A.attributes.add("tangent","vec4"),A.varyings.add("vTangent","vec4"),I.code.add(2===R.doubleSidedMode?B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:B.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(A.extensions.add("GL_OES_standard_derivatives"),I.code.add(B.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==R.attributeTextureCoordinates&&(A.include(C.i,R),I.uniforms.add("normalTexture","sampler2D"),I.uniforms.add("normalTextureSize","vec2"),I.code.add(B.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${R.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},54662:(de,V,p)=>{p.d(V,{K:()=>B});var C=p(17625);function B(M,A){const R=M.fragment;A.receiveAmbientOcclusion?(R.uniforms.add("ssaoTex","sampler2D"),R.uniforms.add("viewportPixelSz","vec4"),R.code.add(C.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):R.code.add(C.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},22792:(de,V,p)=>{p.d(V,{X:()=>S});var C=p(17625);function B(P,b){const T=P.fragment,N=void 0!==b.lightingSphericalHarmonicsOrder?b.lightingSphericalHarmonicsOrder:2;0===N?(T.uniforms.add("lightingAmbientSH0","vec3"),T.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===N?(T.uniforms.add("lightingAmbientSH_R","vec4"),T.uniforms.add("lightingAmbientSH_G","vec4"),T.uniforms.add("lightingAmbientSH_B","vec4"),T.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===N&&(T.uniforms.add("lightingAmbientSH0","vec3"),T.uniforms.add("lightingAmbientSH_R1","vec4"),T.uniforms.add("lightingAmbientSH_G1","vec4"),T.uniforms.add("lightingAmbientSH_B1","vec4"),T.uniforms.add("lightingAmbientSH_R2","vec4"),T.uniforms.add("lightingAmbientSH_G2","vec4"),T.uniforms.add("lightingAmbientSH_B2","vec4"),T.code.add(C.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==b.pbrMode&&2!==b.pbrMode||T.code.add(C.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var M=p(54662);function A(P){const b=P.fragment;b.uniforms.add("lightingMainDirection","vec3"),b.uniforms.add("lightingMainIntensity","vec3"),b.uniforms.add("lightingFixedFactor","float"),b.code.add(C.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var R=p(98898),I=p(39337),O=p(8507);function S(P,b){const T=P.fragment;P.include(A),P.include(M.K,b),0!==b.pbrMode&&P.include(R.T,b),P.include(B,b),b.receiveShadows&&P.include(O.hX,b),T.uniforms.add("lightingGlobalFactor","float"),T.uniforms.add("ambientBoostFactor","float"),P.include(I.e),T.code.add(C.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===b.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),T.code.add(C.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===b.viewingMode?C.H`normalize(vPosWorld)`:C.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),T.code.add(C.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===b.pbrMode||4===b.pbrMode?T.code.add(C.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==b.pbrMode&&2!==b.pbrMode||(T.code.add(C.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),T.code.add(C.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),T.code.add(C.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),T.code.add(C.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),T.code.add(C.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===b.pbrMode?C.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:C.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},10109:(de,V,p)=>{p.d(V,{p:()=>M,l:()=>B});var C=p(17625);function B(A,R){A.fragment.uniforms.add("terrainDepthTexture","sampler2D"),A.fragment.uniforms.add("cameraNearFar","vec2"),A.fragment.uniforms.add("inverseViewport","vec2"),A.fragment.code.add(C.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, cameraNearFar);
      if(fragmentDepth ${R.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function M(A,R){R.multipassTerrainEnabled&&R.terrainLinearDepthTexture&&A.bindTexture(R.terrainLinearDepthTexture,"terrainDepthTexture")}},96395:(de,V,p)=>{p.d(V,{k:()=>B});var C=p(17625);function B(M,A){const R=M.fragment;R.code.add(C.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),R.code.add(1===A.doubleSidedMode?C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`:2===A.doubleSidedMode?C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`:C.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},98898:(de,V,p)=>{p.d(V,{T:()=>A});var C=p(17625);function B(R){const I=R.fragment.code;I.add(C.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),I.add(C.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),I.add(C.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var M=p(39337);function A(R,I){const O=R.fragment.code;R.include(M.e),3===I.pbrMode||4===I.pbrMode?(O.add(C.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${I.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),O.add(C.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),O.add(C.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),O.add(C.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),O.add(C.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):1!==I.pbrMode&&2!==I.pbrMode||(R.include(B),O.add(C.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),O.add(C.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),O.add(C.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),O.add(C.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),O.add(C.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),O.add(C.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},92724:(de,V,p)=>{p.d(V,{jV:()=>R,nW:()=>I});var C=p(14658),B=p(85982),M=p(17625);function R(O,S){const P=O.fragment,b=S.hasMetalnessAndRoughnessTexture||S.hasEmissionTexture||S.hasOcclusionTexture;1===S.pbrMode&&b&&O.include(B.i,S),2!==S.pbrMode?(0===S.pbrMode&&P.code.add(M.H`float getBakedOcclusion() { return 1.0; }`),1===S.pbrMode&&(P.uniforms.add("emissionFactor","vec3"),P.uniforms.add("mrrFactors","vec3"),P.code.add(M.H`vec3 mrr;
vec3 emission;
float occlusion;`),S.hasMetalnessAndRoughnessTexture&&(P.uniforms.add("texMetallicRoughness","sampler2D"),S.supportsTextureAtlas&&P.uniforms.add("texMetallicRoughnessSize","vec2"),P.code.add(M.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),S.hasEmissionTexture&&(P.uniforms.add("texEmission","sampler2D"),S.supportsTextureAtlas&&P.uniforms.add("texEmissionSize","vec2"),P.code.add(M.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),S.hasOcclusionTexture?(P.uniforms.add("texOcclusion","sampler2D"),S.supportsTextureAtlas&&P.uniforms.add("texOcclusionSize","vec2"),P.code.add(M.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):P.code.add(M.H`float getBakedOcclusion() { return 1.0; }`),P.code.add(M.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${b?"vtc.uv = vuv0;":""}
      ${S.hasMetalnessAndRoughnessTexture?S.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${S.hasEmissionTexture?S.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${S.hasOcclusionTexture?S.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):P.code.add(M.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function I(O,S,P=!1){P||(O.setUniform3fv("mrrFactors",S.mrrFactors),O.setUniform3fv("emissionFactor",S.emissiveFactor))}(0,C.f)(0,.6,.2)},39337:(de,V,p)=>{p.d(V,{e:()=>B});var C=p(17625);function B(M){M.vertex.code.add(C.H`const float PI = 3.141592653589793;`),M.fragment.code.add(C.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},8507:(de,V,p)=>{p.d(V,{hX:()=>M,vL:()=>R});var C=p(19278),B=p(17625);function M(O){O.fragment.include(C.n),O.fragment.uniforms.add("uShadowMapTex","sampler2D"),O.fragment.uniforms.add("uShadowMapNum","int"),O.fragment.uniforms.add("uShadowMapDistance","vec4"),O.fragment.uniforms.add("uShadowMapMatrix","mat4",4),O.fragment.uniforms.add("uDepthHalfPixelSz","float"),O.fragment.code.add(B.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = uShadowMapDistance;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= uShadowMapNum) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
}`)}function R(O,S,P){S.shadowMappingEnabled&&S.shadowMap.bindView(O,P)}},92836:(de,V,p)=>{p.d(V,{kl:()=>B,uj:()=>R});var C=p(17625);function B(I,O){O.vvInstancingEnabled&&(O.vvSize||O.vvColor)&&I.attributes.add("instanceFeatureAttribute","vec4"),O.vvSize?(I.vertex.uniforms.add("vvSizeMinSize","vec3"),I.vertex.uniforms.add("vvSizeMaxSize","vec3"),I.vertex.uniforms.add("vvSizeOffset","vec3"),I.vertex.uniforms.add("vvSizeFactor","vec3"),I.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),I.vertex.uniforms.add("vvSymbolAnchor","vec3"),I.vertex.code.add(C.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),I.vertex.code.add(C.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${O.vvInstancingEnabled?C.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):I.vertex.code.add(C.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),O.vvColor?(I.vertex.constants.add("vvColorNumber","int",8),I.vertex.code.add(C.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${O.vvInstancingEnabled?C.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):I.vertex.code.add(C.H`vec4 vvColor() { return vec4(1.0); }`)}function R(I,O){(function M(I,O){O.vvSizeEnabled&&(I.setUniform3fv("vvSizeMinSize",O.vvSizeMinSize),I.setUniform3fv("vvSizeMaxSize",O.vvSizeMaxSize),I.setUniform3fv("vvSizeOffset",O.vvSizeOffset),I.setUniform3fv("vvSizeFactor",O.vvSizeFactor)),O.vvColorEnabled&&(I.setUniform1fv("vvColorValues",O.vvColorValues),I.setUniform4fv("vvColorColors",O.vvColorColors))})(I,O),O.vvSizeEnabled&&(I.setUniform3fv("vvSymbolAnchor",O.vvSymbolAnchor),I.setUniformMatrix3fv("vvSymbolRotationMatrix",O.vvSymbolRotationMatrix))}},93609:(de,V,p)=>{p.d(V,{sj:()=>A,F:()=>B,bf:()=>M});var C=p(17625);const B=.1,M=.001;function A(R,I){const O=R.fragment;switch(I.alphaDiscardMode){case 0:O.code.add(C.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${C.H.float(M)}) { discard; } }
      `);break;case 1:O.code.add(C.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case 2:O.uniforms.add("textureAlphaCutoff","float"),O.code.add(C.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case 3:R.fragment.uniforms.add("textureAlphaCutoff","float"),R.fragment.code.add(C.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},7228:(de,V,p)=>{p.d(V,{$:()=>M,I:()=>A});var C=p(8314),B=p(17625);function M({code:R},I){R.add(I.doublePrecisionRequiresObfuscation?B.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`:B.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function A(R){return!!(0,C.Z)("force-double-precision-obfuscation")||R.driverTest.doublePrecisionRequiresObfuscation}},411:(de,V,p)=>{p.d(V,{a:()=>M});var C=p(17625),B=p(81653);function M(A,R){const I=C.H`
  /*
  *  ${R.name}
  *  ${0===R.output?"RenderOutput: Color":1===R.output?"RenderOutput: Depth":3===R.output?"RenderOutput: Shadow":2===R.output?"RenderOutput: Normal":4===R.output?"RenderOutput: Highlight":""}
  */
  `;(0,B.CG)()&&(A.fragment.code.add(I),A.vertex.code.add(I))}},49974:(de,V,p)=>{p.d(V,{y:()=>M});var C=p(17625);function B(A){A.code.add(C.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function M(A){A.include(B),A.code.add(C.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${C.H.int(1)}) {
        return allMixed;
      }
      else if (mode == ${C.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${C.H.int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${C.H.int(2)}) {
        return internalMixed;
      }
      else if (mode == ${C.H.int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},19278:(de,V,p)=>{p.d(V,{n:()=>B});var C=p(17625);function B(M){M.code.add(C.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},22355:(de,V,p)=>{p.d(V,{kG:()=>A});const B=p(63290).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class M{constructor(){this.includedModules=new Map}include(X,J){this.includedModules.has(X)?this.includedModules.get(X)!==J&&B.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(X,J),X(this.builder,J))}}class A extends M{constructor(){super(...arguments),this.vertex=new O,this.fragment=new O,this.attributes=new S,this.varyings=new P,this.extensions=new b,this.constants=new T}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(X){const J=this.extensions.generateSource(X),k=this.attributes.generateSource(X),oe=this.varyings.generateSource(),xe="vertex"===X?this.vertex:this.fragment,We=xe.uniforms.generateSource(),Ie=xe.code.generateSource(),Ge="vertex"===X?Z:N,ye=this.constants.generateSource().concat(xe.constants.generateSource());return`\n${J.join("\n")}\n\n${Ge}\n\n${ye.join("\n")}\n\n${We.join("\n")}\n\n${k.join("\n")}\n\n${oe.join("\n")}\n\n${Ie.join("\n")}`}}class R{constructor(){this._entries=new Map}add(X,J,k){return this._entries.set(`${X}_${J}_${k}`,{name:X,type:J,arraySize:k}),this}generateSource(){return Array.from(this._entries.values()).map(J=>`uniform ${J.type} ${J.name}${(J=>J?`[${J}]`:"")(J.arraySize)};`)}get entries(){return Array.from(this._entries.values())}}class I{constructor(){this._entries=new Array}add(X){this._entries.push(X)}generateSource(){return this._entries}}class O extends M{constructor(){super(...arguments),this.uniforms=new R,this.code=new I,this.constants=new T}get builder(){return this}}class S{constructor(){this._entries=new Array}add(X,J){this._entries.push([X,J])}generateSource(X){return"fragment"===X?[]:this._entries.map(J=>`attribute ${J[1]} ${J[0]};`)}}class P{constructor(){this._entries=new Array}add(X,J){this._entries.push([X,J])}generateSource(){return this._entries.map(X=>`varying ${X[1]} ${X[0]};`)}}class b{constructor(){this._entries=new Set}add(X){this._entries.add(X)}generateSource(X){const J="vertex"===X?b.ALLOWLIST_VERTEX:b.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(k=>J.includes(k)).map(k=>`#extension ${k} : enable`)}}b.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],b.ALLOWLIST_VERTEX=[];class T{constructor(){this._entries=[]}add(X,J,k){let oe="ERROR_CONSTRUCTOR_STRING";switch(J){case"float":oe=T.numberToFloatStr(k);break;case"int":oe=T.numberToIntStr(k);break;case"bool":oe=k.toString();break;case"vec2":oe=`vec2(${T.numberToFloatStr(k[0])},                            ${T.numberToFloatStr(k[1])})`;break;case"vec3":oe=`vec3(${T.numberToFloatStr(k[0])},                            ${T.numberToFloatStr(k[1])},                            ${T.numberToFloatStr(k[2])})`;break;case"vec4":oe=`vec4(${T.numberToFloatStr(k[0])},                            ${T.numberToFloatStr(k[1])},                            ${T.numberToFloatStr(k[2])},                            ${T.numberToFloatStr(k[3])})`;break;case"ivec2":oe=`ivec2(${T.numberToIntStr(k[0])},                             ${T.numberToIntStr(k[1])})`;break;case"ivec3":oe=`ivec3(${T.numberToIntStr(k[0])},                             ${T.numberToIntStr(k[1])},                             ${T.numberToIntStr(k[2])})`;break;case"ivec4":oe=`ivec4(${T.numberToIntStr(k[0])},                             ${T.numberToIntStr(k[1])},                             ${T.numberToIntStr(k[2])},                             ${T.numberToIntStr(k[3])})`;break;case"mat2":case"mat3":case"mat4":oe=`${J}(${Array.prototype.map.call(k,xe=>T.numberToFloatStr(xe)).join(", ")})`}return this._entries.push(`const ${J} ${X} = ${oe};`),this}static numberToIntStr(X){return X.toFixed(0)}static numberToFloatStr(X){return Number.isInteger(X)?X.toFixed(1):X.toString()}generateSource(){return Array.from(this._entries)}}const N="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Z="precision highp float;\nprecision highp sampler2D;"},17625:(de,V,p)=>{function C(B,...M){let A="";for(let R=0;R<M.length;R++)A+=B[R]+M[R];return A+=B[B.length-1],A}var B;p.d(V,{H:()=>C}),(B=C||(C={})).int=function M(R){return Math.round(R).toString()},B.float=function A(R){return R.toPrecision(8)}},2282:(de,V,p)=>{p.d(V,{hu:()=>b}),p(21286),p(28347),p(67831),p(99770),p(28093),p(993),(0,p(4794).c)();class P{constructor(Y){this.message=Y}toString(){return`AssertException: ${this.message}`}}function b(z,Y){if(!z){Y=Y||"assert";const he=new Error(Y);throw he.stack&&console.log(he.stack),new P(Y)}}},50229:(de,V,p)=>{p.d(V,{bj:()=>re,FZ:()=>Se,Uf:()=>ne,Bw:()=>kt,LO:()=>me,Hx:()=>se});var C=p(21286),B=p(62208),M=p(84161),A=p(28093),R=p(5548);(0,C.Vl)(10),(0,C.Vl)(12),(0,C.Vl)(70),(0,C.Vl)(40);const Ie={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var ye=p(2282),lt=(p(28347),p(43703));p(2757),new Float64Array(3),new Float32Array(6),(0,lt.c)();const zt=(0,R.Ue)();function kt(U,H,G,K,ie,pe,be){if(!function ct(U){return!!(0,B.pC)(U)&&!U.visible}(H))if(U.boundingInfo)(0,ye.hu)(0===U.primitiveType),Y(U.boundingInfo,K,ie,G.tolerance,pe,be);else{const ge=U.indices.get("position"),Ue=U.vertexAttributes.get("position");Ce(K,ie,0,ge.length/3,ge,Ue,void 0,pe,be)}}const z=(0,A.c)();function Y(U,H,G,K,ie,pe){if((0,B.Wi)(U))return;const be=function ke(U,H,G){return(0,M.s)(G,1/(H[0]-U[0]),1/(H[1]-U[1]),1/(H[2]-U[2]))}(H,G,z);if((0,R.op)(zt,U.getBBMin()),(0,R.Tn)(zt,U.getBBMax()),(0,B.pC)(ie)&&ie.applyToAabb(zt),function F(U,H,G,K){return function j(U,H,G,K,ie){const pe=(U[0]-K-H[0])*G[0],be=(U[3]+K-H[0])*G[0];let ge=Math.min(pe,be),Ue=Math.max(pe,be);const Ee=(U[1]-K-H[1])*G[1],$e=(U[4]+K-H[1])*G[1];if(Ue=Math.min(Ue,Math.max(Ee,$e)),Ue<0||(ge=Math.max(ge,Math.min(Ee,$e)),ge>Ue))return!1;const Je=(U[2]-K-H[2])*G[2],rt=(U[5]+K-H[2])*G[2];return Ue=Math.min(Ue,Math.max(Je,rt)),!(Ue<0)&&(ge=Math.max(ge,Math.min(Je,rt)),!(ge>Ue)&&ge<ie)}(U,H,G,K,1/0)}(zt,H,be,K)){const{primitiveIndices:ge,indices:Ue,position:Ee}=U,$e=ge?ge.length:Ue.length/3;if($e>Qe){const Je=U.getChildren();if(void 0!==Je){for(let rt=0;rt<8;++rt)void 0!==Je[rt]&&Y(Je[rt],H,G,K,ie,pe);return}}Ce(H,G,0,$e,Ue,Ee,ge,ie,pe)}}const he=(0,A.c)();function Ce(U,H,G,K,ie,pe,be,ge,Ue){if(be)return function fe(U,H,G,K,ie,pe,be,ge,Ue){const Ee=pe.data,$e=pe.stride||pe.size,Je=U[0],rt=U[1],yt=U[2],ht=H[0]-Je,gt=H[1]-rt,bt=H[2]-yt;for(let st=G;st<K;++st){const Pt=be[st];let it=3*Pt,Ye=$e*ie[it++],vt=Ee[Ye++],pt=Ee[Ye++],Mt=Ee[Ye];Ye=$e*ie[it++];let _t=Ee[Ye++],Wt=Ee[Ye++],Vt=Ee[Ye];Ye=$e*ie[it];let Gt=Ee[Ye++],jt=Ee[Ye++],Rt=Ee[Ye];(0,B.pC)(ge)&&([vt,pt,Mt]=ge.applyToVertex(vt,pt,Mt,st),[_t,Wt,Vt]=ge.applyToVertex(_t,Wt,Vt,st),[Gt,jt,Rt]=ge.applyToVertex(Gt,jt,Rt,st));const Ot=_t-vt,wt=Wt-pt,Dt=Vt-Mt,At=Gt-vt,Ft=jt-pt,Ut=Rt-Mt,Yt=gt*Ut-Ft*bt,Qt=bt*At-Ut*ht,Et=ht*Ft-At*gt,Tt=Ot*Yt+wt*Qt+Dt*Et;if(Math.abs(Tt)<=Number.EPSILON)continue;const Bt=Je-vt,Ke=rt-pt,Ct=yt-Mt,Lt=Bt*Yt+Ke*Qt+Ct*Et;if(Tt>0){if(Lt<0||Lt>Tt)continue}else if(Lt>0||Lt<Tt)continue;const Zt=Ke*Dt-wt*Ct,Xt=Ct*Ot-Dt*Bt,xt=Bt*wt-Ot*Ke,Ht=ht*Zt+gt*Xt+bt*xt;if(Tt>0){if(Ht<0||Lt+Ht>Tt)continue}else if(Ht>0||Lt+Ht<Tt)continue;const rr=(At*Zt+Ft*Xt+Ut*xt)/Tt;rr>=0&&Ue(rr,He(Ot,wt,Dt,At,Ft,Ut,he),Pt,!1)}}(U,H,G,K,ie,pe,be,ge,Ue);const Ee=pe.data,$e=pe.stride||pe.size,Je=U[0],rt=U[1],yt=U[2],ht=H[0]-Je,gt=H[1]-rt,bt=H[2]-yt;for(let st=G,Pt=3*G;st<K;++st){let it=$e*ie[Pt++],Ye=Ee[it++],vt=Ee[it++],pt=Ee[it];it=$e*ie[Pt++];let Mt=Ee[it++],_t=Ee[it++],Wt=Ee[it];it=$e*ie[Pt++];let Vt=Ee[it++],Gt=Ee[it++],jt=Ee[it];(0,B.pC)(ge)&&([Ye,vt,pt]=ge.applyToVertex(Ye,vt,pt,st),[Mt,_t,Wt]=ge.applyToVertex(Mt,_t,Wt,st),[Vt,Gt,jt]=ge.applyToVertex(Vt,Gt,jt,st));const Rt=Mt-Ye,Ot=_t-vt,wt=Wt-pt,Dt=Vt-Ye,At=Gt-vt,Ft=jt-pt,Ut=gt*Ft-At*bt,Yt=bt*Dt-Ft*ht,Qt=ht*At-Dt*gt,Et=Rt*Ut+Ot*Yt+wt*Qt;if(Math.abs(Et)<=Number.EPSILON)continue;const Tt=Je-Ye,Bt=rt-vt,Ke=yt-pt,Ct=Tt*Ut+Bt*Yt+Ke*Qt;if(Et>0){if(Ct<0||Ct>Et)continue}else if(Ct>0||Ct<Et)continue;const Lt=Bt*wt-Ot*Ke,Zt=Ke*Rt-wt*Tt,Xt=Tt*Ot-Rt*Bt,xt=ht*Lt+gt*Zt+bt*Xt;if(Et>0){if(xt<0||Ct+xt>Et)continue}else if(xt>0||Ct+xt<Et)continue;const Ht=(Dt*Lt+At*Zt+Ft*Xt)/Et;Ht>=0&&Ue(Ht,He(Rt,Ot,wt,Dt,At,Ft,he),st,!1)}}const _e=(0,A.c)(),Ve=(0,A.c)();function He(U,H,G,K,ie,pe,be){return(0,M.s)(_e,U,H,G),(0,M.s)(Ve,K,ie,pe),(0,M.c)(be,_e,Ve),(0,M.n)(be,be),be}function se(U,H,G,K,ie){let pe=(G.screenLength||0)*U.pixelRatio;ie&&(pe=function J(U,H,G,K){return function T(U,H){return Math.max((0,C.t7)(U*H.scale,U,H.factor),function b(U,H){return 0===U?H.minPixelSize:H.minPixelSize*(1+2*H.paddingPixels/U)}(U,H))}(U,function P(U,H,G){const K=G.parameters,ie=G.paddingPixelsOverride;return Ie.scale=Math.min(K.divisor/(H-K.offset),1),Ie.factor=function S(U){return Math.abs(U*U*U)}(U),Ie.minPixelSize=K.minPixelSize,Ie.paddingPixels=ie,Ie}(H,G,K))}(pe,K,H,ie));const be=pe*Math.tan(.5*U.fovY)/(.5*U.fullHeight);return(0,C.uZ)(be*H,G.minWorldLength||0,null!=G.maxWorldLength?G.maxWorldLength:1/0)}function re(U,H,G){if(!U)return;const K=U.parameters;H.setUniform4f(G,K.divisor,K.offset,K.minPixelSize,U.paddingPixelsOverride)}function ne(U,H){const G=H?ne(H):{};for(const K in U){let ie=U[K];ie&&ie.forEach&&(ie=Te(ie)),null==ie&&K in G||(G[K]=ie)}return G}function me(U,H){let G=!1;for(const K in H){const ie=H[K];void 0!==ie&&(G=!0,U[K]=Array.isArray(ie)?ie.slice():ie)}return G}function Te(U){const H=[];return U.forEach(G=>H.push(G)),H}const Se={multiply:1,ignore:2,replace:3,tint:4},Qe=1e3},55086:(de,V,p)=>{p.d(V,{Z:()=>O});var C=p(21286),B=p(62208),M=p(81653),A=p(67969),R=p(38210);class O{constructor(b,T,N=null){this._context=b,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,b.instanceCounter.increment(A._g.Texture,this),this._descriptor=It({target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1},T),34067===this._descriptor.target?this.setDataCubeMap(N):this.setData(N)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(A._g.Texture,this))}release(){this.dispose()}resize(b,T){const N=this._descriptor;N.width===b&&N.height===T||(N.width=b,N.height=T,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(b=null){for(let T=34069;T<=34074;T++)this.setData(b,T)}setData(b,T=3553){if(!this._context||!this._context.gl)return;const N=this._context.gl;this._glName||(this._glName=N.createTexture()),void 0===b&&(b=null),null===b&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const Z=this._context.bindTexture(this,O.TEXTURE_UNIT_FOR_UPDATES),W=this._descriptor;O._validateTexture(this._context,W),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipped?1:0),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.preMultiplyAlpha?1:0);const X=W.pixelFormat;let J=W.internalFormat?W.internalFormat:this._deriveInternalFormat(X,W.dataType);if(b instanceof ImageData||b instanceof HTMLImageElement||b instanceof HTMLCanvasElement||b instanceof HTMLVideoElement){let k=b.width,oe=b.height;b instanceof HTMLVideoElement&&(k=b.videoWidth,oe=b.videoHeight),N.texImage2D(T,0,J,X,W.dataType,b),(0,M.zu)(N),W.hasMipmap&&this.generateMipmap(),void 0===W.width&&(W.width=k),void 0===W.height&&(W.height=oe)}else{null!=W.width&&null!=W.height||console.error("Width and height must be specified!"),N.DEPTH24_STENCIL8&&J===N.DEPTH_STENCIL&&(J=N.DEPTH24_STENCIL8);let k=W.width,oe=W.height;if(function S(P){return(0,B.pC)(P)&&"type"in P&&"compressed"===P.type}(b)){const xe=Math.round(Math.log(Math.max(k,oe))/Math.LN2)+1;W.hasMipmap=W.hasMipmap&&xe===b.levels.length;for(let We=0;;++We){const Ie=b.levels[Math.min(We,b.levels.length-1)];if(N.compressedTexImage2D(T,We,J,k,oe,0,Ie),1===k&&1===oe||!W.hasMipmap)break;k=Math.max(1,k>>1),oe=Math.max(1,oe>>1)}}else if((0,B.pC)(b))N.texImage2D(T,0,J,k,oe,0,X,W.dataType,b),(0,M.zu)(N),W.hasMipmap&&this.generateMipmap();else for(let xe=0;N.texImage2D(T,xe,J,k,oe,0,X,W.dataType,null),(0,M.zu)(N),(1!==k||1!==oe)&&W.hasMipmap;++xe)k=Math.max(1,k>>1),oe=Math.max(1,oe>>1)}O._applySamplingMode(N,this._descriptor),O._applyWrapMode(N,this._descriptor),O._applyAnisotropicFilteringParameters(this._context,this._descriptor),(0,M.zu)(N),this._context.bindTexture(Z,O.TEXTURE_UNIT_FOR_UPDATES)}updateData(b,T,N,Z,W,X,J=3553){X||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const k=this._context.gl,oe=this._descriptor,xe=this._context.bindTexture(this,O.TEXTURE_UNIT_FOR_UPDATES);(T<0||N<0||Z>oe.width||W>oe.height||T+Z>oe.width||N+W>oe.height)&&console.error("An attempt to update out of bounds of the texture!"),k.pixelStorei(k.UNPACK_ALIGNMENT,oe.unpackAlignment),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,oe.flipped?1:0),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.preMultiplyAlpha?1:0),X instanceof ImageData||X instanceof HTMLImageElement||X instanceof HTMLCanvasElement||X instanceof HTMLVideoElement?k.texSubImage2D(J,b,T,N,oe.pixelFormat,oe.dataType,X):k.texSubImage2D(J,b,T,N,Z,W,oe.pixelFormat,oe.dataType,X),this._context.bindTexture(xe,O.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const b=this._descriptor;b.hasMipmap||(b.hasMipmap=!0,this._samplingModeDirty=!0,O._validateTexture(this._context,b)),9729===b.samplingMode?(this._samplingModeDirty=!0,b.samplingMode=9985):9728===b.samplingMode&&(this._samplingModeDirty=!0,b.samplingMode=9984);const T=this._context.bindTexture(this,O.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(b.target),this._context.bindTexture(T,O.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(b){b!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=b,this._samplingModeDirty=!0)}setWrapMode(b){b!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=b,O._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const b=this._context.gl,T=this._descriptor;this._samplingModeDirty&&(O._applySamplingMode(b,T),this._samplingModeDirty=!1),this._wrapModeDirty&&(O._applyWrapMode(b,T),this._wrapModeDirty=!1)}_deriveInternalFormat(b,T){if("webgl"===this._context.webglVersion)return b;if(5126===T)switch(b){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return b}static _validateTexture(b,T){(T.width<0||T.height<0)&&console.error("Negative dimension parameters are not allowed!");const N=(0,C.wt)(T.width)&&(0,C.wt)(T.height);(0,R.Z)(b.gl)||N||("number"==typeof T.wrapMode?33071!==T.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===T.wrapMode.s&&33071===T.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),T.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(b,T){let N=T.samplingMode,Z=T.samplingMode;9985===N||9987===N?(N=9729,T.hasMipmap||(Z=9729)):9984!==N&&9986!==N||(N=9728,T.hasMipmap||(Z=9728)),b.texParameteri(T.target,b.TEXTURE_MAG_FILTER,N),b.texParameteri(T.target,b.TEXTURE_MIN_FILTER,Z)}static _applyWrapMode(b,T){"number"==typeof T.wrapMode?(b.texParameteri(T.target,b.TEXTURE_WRAP_S,T.wrapMode),b.texParameteri(T.target,b.TEXTURE_WRAP_T,T.wrapMode)):(b.texParameteri(T.target,b.TEXTURE_WRAP_S,T.wrapMode.s),b.texParameteri(T.target,b.TEXTURE_WRAP_T,T.wrapMode.t))}static _applyAnisotropicFilteringParameters(b,T){var N;const Z=b.capabilities.textureFilterAnisotropic;!Z||b.gl.texParameterf(T.target,Z.TEXTURE_MAX_ANISOTROPY,null!=(N=T.maxAnisotropy)?N:1)}}O.TEXTURE_UNIT_FOR_UPDATES=0},38210:(de,V,p)=>{function C(B){return window.WebGL2RenderingContext&&B instanceof window.WebGL2RenderingContext}p.d(V,{Z:()=>C})},81653:(de,V,p)=>{p.d(V,{zu:()=>P,hZ:()=>O,CG:()=>S});var C=p(26584),B=p(8314);const A=p(63290).Z.getLogger("esri/views/webgl"),I=!!(0,B.Z)("enable-feature:webgl-debug");function O(){return I}function S(){return I}function P(b){if(O()){const T=b.getError();if(T){const N=function R(b,T){switch(T){case b.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case b.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case b.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case b.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case b.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case b.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(b,T),Z=(new Error).stack;A.error(new C.Z("webgl-error","WebGL error occured",{message:N,stack:Z}))}}}},67969:(de,V,p)=>{p.d(V,{Ld:()=>C,Lu:()=>M,_g:()=>B});const C=33984;var B,A;(A=B||(B={}))[A.Texture=0]="Texture",A[A.Buffer=1]="Buffer",A[A.VAO=2]="VAO",A[A.VertexShader=3]="VertexShader",A[A.FragmentShader=4]="FragmentShader",A[A.Program=5]="Program",A[A.Framebuffer=6]="Framebuffer",A[A.Renderbuffer=7]="Renderbuffer",A[A.COUNT=8]="COUNT";const M=33306}}]);