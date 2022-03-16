"use strict";var fe=Object.defineProperty,pe=Object.defineProperties,ce=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable,X=(v,u,r)=>u in v?fe(v,u,{enumerable:!0,configurable:!0,writable:!0,value:r}):v[u]=r,j=(v,u)=>{for(var r in u||(u={}))me.call(u,r)&&X(v,r,u[r]);if(J)for(var r of J(u))ye.call(u,r)&&X(v,r,u[r]);return v},Y=(v,u)=>pe(v,ce(u));(self.webpackChunksite=self.webpackChunksite||[]).push([[8618,9530],{13410:(v,u,r)=>{function x(s,i,e){return i.flatten(({sublayers:o})=>o).length!==s.length||!!s.some(o=>o.originIdOf("minScale")>e||o.originIdOf("maxScale")>e||o.originIdOf("renderer")>e||o.originIdOf("labelingInfo")>e||o.originIdOf("opacity")>e||o.originIdOf("labelsVisible")>e||o.originIdOf("source")>e)||!I(s,i)}function h(s,i,e){return!!s.some(a=>{const o=a.source;return!(!o||"map-layer"===o.type&&o.mapLayerId===a.id&&(!o.gdbVersion||o.gdbVersion===e.gdbVersion))||a.originIdOf("renderer")>2||a.originIdOf("labelingInfo")>2||a.originIdOf("opacity")>2||a.originIdOf("labelsVisible")>2})||!I(s,i)}function I(s,i){if(!s||!s.length)return!0;const e=i.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).map(l=>l.id).toArray();if(s.length>e.length)return!1;let a=0;const o=e.length;for(const{id:l}of s){for(;a<o&&e[a]!==l;)a++;if(a>=o)return!1}return!0}function C(s){return!!s&&s.some(i=>null!=i.minScale||i.layerDefinition&&null!=i.layerDefinition.minScale)}r.d(u,{FN:()=>h,ac:()=>C,QV:()=>x})},22264:(v,u,r)=>{function x(i,e){return e?"xoffset"in e&&e.xoffset?Math.max(i,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(i,Math.abs(e.yoffset||0)):i:i}function I(i,e){return"number"==typeof i?i:i&&i.stops&&i.stops.length?function h(i){let e=0,a=0;for(let o=0;o<i.length;o++){const l=i[o].size;"number"==typeof l&&(e+=l,a++)}return e/a}(i.stops):e}function s(i){const e=i&&i.renderer,a="touch"===(i&&i.event&&i.event.pointerType)?9:6;if(!e)return a;const o="visualVariables"in e?function C(i,e){if(!e)return i;const a=e.filter(y=>"size"===y.type).map(y=>{const{maxSize:E,minSize:O}=y;return(I(E,i)+I(O,i))/2});let o=0;const l=a.length;if(0===l)return i;for(let y=0;y<l;y++)o+=a[y];const f=Math.floor(o/l);return Math.max(f,i)}(a,e.visualVariables):a;if("simple"===e.type)return x(o,e.symbol);if("unique-value"===e.type){let l=o;return e.uniqueValueInfos.forEach(f=>{l=x(l,f.symbol)}),l}if("class-breaks"===e.type){let l=o;return e.classBreakInfos.forEach(f=>{l=x(l,f.symbol)}),l}return o}r.d(u,{k:()=>s})},82519:(v,u,r)=>{r.r(u),r.d(u,{default:()=>le});var x=r(15861),h=r(17626),I=r(63290),C=r(10699),s=r(77712),o=(r(85931),r(8314),r(90912),r(76898)),l=r(51815),f=r(91757),y=r(37384),E=r(97291),w=(r(82255),r(39406)),g=r(55051);let V=class extends g.Z{renderChildren(d){if(d.drawPhase!==w.jx.HIGHLIGHT||(this.attributeView.bindTextures(d.context),!this.children.some(b=>b.hasData)))return;super.renderChildren(d);const{painter:m}=d,p=m.effects.highlight;p.bind(d),d.context.setColorMask(!0,!0,!0,!0),d.context.clear(16384),this._renderChildren(d,p.defines.concat(["highlightAll"])),p.draw(d),p.unbind()}};V=(0,h._)([(0,o.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],V);const U=V;var L=r(67802),k=r(45611),_=r(26584),F=r(62208),q=r(55400),ee=r(14772),te=r(22264),re=r(46679),Z=r(10023),ne=r(79530);const ie=d=>{let m=class extends d{initialize(){this.exportImageParameters=new ee.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var p;return null==(p=this.exportImageParameters)||p.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(p,b){var M=this;return(0,x.Z)(function*(){const{layer:A}=M;if(!p)return Promise.reject(new _.Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:A}));const B=M.get("view.scale"),H=[],K=function(){var D=(0,x.Z)(function*(c){if(c.visible&&(0===c.minScale||B<=c.minScale)&&(0===c.maxScale||B>=c.maxScale))if(c.sublayers)c.sublayers.forEach(K);else if(c.popupEnabled){const S=(0,Z.V)(c,Y(j({},b),{defaultPopupTemplateEnabled:!1}));(0,F.pC)(S)&&H.unshift({sublayer:c,popupTemplate:S})}});return function(T){return D.apply(this,arguments)}}(),ue=A.sublayers.toArray().reverse().map(K);yield Promise.all(ue);const de=H.map(function(){var D=(0,x.Z)(function*({sublayer:c,popupTemplate:T}){yield c.load().catch(()=>{});const P=c.createQuery(),S=(0,F.pC)(b)?b.event:null,W=(0,te.k)({renderer:c.renderer,event:S}),$=M.createFetchPopupFeaturesQueryGeometry(p,W);if(P.geometry=$,P.outFields=yield(0,Z.e)(c,T),"map-image"===M.layer.type&&"floors"in M.view){var z,N;const he=null==(z=M.view)||null==(N=z.floors)?void 0:N.clone(),G=(0,ne.ff)(he,c);(0,F.pC)(G)&&(P.where=P.where?`(${P.where}) AND (${G})`:G)}const Q=yield M._loadArcadeModules(T);return Q&&Q.arcadeUtils.hasGeometryOperations(T)||(P.maxAllowableOffset=$.width/W),(yield c.queryFeatures(P)).features});return function(c){return D.apply(this,arguments)}}());return(yield(0,C.as)(de)).reduce((D,c)=>c.value?[...D,...c.value]:D,[]).filter(D=>null!=D)})()}canResume(){var p;return!(!super.canResume()||null!=(p=this.timeExtent)&&p.isEmpty)}_loadArcadeModules(p){if(p.get("expressionInfos.length")||Array.isArray(p.content)&&p.content.some(b=>"expression"===b.type))return(0,re.LC)()}};return(0,h._)([(0,s.Cb)()],m.prototype,"exportImageParameters",void 0),(0,h._)([(0,s.Cb)({readOnly:!0})],m.prototype,"exportImageVersion",null),(0,h._)([(0,s.Cb)()],m.prototype,"layer",void 0),(0,h._)([(0,s.Cb)()],m.prototype,"suspended",void 0),(0,h._)([(0,s.Cb)(q.qG)],m.prototype,"timeExtent",void 0),m=(0,h._)([(0,o.j)("esri.views.layers.MapImageLayerView")],m),m};var se=r(94421),ae=r(94672);const oe=I.Z.getLogger("esri.views.2d.layers.MapImageLayerView2D");let R=class extends(ie((0,se.y)((0,y.y)(k.Z)))){constructor(){super(...arguments),this._highlightGraphics=new l.J}update(d){this.strategy.update(d).catch(m=>{(0,C.D_)(m)||oe.error(m)})}attach(){const{imageMaxWidth:d,imageMaxHeight:m,version:p}=this.layer,b=p>=10.3,M=p>=10;this._bitmapContainer=new f.c,this.container.addChild(this._bitmapContainer);const A=new E.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new U(this.view.featuresTilingScheme)});this.container.addChild(A.container),this.strategy=new L.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:d,imageMaxHeight:m,imageRotationSupported:b,imageNormalizationSupported:M,hidpi:!0}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(this.watch("view.floors",()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(d,m){return this._highlightGraphics.add(d),{remove:()=>{this._highlightGraphics.remove(d)}}}createFetchPopupFeaturesQueryGeometry(d,m){return(0,ae.K)(d,m,this.view)}doRefresh(){var d=this;return(0,x.Z)(function*(){d.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(d,m,p,b){return this.layer.fetchImage(d,m,p,j({timeExtent:this.timeExtent,floors:this.view.floors},b))}};(0,h._)([(0,s.Cb)()],R.prototype,"strategy",void 0),(0,h._)([(0,s.Cb)()],R.prototype,"updating",void 0),R=(0,h._)([(0,o.j)("esri.views.2d.layers.MapImageLayerView2D")],R);const le=R},10023:(v,u,r)=>{r.d(u,{V:()=>i,e:()=>C});var x=r(15861),h=r(62208),I=r(36630);function C(e){return s.apply(this,arguments)}function s(){return(s=(0,x.Z)(function*(e,a=e.popupTemplate){if(!(0,h.pC)(a))return[];const o=yield a.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:l}=a,{objectIdField:f,typeIdField:y,globalIdField:E,relationships:O}=e;if(o.includes("*"))return["*"];const w=l?yield(0,I.CH)(e):[],g=(0,I.Q0)(e.fieldsIndex,[...o,...w]);return y&&g.push(y),g&&f&&e.fieldsIndex.has(f)&&-1===g.indexOf(f)&&g.push(f),g&&E&&e.fieldsIndex.has(E)&&-1===g.indexOf(E)&&g.push(E),O&&O.forEach(V=>{const{keyField:U}=V;g&&U&&e.fieldsIndex.has(U)&&-1===g.indexOf(U)&&g.push(U)}),g})).apply(this,arguments)}function i(e,a){return e.popupTemplate?e.popupTemplate:(0,h.pC)(a)&&a.defaultPopupTemplateEnabled&&(0,h.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},94672:(v,u,r)=>{r.d(u,{K:()=>s}),r(29132);var h=r(62208),I=r(16730),C=r(2004);function s(a,o,l,f=new C.Z){let y;if("2d"===l.type)y=o*l.resolution;else if("3d"===l.type){const U=l.overlayPixelSizeInMapUnits(a),L=l.basemapSpatialReference;y=(0,h.pC)(L)&&!L.equals(l.spatialReference)?(0,I.c9)(L)/(0,I.c9)(l.spatialReference):o*U}const E=a.x-y,O=a.y-y,w=a.x+y,g=a.y+y,{spatialReference:V}=l;return f.xmin=Math.min(E,w),f.ymin=Math.min(O,g),f.xmax=Math.max(E,w),f.ymax=Math.max(O,g),f.spatialReference=V,f}new C.Z},79530:(v,u,r)=>{function x(s){var i;const e=s.layer;return"floorInfo"in e&&null!=(i=e.floorInfo)&&i.floorField&&"floors"in s.view?C(s.view.floors,e.floorInfo.floorField):null}function h(s,i){var e;return"floorInfo"in i&&null!=(e=i.floorInfo)&&e.floorField?C(s,i.floorInfo.floorField):null}function I(s,i){const{definitionExpression:e}=i;return s?e?`(${e}) AND (${s})`:s:e}function C(s,i){if(null==s||!s.length)return null;const e=s.filter(a=>""!==a).map(a=>`'${a}'`);return e.push("''"),`${i} IN (${e.join(",")}) OR ${i} IS NULL`}r.d(u,{Hp:()=>I,cx:()=>x,ff:()=>h})}}]);