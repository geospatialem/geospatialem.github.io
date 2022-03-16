"use strict";var Ft=Object.defineProperty,st=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,ot=(N,D,m)=>D in N?Ft(N,D,{enumerable:!0,configurable:!0,writable:!0,value:m}):N[D]=m,at=(N,D)=>{for(var m in D||(D={}))St.call(D,m)&&ot(N,m,D[m]);if(st)for(var m of st(D))wt.call(D,m)&&ot(N,m,D[m]);return N};(self.webpackChunksite=self.webpackChunksite||[]).push([[3070],{20194:(N,D,m)=>{m.d(D,{b:()=>c,l:()=>R,o:()=>T});var j,A={exports:{}};void 0!==(j=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"])&&(A.exports=j);const R=A.exports;var _,x={exports:{}};void 0!==(_=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"])&&(x.exports=_);const T=x.exports;var g,M={exports:{}};void 0!==(g=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"])&&(M.exports=g);const c=M.exports},83994:(N,D,m)=>{m.d(D,{Z:()=>T});var j=m(63290),A=m(55713),R=m(81653),v=m(67969);const x=j.Z.getLogger("esri.views.webgl.BufferObject");class T{constructor(c,a,_,g,b){this._context=c,this.bufferType=a,this.usage=_,this._glName=null,this._size=-1,this._indexType=void 0,c.instanceCounter.increment(v._g.Buffer,this),this._glName=this._context.gl.createBuffer(),(0,R.zu)(this._context.gl),g&&this.setData(g,b)}static createIndex(c,a,_,g){return new T(c,34963,a,_,g)}static createVertex(c,a,_){return new T(c,34962,a,_)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){var c;null!=(c=this._context)&&c.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(v._g.Buffer,this),this._context=null):this._glName&&x.warn("Leaked WebGL buffer object")}setData(c,a){if(!c)return;if("number"==typeof c){if(c<0&&x.error("Buffer size cannot be negative!"),this._size=c,34963===this.bufferType&&a)switch(this._indexType=a,this._size=c,a){case 5123:c*=2;break;case 5125:c*=4}}else{let b=c.byteLength;(0,A.Uc)(c)&&(b/=2,this._indexType=5123),(0,A.ZY)(c)&&(b/=4,this._indexType=5125),this._size=b}const _=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const g=this._context.gl;g.bufferData(this.bufferType,c,this.usage),(0,R.zu)(g),this._context.bindVAO(_)}setSubData(c,a=0,_=0,g=c.byteLength){if(!c)return;(a<0||a>=this._size)&&x.error("offset is out of range!");let b=a,E=_,n=g,s=c.byteLength;(0,A.Uc)(c)?(s/=2,b*=2,E*=2,n*=2):(0,A.ZY)(c)&&(s/=4,b*=4,E*=4,n*=4),void 0===g&&(g=s-1),_>=g&&x.error("end must be bigger than start!"),a+_-g>this._size&&x.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const u=this._context.gl,P=ArrayBuffer.isView(c)?c.buffer:c,d=0===E&&n===c.byteLength?P:P.slice(E,n);u.bufferSubData(this.bufferType,b,d),(0,R.zu)(u),this._context.bindVAO(o)}setSubDataFromView(c,a,_,g){if(!c)return;(a<0||a>=this._size)&&x.error("offset is out of range!"),_>=g&&x.error("end must be bigger than start!"),a+_-g>this._size&&x.error("An attempt to write beyond the end of the buffer!");const b=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const E=this._context.gl,n=0===_&&g===c.length?c:c.subarray(_,g);E.bufferSubData(this.bufferType,a*c.BYTES_PER_ELEMENT,n),(0,R.zu)(E),this._context.bindVAO(b)}}},85775:(N,D,m)=>{m.d(D,{Z:()=>a});var j=m(63290),A=m(62208),R=m(81653),v=m(67969),x=m(49266),T=m(55086),M=m(26906);const c=j.Z.getLogger("esri.views.webgl.FrameBufferObject");class a{constructor(n,s,o=null,u=null){if(this._context=n,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=at({},s),n.instanceCounter.increment(v._g.Framebuffer,this),(0,A.pC)(o)){Array.isArray(o)||(o=[o]);for(let C=0;C<o.length;++C){var P,d;const L=o[C];let I;_(L)?(I=L.descriptor,this._colorAttachments.set(36064+C,L)):(I=L,this._colorAttachments.set(36064+C,new T.Z(n,L))),0!==(null==(P=this._desc)?void 0:P.colorTarget)&&2!==(null==(d=this._desc)?void 0:d.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),this._validateColorAttachmentPoint(36064+C),this._validateTextureDimensions(I,this._desc)}}if(u instanceof x.Z){var S;const C=null!=(S=this._desc.depthStencilTarget)?S:3;2===C?this._stencilAttachment=u:1===C||3===C?this._depthAttachment=u:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),b(u.descriptor,this._desc)}else if((0,A.pC)(u)){let C;this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),_(u)?(this._depthStencilTexture=u,C=u.descriptor):this._depthStencilTexture=new T.Z(this._context,u),this._validateTextureDimensions(C,this._desc)}}dispose(){if(!this._desc)return;const n=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(n),this._context.instanceCounter.decrement(v._g.Framebuffer,this),this._desc=null}get glName(){return this._glName}get descriptor(){return this._desc}get colorTexture(){const n=this._colorAttachments.get(36064);return n&&_(n)?n:null}get colorAttachment(){return this._colorAttachments.get(36064)}get depthStencilAttachment(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._desc.width}get height(){return this._desc.height}get gpuMemoryUsage(){return(0,M.un)(this.colorAttachment)+(0,M.un)(this.depthStencilAttachment)}getColorTexture(n){const s=this._colorAttachments.get(n);return s&&_(s)?s:null}framebufferTexture2D(n,s,o=36064,u=3553,P=0){s.framebufferTexture2D(s.FRAMEBUFFER,o,u,n,P)}attachColorTexture(n,s=36064){n&&(this._validateColorAttachmentPoint(s),this._validateTextureDimensions(n.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(n.glName,this._context.gl,s)),this._colorAttachments.set(s,n))}detachColorTexture(n=36064){const s=this._colorAttachments.get(n);if(_(s)){const o=s;return this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,n)),this._colorAttachments.delete(n),o}}attachDepthStencilTexture(n){if((0,A.Wi)(n))return;const s=n.descriptor;34041!==s.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==s.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDimensions(s,this._desc),this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(n.glName,this._context.gl,v.Lu)),this._depthStencilTexture=n}detachDepthStencilTexture(){const n=this._depthStencilTexture;return n&&this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,v.Lu)),this._depthStencilTexture=null,n}attachDepthStencilBuffer(n){if((0,A.Wi)(n))return;const s=n.descriptor;if(34041!==s.internalFormat&&33189!==s.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),b(s,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===s.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);const o=this._context.gl;o.framebufferRenderbuffer(o.FRAMEBUFFER,1===this._desc.depthStencilTarget?o.DEPTH_ATTACHMENT:o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,n.glName)}this._depthAttachment=n}detachDepthStencilBuffer(){const n=this._context.gl,s=this._depthAttachment;return s&&this._initialized&&(this._context.bindFramebuffer(this),n.framebufferRenderbuffer(n.FRAMEBUFFER,1===this._desc.depthStencilTarget?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,null)),this._depthAttachment=null,s}detachAll(){this.detachColorTexture(),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}copyToTexture(n,s,o,u,P,d,S){(n<0||s<0||P<0||d<0)&&console.error("Offsets cannot be negative!"),(o<=0||u<=0)&&console.error("Copy width and height must be greater than zero!");const C=this._desc,L=S.descriptor;3553!==S.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(n+o>C.width||s+u>C.height||P+o>L.width||d+u>L.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const I=this._context,G=I.bindTexture(S,T.Z.TEXTURE_UNIT_FOR_UPDATES);I.bindFramebuffer(this),I.gl.copyTexSubImage2D(3553,0,P,d,n,s,o,u),I.bindTexture(G,T.Z.TEXTURE_UNIT_FOR_UPDATES)}readPixels(n,s,o,u,P,d,S){(o<=0||u<=0)&&console.error("Copy width and height must be greater than zero!"),S||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(n,s,o,u,P,d,S)}resize(n,s){const o=this._desc;if(o.width!==n||o.height!==s){if(!this._initialized)return o.width=n,o.height=s,this._colorAttachments.forEach(u=>{u&&u.resize(n,s)}),void(this._depthStencilTexture&&this._depthStencilTexture.resize(n,s));o.width=n,o.height=s,this._colorAttachments.forEach(u=>{u&&u.resize(n,s)}),null!=this._depthStencilTexture?this._depthStencilTexture.resize(n,s):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(n,s),this._stencilAttachment&&this._stencilAttachment.resize(n,s)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}initializeAndBind(n=3553){var s,o,u,P;const d=this._context.gl;if(this._initialized)return void d.bindFramebuffer(d.FRAMEBUFFER,this.glName);this._glName&&d.deleteFramebuffer(this._glName);const S=this._context,C=d.createFramebuffer(),L=this._desc,I=null!=(s=L.colorTarget)?s:1,G=null!=(o=L.width)?o:1,Z=null!=(u=L.height)?u:1;if(d.bindFramebuffer(d.FRAMEBUFFER,C),0===this._colorAttachments.size)if(0===I)this._colorAttachments.set(36064,function g(E,n,s){return new T.Z(E,{target:s,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:n.width,height:n.height})}(S,L,2===this.descriptor.colorTarget?34067:3553));else{const k=new x.Z(S,{internalFormat:32854,width:G,height:Z});this._colorAttachments.set(36064,k)}this._colorAttachments.forEach((k,Q)=>{k&&(_(k)?this.framebufferTexture2D(k.glName,d,Q,n):d.framebufferRenderbuffer(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.RENDERBUFFER,k.glName))});const K=null!=(P=L.depthStencilTarget)?P:0;switch(K){case 1:case 3:this._depthAttachment||(this._depthAttachment=new x.Z(S,{internalFormat:1===L.depthStencilTarget?33189:34041,width:G,height:Z})),d.framebufferRenderbuffer(d.FRAMEBUFFER,1===K?d.DEPTH_ATTACHMENT:d.DEPTH_STENCIL_ATTACHMENT,d.RENDERBUFFER,this._depthAttachment.glName);break;case 2:this._stencilAttachment||(this._stencilAttachment=new x.Z(S,{internalFormat:36168,width:G,height:Z})),d.framebufferRenderbuffer(d.FRAMEBUFFER,d.STENCIL_ATTACHMENT,d.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:this._depthStencilTexture||(S.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),this._depthStencilTexture=new T.Z(S,{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:G,height:Z})),this.framebufferTexture2D(this._depthStencilTexture.glName,d,d.DEPTH_STENCIL_ATTACHMENT,n)}(0,R.CG)()&&d.checkFramebufferStatus(d.FRAMEBUFFER)!==d.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=C,this._initialized=!0}_disposeColorAttachments(){this._colorAttachments.forEach((n,s)=>{if(_(n))this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,this._context.gl,s)),n.dispose();else if(n instanceof WebGLRenderbuffer){const o=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),o.framebufferRenderbuffer(o.FRAMEBUFFER,s,o.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(n)}}),this._colorAttachments.clear()}_disposeDepthStencilAttachments(){const n=this._context.gl;this._depthAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),n.framebufferRenderbuffer(n.FRAMEBUFFER,1===this._desc.depthStencilTarget?n.DEPTH_ATTACHMENT:n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null),this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.STENCIL_ATTACHMENT,n.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this.framebufferTexture2D(null,n,n.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}_validateTextureDimensions(n,s){3553!==n.target&&34067!==n.target&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==s.width&&s.width>=0&&void 0!==s.height&&s.height>=0?s.width===n.width&&s.height===n.height||console.error("Color attachment texture must match the framebuffer's!"):(s.width=n.width,s.height=n.height)}_validateColorAttachmentPoint(n){if(-1===a._MAX_COLOR_ATTACHMENTS){const o=this._context.capabilities.drawBuffers;a._MAX_COLOR_ATTACHMENTS=o?this._context.gl.getParameter(o.MAX_COLOR_ATTACHMENTS):1}const s=n-36064;s+1>a._MAX_COLOR_ATTACHMENTS&&c.error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${s+1}. Implementation supports up to ${a._MAX_COLOR_ATTACHMENTS} color attachments`)}}function _(E){return"type"in E&&"texture"===E.type}function b(E,n){void 0!==n.width&&n.width>=0&&void 0!==n.height&&n.height>=0?n.width===E.width&&n.height===E.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(n.width=E.width,n.height=E.height)}a._MAX_COLOR_ATTACHMENTS=-1},92118:(N,D,m)=>{m.d(D,{$:()=>dt}),m(8314);var A=m(62208),R=m(81653),v=m(67969);const x=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];var T=m(20194),M=999,C=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function G(i){return function I(i){var t=function L(){var i,t,r,e=0,f=0,l=M,h=[],O=[],y=1,p=0,U=0,w=!1,V=!1,B="";return function(F){return O=[],null!==F?function Tt(F){var X;for(e=0,r=(B+=F).length;i=B[e],e<r;){switch(X=e,l){case 0:e="/"===i&&"*"===t?(h.push(i),z(h.join("")),l=M,e+1):(h.push(i),t=i,e+1);break;case 1:case 2:e=rt();break;case 3:e=Dt();break;case 4:e="."===i||/[eE]/.test(i)?(h.push(i),l=5,t=i,e+1):"x"===i&&1===h.length&&"0"===h[0]?(l=11,h.push(i),t=i,e+1):/[^\d]/.test(i)?(z(h.join("")),l=M,e):(h.push(i),t=i,e+1);break;case 11:e=/[^a-fA-F0-9]/.test(i)?(z(h.join("")),l=M,e):(h.push(i),t=i,e+1);break;case 5:"f"===i&&(h.push(i),t=i,e+=1),e=/[eE]/.test(i)||"-"===i&&/[eE]/.test(t)?(h.push(i),t=i,e+1):/[^\d]/.test(i)?(z(h.join("")),l=M,e):(h.push(i),t=i,e+1);break;case 9999:e=Ct();break;case 9:e=/[^\s]/g.test(i)?(z(h.join("")),l=M,e):(h.push(i),t=i,e+1);break;case M:h=h.length?[]:h,e="/"===t&&"*"===i?(U=f+e-1,l=0,t=i,e+1):"/"===t&&"/"===i?(U=f+e-1,l=1,t=i,e+1):"#"===i?(l=2,U=f+e,e):/\s/.test(i)?(l=9,U=f+e,e):(w=/\d/.test(i),V=/[^\w_]/.test(i),U=f+e,l=w?4:V?3:9999,e)}X!==e&&("\n"===B[X]?(p=0,++y):++p)}return f+=e,B=B.slice(e),O}(F.replace?F.replace(/\r\n/g,"\n"):F):function bt(F){return h.length&&z(h.join("")),l=10,z("(eof)"),O}()};function z(F){F.length&&O.push({type:C[l],data:F,position:U,line:y,column:p})}function rt(){return"\r"!==i&&"\n"!==i||"\\"===t?(h.push(i),t=i,e+1):(z(h.join("")),l=M,e)}function Dt(){if("."===t&&/\d/.test(i))return l=5,e;if("/"===t&&"*"===i)return l=0,e;if("/"===t&&"/"===i)return l=1,e;if("."===i&&h.length){for(;J(h););return l=5,e}if(";"===i||")"===i||"("===i){if(h.length)for(;J(h););return z(i),l=M,e+1}var F=2===h.length&&"="!==i;if(/[\w_\d\s]/.test(i)||F){for(;J(h););return l=M,e}return h.push(i),t=i,e+1}function J(F){for(var X,Y,nt=0;;){if(X=T.o.indexOf(F.slice(0,F.length+nt).join("")),Y=T.o[X],-1===X){if(nt--+F.length>0)continue;Y=F.slice(0,1).join("")}return z(Y),U+=Y.length,(h=h.slice(Y.length)).length}}function Ct(){if(/[^\d\w_]/.test(i)){var F=h.join("");return l=T.l.indexOf(F)>-1?8:T.b.indexOf(F)>-1?7:6,z(h.join("")),l=M,e}return h.push(i),t=i,e+1}}(),r=[];return(r=r.concat(t(i))).concat(t(null))}(i)}const K=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function Q(i,t){for(let r=t-1;r>=0;r--){const e=i[r];if("whitespace"!==e.type&&"block-comment"!==e.type){if("keyword"!==e.type)break;if("attribute"===e.data||"in"===e.data)return!0}}return!1}function $(i,t,r,e){e=e||r;for(const f of i)if("ident"===f.type&&f.data===r)return e in t?t[e]++:t[e]=0,$(i,t,e+"_"+t[e],e);return r}function q(i,t,r="afterVersion"){function e(y,p){for(let U=p;U<y.length;U++){const w=y[U];if("operator"===w.type&&";"===w.data)return U}return null}const l={data:"\n",type:"whitespace"},h=y=>y<i.length&&/[^\r\n]$/.test(i[y].data);let O=function f(y){let p=-1,U=0,w=-1;for(let V=0;V<y.length;V++){const B=y[V];if("preprocessor"===B.type&&(B.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++U:B.data.match(/\#endif\s*.*/)&&--U),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===B.type&&/^#version/.test(B.data)&&(w=Math.max(w,V)),"afterPrecision"===r&&"keyword"===B.type&&"precision"===B.data){const z=e(y,V);if(null===z)throw new Error("precision statement not followed by any semicolons!");w=Math.max(w,z)}p<w&&0===U&&(p=V)}return p+1}(i);h(O-1)&&i.splice(O++,0,l);for(const y of t)i.splice(O++,0,y);h(O-1)&&h(O)&&i.splice(O,0,l)}function ct(i,t,r,e="lowp"){q(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function ht(i,t,r,e,f="lowp"){q(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:e.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:f},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function lt(i,t){let r,e,f=-1;for(let l=t;l<i.length;l++){const h=i[l];if("operator"===h.type&&("["===h.data&&(r=l),"]"===h.data)){e=l;break}"integer"===h.type&&(f=parseInt(h.data,10))}return r&&e&&i.splice(r,e-r+1),f}const tt_enableCache=!1,et=new Map;class dt{constructor(t,r,e,f){this._context=t,this._locations=f,this._nameToUniformLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},t||console.error("RenderingContext isn't initialized!"),0===r.length&&console.error("Shaders source should not be empty!"),this._vShader=it(this._context,35633,r),this._fShader=it(this._context,35632,e),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(v._g.VertexShader,this),this._context.instanceCounter.increment(v._g.FragmentShader,this)}get glName(){if((0,A.pC)(this._glName))return this._glName;if((0,A.Wi)(this._vShader))return null;const t=this._context.gl,r=t.createProgram();return t.attachShader(r,this._vShader),t.attachShader(r,this._fShader),this._locations.forEach((e,f)=>t.bindAttribLocation(r,e,f)),t.linkProgram(r),(0,R.CG)()&&!t.getProgramParameter(r,t.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${t.getProgramParameter(r,t.VALIDATE_STATUS)}, gl error ${t.getError()}, vertex: ${t.getShaderParameter(this._vShader,t.COMPILE_STATUS)}, fragment: ${t.getShaderParameter(this._fShader,t.COMPILE_STATUS)}, info log: ${t.getProgramInfoLog(r)}`),this._glName=r,this._context.instanceCounter.increment(v._g.Program,this),r}dispose(){const t=this._context.gl;this._vShader&&(t.deleteShader(this._vShader),this._vShader=null,this._context.instanceCounter.decrement(v._g.VertexShader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null,this._context.instanceCounter.decrement(v._g.FragmentShader,this)),this._glName&&(t.deleteProgram(this._glName),this._glName=null,this._context.instanceCounter.decrement(v._g.Program,this))}_getUniformLocation(t){return void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this.glName,t)),this._nameToUniformLocation[t]}hasUniform(t){return null!==this._getUniformLocation(t)}setUniform1i(t,r){const e=this._nameToUniform1[t];(void 0===e||r!==e)&&(this._context.useProgram(this),this._context.gl.uniform1i(this._getUniformLocation(t),r),this._nameToUniform1[t]=r)}setUniform1iv(t,r){const e=this._nameToUniform1v[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform1iv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform1v[t]=Array.from(r):H(r,e))}setUniform2iv(t,r){const e=this._nameToUniform2[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform2iv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform2[t]=Array.from(r):H(r,e))}setUniform3iv(t,r){const e=this._nameToUniform3[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform3iv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform3[t]=Array.from(r):H(r,e))}setUniform4iv(t,r){const e=this._nameToUniform4[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform4iv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform4[t]=Array.from(r):H(r,e))}setUniform1f(t,r){const e=this._nameToUniform1[t];(void 0===e||r!==e)&&(this._context.useProgram(this),this._context.gl.uniform1f(this._getUniformLocation(t),r),this._nameToUniform1[t]=r)}setUniform1fv(t,r){const e=this._nameToUniform1v[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform1fv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform1v[t]=Array.from(r):H(r,e))}setUniform2f(t,r,e){const f=this._nameToUniform2[t];(void 0===f||r!==f[0]||e!==f[1])&&(this._context.useProgram(this),this._context.gl.uniform2f(this._getUniformLocation(t),r,e),void 0===f?this._nameToUniform2[t]=[r,e]:(f[0]=r,f[1]=e))}setUniform2fv(t,r){const e=this._nameToUniform2[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform2fv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform2[t]=Array.from(r):H(r,e))}setUniform3f(t,r,e,f){const l=this._nameToUniform3[t];(void 0===l||r!==l[0]||e!==l[1]||f!==l[2])&&(this._context.useProgram(this),this._context.gl.uniform3f(this._getUniformLocation(t),r,e,f),void 0===l?this._nameToUniform3[t]=[r,e,f]:(l[0]=r,l[1]=e,l[2]=f))}setUniform3fv(t,r){const e=this._nameToUniform3[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform3fv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform3[t]=Array.from(r):H(r,e))}setUniform4f(t,r,e,f,l){const h=this._nameToUniform4[t];(void 0===h||r!==h[0]||e!==h[1]||f!==h[2]||l!==h[3])&&(this._context.useProgram(this),this._context.gl.uniform4f(this._getUniformLocation(t),r,e,f,l),void 0===h?this._nameToUniform4[t]=[r,e,f,l]:(h[0]=r,h[1]=e,h[2]=f,h[3]=l))}setUniform4fv(t,r){const e=this._nameToUniform4[t];W(e,r)&&(this._context.useProgram(this),this._context.gl.uniform4fv(this._getUniformLocation(t),r),void 0===e?this._nameToUniform4[t]=Array.from(r):H(r,e))}setUniformMatrix3fv(t,r,e=!1,f=!1){const l=this._nameToUniformMatrix3[t];(f?l!==r:function pt(i,t){return!!(0,A.Wi)(i)||(9!==i.length?W(i,t):9!==i.length||i[0]!==t[0]||i[1]!==t[1]||i[2]!==t[2]||i[3]!==t[3]||i[4]!==t[4]||i[5]!==t[5]||i[6]!==t[6]||i[7]!==t[7]||i[8]!==t[8])}(l,r))&&(this._context.useProgram(this),this._context.gl.uniformMatrix3fv(this._getUniformLocation(t),e,r),void 0===l?this._nameToUniformMatrix3[t]=Array.from(r):H(r,l))}setUniformMatrix4fv(t,r,e=!1){const f=this._nameToUniformMatrix4[t];(function xt(i,t){return!!(0,A.Wi)(i)||(16!==i.length?W(i,t):16!==i.length||i[0]!==t[0]||i[1]!==t[1]||i[2]!==t[2]||i[3]!==t[3]||i[4]!==t[4]||i[5]!==t[5]||i[6]!==t[6]||i[7]!==t[7]||i[8]!==t[8]||i[9]!==t[9]||i[10]!==t[10]||i[11]!==t[11]||i[12]!==t[12]||i[13]!==t[13]||i[14]!==t[14]||i[15]!==t[15])})(f,r)&&(this._context.useProgram(this),this._context.gl.uniformMatrix4fv(this._getUniformLocation(t),e,r),void 0===f?this._nameToUniformMatrix4[t]=Array.from(r):H(r,f))}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){}}function W(i,t){if((0,A.Wi)(i)||i.length!==t.length)return!0;for(let r=0;r<i.length;++r)if(i[r]!==t[r])return!0;return!1}function it(i,t,r){const e="webgl2"===i.webglVersion?function ft(i,t){const r=function ut(i){return tt_enableCache?et.get(i):null}(i);if((0,A.pC)(r))return r;const e=G(i);if("300 es"===function k(i,t="100",r="300 es"){const e=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const f of i)if("preprocessor"===f.type){const l=e.exec(f.data);if(l){const h=l[1].replace(/\s\s+/g," ");if(h===r)return h;if(h===t)return f.data="#version "+r,t;throw new Error("unknown glsl version: "+h)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}(e,"100","300 es"))throw new Error("shader is already glsl 300 es");let f=null,l=null;const h={},O={};for(let y=0;y<e.length;++y){const p=e[y];switch(p.type){case"keyword":35633===t&&"attribute"===p.data?p.data="in":"varying"===p.data&&(p.data=35633===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(p.data.trim())&&(p.data=p.data.replace(/(2D|Cube|EXT)/g,"")),35632===t&&"gl_FragColor"===p.data&&(f||(f=$(e,h,"fragColor"),ct(e,f,"vec4")),p.data=f),35632===t&&"gl_FragData"===p.data){const U=lt(e,y+1),w=$(e,h,"fragData");ht(e,w,"vec4",U,"mediump"),p.data=w}else 35632===t&&"gl_FragDepthEXT"===p.data&&(l||(l=$(e,h,"gl_FragDepth")),p.data=l);break;case"ident":if(x.indexOf(p.data)>=0){if(35633===t&&Q(e,y))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");p.data in O||(O[p.data]=$(e,h,p.data)),p.data=O[p.data]}}}for(let y=e.length-1;y>=0;--y){const p=e[y];if("preprocessor"===p.type){const U=p.data.match(/\#extension\s+(.*)\:/);if(U&&U[1]&&K.indexOf(U[1].trim())>=0){const B=e[y+1];e.splice(y,B&&"whitespace"===B.type?2:1)}const w=p.data.match(/\#ifdef\s+(.*)/);w&&w[1]&&K.indexOf(w[1].trim())>=0&&(p.data="#if 1");const V=p.data.match(/\#ifndef\s+(.*)/);V&&V[1]&&K.indexOf(V[1].trim())>=0&&(p.data="#if 0")}}return function _t(i,t){return tt_enableCache&&et.set(i,t),t}(i,function Z(i){return i.map(t=>"eof"!==t.type?t.data:"").join("")}(e))}(r,t):r,f=i.gl,l=f.createShader(t);return f.shaderSource(l,e),f.compileShader(l),(0,R.CG)()&&!f.getShaderParameter(l,f.COMPILE_STATUS)&&(console.error("Compile error in ".concat(35633===t?"vertex":"fragment"," shader")),console.error(f.getShaderInfoLog(l)),console.error(function mt(i){let t=2;return i.replace(/\n/g,()=>"\n"+function gt(i){return i>=1e3?i.toString():("  "+i).slice(-3)}(t++)+":")}(e)),"webgl2"===i.webglVersion&&(console.log("Shader source before transpilation:"),console.log(r))),l}function H(i,t){for(let r=0;r<i.length;++r)t[r]=i[r]}},49266:(N,D,m)=>{m.d(D,{Z:()=>A});var j=m(67969);class A{constructor(v,x){this._context=v,this._desc=x,this._context.instanceCounter.increment(j._g.Renderbuffer,this);const T=this._context.gl;this.glName=T.createRenderbuffer(),this._context.bindRenderbuffer(this),T.renderbufferStorage(T.RENDERBUFFER,x.internalFormat,x.width,x.height)}get descriptor(){return this._desc}resize(v,x){const T=this._desc;if(T.width===v&&T.height===x)return;T.width=v,T.height=x;const M=this._context.gl;this._context.bindRenderbuffer(this),M.renderbufferStorage(M.RENDERBUFFER,T.internalFormat,T.width,T.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(j._g.Renderbuffer,this),this._context=null)}}},26906:(N,D,m)=>{m.d(D,{XP:()=>x,RG:()=>M,un:()=>c,UF:()=>T,_V:()=>R}),m(8314);var A=m(62208);function R(a,_){return a.vertexBuffers[_].size/function v(a){return a[0].stride}(a.layout[_])}function x(a,_,g,b,E){const n=a.gl,s=a.capabilities.instancing;a.bindBuffer(g);for(const o of b){const u=_.get(o.name);void 0===u&&console.error(`There is no location for vertex attribute '${o.name}' defined.`),o.baseInstance&&!o.divisor&&console.error(`Vertex attribute '${o.name}' uses baseInstanceOffset without divisor.`);const P=(E||(0+o.baseInstance?o.baseInstance:0))*o.stride;if(o.count<=4)n.vertexAttribPointer(u,o.count,o.type,o.normalized,o.stride,o.offset+P),n.enableVertexAttribArray(u),o.divisor>0&&s&&s.vertexAttribDivisor(u,o.divisor);else if(9===o.count)for(let d=0;d<3;d++)n.vertexAttribPointer(u+d,3,o.type,o.normalized,o.stride,o.offset+12*d+P),n.enableVertexAttribArray(u+d),o.divisor>0&&s&&s.vertexAttribDivisor(u+d,o.divisor);else if(16===o.count)for(let d=0;d<4;d++)n.vertexAttribPointer(u+d,4,o.type,o.normalized,o.stride,o.offset+16*d+P),n.enableVertexAttribArray(u+d),o.divisor>0&&s&&s.vertexAttribDivisor(u+d,o.divisor);else console.error("Unsupported vertex attribute element count: "+o.count)}}function T(a,_,g,b){const E=a.gl,n=a.capabilities.instancing;a.bindBuffer(g);for(const s of b){const o=_.get(s.name);if(s.count<=4)E.disableVertexAttribArray(o),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(o,0);else if(9===s.count)for(let u=0;u<3;u++)E.disableVertexAttribArray(o+u),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(o+u,0);else if(16===s.count)for(let u=0;u<4;u++)E.disableVertexAttribArray(o+u),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(o+u,0);else console.error("Unsupported vertex attribute element count: "+s.count)}a.unbindBuffer(34962)}function M(a){switch(a){case 6406:case 6409:case 36168:case 33778:case 33779:case 37490:case 37491:case 37496:case 37497:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34837:return 12;case 34836:return 16;case 33776:case 33777:case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5}return 0}function c(a){if((0,A.Wi)(a))return 0;if("descriptor"in a)return a.glName?c(a.descriptor):0;const _=a.internalFormat||"pixelFormat"in a&&a.pixelFormat;if(!_)return 0;const g="hasMipmap"in a&&a.hasMipmap?1.3:1,b=a.width*a.height;return M(_)*b*g}},49353:(N,D,m)=>{m.d(D,{Z:()=>T});var j=m(63290),A=m(62208),R=m(67969),v=m(26906);const x=j.Z.getLogger("esri.views.webgl.VertexArrayObject");class T{constructor(c,a,_,g,b=null){this._context=c,this._locations=a,this._layout=_,this._buffers=g,this._indexBuffer=b,this._glName=null,this._initialized=!1,c.instanceCounter.increment(R._g.VAO,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((c,a)=>c+this._buffers[a].size,(0,A.pC)(this._indexBuffer)?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(c=!0){if(this._context){if(this._glName){var a,_;const g=null==(a=this._context)||null==(_=a.capabilities)?void 0:_.vao;g?(g.deleteVertexArray(this._glName),this._glName=null):x.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),c){for(const g in this._buffers)this._buffers[g].dispose(),delete this._buffers[g];this._indexBuffer=(0,A.O3)(this._indexBuffer)}this._context.instanceCounter.decrement(R._g.VAO,this),this._context=null}else(this._glName||c&&Object.getOwnPropertyNames(this._buffers).length>0)&&x.warn("Leaked WebGL VAO")}initialize(){if(this._initialized)return;const c=this._context.capabilities.vao;if(c){const a=c.createVertexArray();c.bindVertexArray(a),this._bindLayout(),c.bindVertexArray(null),this._glName=a}this._initialized=!0}bind(){this.initialize();const c=this._context.capabilities.vao;c?c.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const{_buffers:c,_layout:a,_indexBuffer:_}=this;c||x.error("Vertex buffer dictionary is empty!");const g=this._context.gl;for(const b in c){const E=c[b];E||x.error("Vertex buffer is uninitialized!");const n=a[b];n||x.error("Vertex element descriptor is empty!"),(0,v.XP)(this._context,this._locations,E,n)}(0,A.pC)(_)&&(this._context.capabilities.vao?g.bindBuffer(g.ELEMENT_ARRAY_BUFFER,_.glName):this._context.bindBuffer(_))}unbind(){this.initialize();const c=this._context.capabilities.vao;c?c.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const{_buffers:c,_layout:a}=this;c||x.error("Vertex buffer dictionary is empty!");for(const _ in c){const g=c[_];g||x.error("Vertex buffer is uninitialized!"),(0,v.UF)(this._context,this._locations,g,a[_])}(0,A.pC)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}}}]);