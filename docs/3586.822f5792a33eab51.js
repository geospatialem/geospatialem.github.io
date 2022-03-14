"use strict";var jt=Object.defineProperty,Nt=Object.defineProperties,Lt=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,b=(v,c,o)=>c in v?jt(v,c,{enumerable:!0,configurable:!0,writable:!0,value:o}):v[c]=o,C=(v,c)=>{for(var o in c||(c={}))Pt.call(c,o)&&b(v,o,c[o]);if(Y)for(var o of Y(c))Zt.call(c,o)&&b(v,o,c[o]);return v},x=(v,c)=>Nt(v,Lt(c));(self.webpackChunksite=self.webpackChunksite||[]).push([[3586],{13586:(v,c,o)=>{o.r(c),o.d(c,{default:()=>Mt});var g=o(15861),l=o(17626),j=o(26584),B=o(72392),m=o(62208),H=o(99959),Q=o(10699),X=o(27e3),y=o(77712),k=(o(85931),o(8314),o(90912),o(68653)),N=o(76898),q=o(22558),h=o(21726),_=o(35948),tt=o(34117),et=o(31283);function L(t){return P[function ot(t){return t instanceof Blob?t.type:function it(t){const e=(0,h.Ml)(t);return Z[e]||w}(t.url)}(t)]||rt}const P={},w="text/plain",rt=P[w],Z={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const t in Z)P[Z[t]]=t;var S=o(29840);function J(t){const e=(0,m.pC)(t)&&t.origins?t.origins:[void 0];return(i,r)=>{const s=function nt(t,e,i){if((0,m.pC)(t)&&"resource"===t.type)return function st(t,e,i){const r=(0,tt.VZ)(e,i);return{type:String,read:(s,p,a)=>{const n=(0,S.r)(s,p,a);return r.type===String?n:"function"==typeof r.type?new r.type({url:n}):void 0},write:{writer(s,p,a,n){if(!n||!n.resources)return"string"==typeof s?void(p[a]=(0,S.t)(s,n)):void(p[a]=s.write({},n));const f=function yt(t){return(0,m.Wi)(t)?null:"string"==typeof t?t:t.url}(s),u=f?(0,S.t)(f,x(C({},n),{verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),1):null,U=r.type!==String&&(!(0,q.l)(this)||n&&n.origin&&this.originIdOf(i)>(0,et.M9)(n.origin));n&&n.portalItem&&(0,m.pC)(u)&&!(0,h.YP)(u)?U?function at(t,e,i,r,s,p,a,n){const f=a.portalItem.resourceFromPath(r),u=W(i,r,a);L(u)===(0,h.Ml)(f.path)?(z(t,e,f,u,a.resources.toUpdate),s[p]=r):K(t,e,i,r,s,p,a,n)}(this,i,s,u,p,a,n,t):function lt(t,e,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(t)}),e[i]=t}(u,p,a,n):n&&n.portalItem&&((0,m.Wi)(u)||(0,m.pC)((0,S.i)(u))||(0,h.jc)(u)||U)?K(this,i,s,u,p,a,n,t):p[a]=u}}}}(t,e,i);switch((0,m.pC)(t)&&t.type?t.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:s}=S.p;return{read:r,write:s}}}}(t,i,r);for(const p of e){const a=(0,y.CJ)(i,p,r);for(const n in s)a[n]=s[n]}}}function K(t,e,i,r,s,p,a,n){const f=(0,_.D)(),u=W(i,r,a),U=(0,h.v_)((0,m.U2)(n,"prefix"),f),Tt=`${U}.${L(u)}`,R=a.portalItem.resourceFromPath(Tt);(0,h.jc)(r)&&a.resources.pendingOperations.push(function pt(t){return A.apply(this,arguments)}(r).then(Rt=>{R.path=`${U}.${L(Rt)}`,s[p]=R.itemRelativeUrl}).catch(()=>{})),z(t,e,R,u,a.resources.toAdd),s[p]=R.itemRelativeUrl}function z(t,e,i,r,s){s.push({resource:i,content:r,finish:p=>{!function dt(t,e,i){"string"==typeof t[e]?t[e]=i.url:t[e].url=i.url}(t,e,p)}})}function W(t,e,i){return"string"==typeof t?{url:e}:new Blob([JSON.stringify(t.toJSON(i))],{type:"application/json"})}function A(){return(A=(0,g.Z)(function*(t){const e=(yield Promise.resolve().then(o.bind(o,84792))).default,{data:i}=yield e(t,{responseType:"blob"});return i})).apply(this,arguments)}var D,ct=o(63602),ut=o(50085),mt=o(65088),vt=o(49286),ht=o(6647),ft=o(99555),gt=o(44900),St=o(55400),M=o(35031),Ot=o(84792),Ct=o(7093),F=o(86162),It=(o(29132),o(58817)),Ut=o(14889),xt=o(99433),G=o(56741),$=o(37118);let O=D=class extends F.wq{constructor(t){super(t),this.geometry=null,this.type="clip"}writeGeometry(t,e,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,G.Up)(t.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new Ut.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const s=new $.Z;(0,G.Wt)(t,s,r.layer.spatialReference),e[i]=s.toJSON(r)}else e[i]=t.toJSON(r);delete e[i].spatialReference}clone(){return new D({geometry:(0,It.d9)(this.geometry),type:this.type})}};(0,l._)([(0,y.Cb)({type:$.Z}),J()],O.prototype,"geometry",void 0),(0,l._)([(0,xt.c)(["web-scene","portal-item"],"geometry")],O.prototype,"writeGeometry",null),(0,l._)([(0,y.Cb)({type:["clip","mask","replace"],nonNullable:!0}),J()],O.prototype,"type",void 0),O=D=(0,l._)([(0,N.j)("esri.layers.support.SceneModification")],O);const V=O;var I;let T=I=class extends((0,F.eC)(Ct.Z.ofType(V))){constructor(t){super(t),this.url=null}toJSON(t){return this.toArray().map(e=>e.toJSON(t)).filter(e=>!!e.geometry)}clone(){return new I({url:this.url,items:this.items.map(t=>t.clone())})}_readModifications(t,e){for(const i of t)this.add(V.fromJSON(i,e))}static fromJSON(t,e){const i=new I;return i._readModifications(t,e),i}static fromUrl(t,e,i){return(0,g.Z)(function*(){const r={url:(0,h.mN)(t),origin:"service"},s=yield(0,Ot.default)(t,{responseType:"json",signal:(0,m.U2)(i,"signal")}),p=e.toJSON(),a=[];for(const n of s.data)a.push(V.fromJSON(x(C({},n),{geometry:x(C({},n.geometry),{spatialReference:p})}),r));return new I({url:t,items:a})})()}};(0,l._)([(0,y.Cb)({type:String})],T.prototype,"url",void 0),T=I=(0,l._)([(0,N.j)("esri.layers.support.SceneModifications")],T);const E=T;let d=class extends((0,gt.V)((0,mt.Y)((0,vt.q)((0,ht.I)((0,ft.M)((0,H.R)((0,ut.V)(ct.Z)))))))){constructor(...t){super(...t),this.handles=new B.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,X.on)(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(t,e){return"string"==typeof t?C({url:t},e):t}readModifications(t,e,i){this._modificationsSource={url:(0,S.f)(t,i),context:i}}load(t){var e=this;return(0,g.Z)(function*(){return e.addResolvingPromise(e._doLoad(t)),e})()}_doLoad(t){var e=this;return(0,g.Z)(function*(){const i=(0,m.U2)(t,"signal");try{yield e.loadFromPortal({supportedTypes:["Scene Service"]},t)}catch(r){(0,Q.r9)(r)}if(yield e._fetchService(i),(0,m.pC)(e._modificationsSource)){const r=yield E.fromUrl(e._modificationsSource.url,e.spatialReference,t);e.setAtOrigin("modifications",r,e._modificationsSource.context.origin),e._modificationsSource=null}yield e._fetchIndexAndUpdateExtent(e.nodePages,i)})()}beforeSave(){if(!(0,m.Wi)(this._modificationsSource))return this.load().then(()=>{},()=>{})}saveAs(t,e){var i=this;return(0,g.Z)(function*(){return i._debouncedSaveOperations(1,x(C({},e),{getTypeKeywords:()=>i._getTypeKeywords(),portalItemLayerType:"integrated-mesh"}),t)})()}save(){var t=this;return(0,g.Z)(function*(){const e={getTypeKeywords:()=>t._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return t._debouncedSaveOperations(0,e)})()}validateLayer(t){if(t.layerType&&"IntegratedMesh"!==t.layerType)throw new j.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:t.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new j.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new j.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,l._)([(0,y.Cb)({type:String,readOnly:!0})],d.prototype,"geometryType",void 0),(0,l._)([(0,y.Cb)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,l._)([(0,y.Cb)({type:["IntegratedMeshLayer"]})],d.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],d.prototype,"type",void 0),(0,l._)([(0,y.Cb)({type:M.U4,readOnly:!0})],d.prototype,"nodePages",void 0),(0,l._)([(0,y.Cb)({type:[M.QI],readOnly:!0})],d.prototype,"materialDefinitions",void 0),(0,l._)([(0,y.Cb)({type:[M.Yh],readOnly:!0})],d.prototype,"textureSetDefinitions",void 0),(0,l._)([(0,y.Cb)({type:[M.H3],readOnly:!0})],d.prototype,"geometryDefinitions",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],d.prototype,"serviceUpdateTimeStamp",void 0),(0,l._)([(0,y.Cb)({type:E}),J({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],d.prototype,"modifications",void 0),(0,l._)([(0,k.r)(["web-scene","portal-item"],"modifications")],d.prototype,"readModifications",null),(0,l._)([(0,y.Cb)(St.PV)],d.prototype,"elevationInfo",void 0),(0,l._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],d.prototype,"path",void 0),d=(0,l._)([(0,N.j)("esri.layers.IntegratedMeshLayer")],d);const Mt=d}}]);