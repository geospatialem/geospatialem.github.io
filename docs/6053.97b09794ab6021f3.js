"use strict";var O=Object.defineProperty,V=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,F=(n,a,e)=>a in n?O(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,L=(n,a)=>{for(var e in a||(a={}))J.call(a,e)&&F(n,e,a[e]);if(V)for(var e of V(a))K.call(a,e)&&F(n,e,a[e]);return n};(self.webpackChunksite=self.webpackChunksite||[]).push([[6053],{6053:(n,a,e)=>{e.r(a),e.d(a,{default:()=>A});var R=e(15861),h=e(17626),u=e(26584),Z=e(63290),b=e(10699),m=e(77712),w=(e(85931),e(8314),e(90912),e(76898)),U=e(2004),W=e(91757),j=e(37384),D=e(67802),z=e(45611),T=e(94421),G=e(55400),H=e(51920);const N=r=>{let t=class extends r{initialize(){this.exportImageParameters=new H.j({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var i;return null==(i=this.exportImageParameters)||i.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(i){const{layer:o}=this;if(!i)return Promise.reject(new u.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));const{popupEnabled:l}=o;if(!l)return Promise.reject(new u.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:l}));const g=this.createFetchPopupFeaturesQuery(i);if(!g)return Promise.resolve([]);const{extent:s,width:p,height:d,x:c,y:x}=g;if(!(s&&p&&d))throw new u.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:p,height:d});const v=o.fetchFeatureInfo(s,p,d,c,x);return Promise.resolve(v?[v]:[])}};return(0,h._)([(0,m.Cb)()],t.prototype,"exportImageParameters",void 0),(0,h._)([(0,m.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,h._)([(0,m.Cb)()],t.prototype,"layer",void 0),(0,h._)([(0,m.Cb)(G.qG)],t.prototype,"timeExtent",void 0),t=(0,h._)([(0,w.j)("esri.layers.mixins.WMSLayerView")],t),t},Q=Z.Z.getLogger("esri.views.2d.layers.WMSLayerView2D");let y=class extends(N((0,T.y)((0,j.y)(z.Z)))){initialize(){const{layer:r,view:t}=this;r.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new u.Z("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:r})))}update(r){this.strategy.update(r).catch(t=>{(0,b.D_)(t)||Q.error(t)})}attach(){const{layer:r}=this,{imageMaxHeight:t,imageMaxWidth:i}=r;this._bitmapContainer=new W.c,this.container.addChild(this._bitmapContainer),this.strategy=new D.Z({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(r){const{view:t}=this,i=this._bitmapContainer,{x:o,y:l}=r,{spatialReference:g}=t;let s=null,p=0,d=0;if(i.children.some(B=>{const{width:C,height:I,resolution:E,x:f,y:P}=B,M=f+E*C,S=P-E*I;return o>=f&&o<=M&&l<=P&&l>=S&&(s=new U.Z({xmin:f,ymin:S,xmax:M,ymax:P,spatialReference:g}),p=C,d=I,!0)}),!s)return null;const c=s.width/p,x=Math.round((o-s.xmin)/c),v=Math.round((s.ymax-l)/c);return{extent:s,width:p,height:d,x,y:v}}doRefresh(){var r=this;return(0,R.Z)(function*(){r.requestUpdate()})()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(r,t,i,o){return this.layer.fetchImage(r,t,i,L({timeExtent:this.timeExtent},o))}};(0,h._)([(0,m.Cb)()],y.prototype,"strategy",void 0),(0,h._)([(0,m.Cb)()],y.prototype,"updating",void 0),y=(0,h._)([(0,w.j)("esri.views.2d.layers.WMSLayerView2D")],y);const A=y}}]);