"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3375],{63375:(b,v,t)=>{t.r(v),t.d(v,{default:()=>r});var e=t(15861),_=t(17626),g=t(88879),y=t(7093),i=t(77712),n=(t(85931),t(8314),t(90912),t(76898)),m=t(37384),D=t(36275),j=t(97291),M=t(45611);const a={remove(){},pause(){},resume(){}};let p=class extends((0,m.y)(M.Z)){initialize(){this.graphicsView=new j.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new D.Z(this.view.featuresTilingScheme)})}attach(){this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.handles.remove("graphicslayerview2d")}hitTest(s){var l=this;return(0,e.Z)(function*(){return l.graphicsView?l.graphicsView.hitTest(s):null})()}fetchPopupFeatures(s){var l=this;return(0,e.Z)(function*(){if(l.graphicsView)return l.graphicsView.hitTest(s).filter(h=>!!h.popupTemplate)})()}update(s){this.graphicsView.processUpdate(s)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(s){var l;let h;return"number"==typeof s?h=[s]:s instanceof g.Z?h=[s.uid]:Array.isArray(s)&&s.length>0?h="number"==typeof s[0]?s:s.map(u=>u&&u.uid):y.Z.isCollection(s)&&s.length>0&&(h=s.map(u=>u&&u.uid).toArray()),h=null==(l=h)?void 0:l.filter(u=>null!=u),h.length?(this.graphicsView.addHighlight(h),{remove:()=>this.graphicsView.removeHighlight(h)}):a}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}};(0,_._)([(0,i.Cb)()],p.prototype,"graphicsView",void 0),p=(0,_._)([(0,n.j)("esri.views.2d.layers.GraphicsLayerView2D")],p);const r=p},37384:(b,v,t)=>{t.d(v,{y:()=>x});var e=t(17626),_=t(7093),g=t(89726),y=t(27e3),i=t(77712),n=(t(85931),t(8314),t(90912),t(76898)),m=t(1011),D=t(86162);t(63290),t(82255);let a=class extends D.wq{};a=(0,e._)([(0,n.j)("esri.views.layers.support.ClipArea")],a);const p=a;var r;let s=r=class extends p{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new r({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,e._)([(0,i.Cb)({type:[Number,String],json:{write:!0}})],s.prototype,"left",void 0),(0,e._)([(0,i.Cb)({type:[Number,String],json:{write:!0}})],s.prototype,"right",void 0),(0,e._)([(0,i.Cb)({type:[Number,String],json:{write:!0}})],s.prototype,"top",void 0),(0,e._)([(0,i.Cb)({type:[Number,String],json:{write:!0}})],s.prototype,"bottom",void 0),(0,e._)([(0,i.Cb)({readOnly:!0})],s.prototype,"version",null),s=r=(0,e._)([(0,n.j)("esri.views.layers.support.ClipRect")],s);const l=s;t(29132);var L,u=t(21674),B=t(91179),V=t(2004),W=t(37118);const K={base:u.Z,key:"type",typeMap:{extent:V.Z,polygon:W.Z}};let E=L=class extends p{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new L({geometry:this.geometry.clone()})}};(0,e._)([(0,i.Cb)({types:K,json:{read:B.im,write:!0}})],E.prototype,"geometry",void 0),(0,e._)([(0,i.Cb)({readOnly:!0})],E.prototype,"version",null),E=L=(0,e._)([(0,n.j)("esri.views.layers.support.Geometry")],E);const S=E;let C=class extends p{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,e._)([(0,i.Cb)({type:[[[Number]]],json:{write:!0}})],C.prototype,"path",void 0),(0,e._)([(0,i.Cb)({readOnly:!0})],C.prototype,"version",null),C=(0,e._)([(0,n.j)("esri.views.layers.support.Path")],C);const T=_.Z.ofType({key:"type",base:p,typeMap:{rect:l,path:C,geometry:S}}),x=G=>{let d=class extends G{constructor(){super(...arguments),this.clips=new T,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var c;this.container||(this.container=new m.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,y.S1)(this,"suspended",o=>{this.container&&(this.container.visible=!o),this.view&&!o&&this.updateRequested&&this.view.requestUpdate()},!0),(0,y.S1)(this,["layer.opacity","container"],()=>{var o,O;this.container&&(this.container.opacity=null!=(o=null==(O=this.layer)?void 0:O.opacity)?o:1)},!0),(0,y.S1)(this,["layer.blendMode"],o=>{this.container&&(this.container.blendMode=o)},!0),(0,y.S1)(this,["layer.effect"],o=>{this.container&&(this.container.effect=o)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(c=this.view)&&c.whenLayerView?this.view.whenLayerView(this.layer).then(o=>{o!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(!this.updatingHandles||!this.updatingHandles.updating)}isVisibleAtScale(c){let o=!0;const O=this.layer,f=O.minScale,I=O.maxScale;if(null!=f&&null!=I){let w=!f,A=!I;!w&&c<=f&&(w=!0),!A&&c>=I&&(A=!0),o=w&&A}return o}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(c){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",c),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(c))):this.updateRequested=!1}hitTest(c,o){return Promise.resolve(null)}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return(0,e._)([(0,i.Cb)({type:T,set(c){const o=(0,g.Z)(c,this._get("clips"),T);this._set("clips",o)}})],d.prototype,"clips",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"moving",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"attached",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"container",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"suspended",void 0),(0,e._)([(0,i.Cb)({readOnly:!0})],d.prototype,"updateParameters",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"updateRequested",void 0),(0,e._)([(0,i.Cb)()],d.prototype,"updating",null),(0,e._)([(0,i.Cb)()],d.prototype,"view",void 0),d=(0,e._)([(0,n.j)("esri.views.2d.layers.LayerView2D")],d),d}},45611:(b,v,t)=>{t.d(v,{Z:()=>p});var e=t(17626),_=t(14517),g=t(61885),y=t(80542),i=t(61996),U=t(63290),P=t(62208),R=t(60330),n=t(77712),M=(t(85931),t(8314),t(90912),t(76898));let a=class extends((0,y.p)((0,i.I)((0,R.v)(g.Z.EventedMixin(_.Z))))){constructor(r){super(r),this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const s=this.layer&&this.layer.id||"no id",l=this.layer&&this.layer.title||"no title";throw U.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${l}', id: '${s}')`,r),r}})}get fullOpacity(){return(0,P.Pt)(this.get("layer.opacity"),1)*(0,P.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var r;return!0===(null==(r=this.layer)?void 0:r.visible)}set visible(r){void 0!==r?this._override("visible",r):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const r=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,e._)([(0,n.Cb)()],a.prototype,"fullOpacity",null),(0,e._)([(0,n.Cb)()],a.prototype,"layer",void 0),(0,e._)([(0,n.Cb)()],a.prototype,"parent",void 0),(0,e._)([(0,n.Cb)({readOnly:!0})],a.prototype,"suspended",null),(0,e._)([(0,n.Cb)({readOnly:!0})],a.prototype,"suspendInfo",null),(0,e._)([(0,n.Cb)({readOnly:!0})],a.prototype,"legendEnabled",null),(0,e._)([(0,n.Cb)({type:Boolean,readOnly:!0})],a.prototype,"updating",null),(0,e._)([(0,n.Cb)({readOnly:!0})],a.prototype,"updatingProgress",null),(0,e._)([(0,n.Cb)()],a.prototype,"visible",null),a=(0,e._)([(0,M.j)("esri.views.layers.LayerView")],a);const p=a}}]);